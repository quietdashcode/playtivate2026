<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

$respond = static function (int $statusCode, array $payload): void {
    http_response_code($statusCode);
    echo json_encode($payload);
    exit;
};

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    $respond(405, [
        'ok' => false,
        'message' => 'Method not allowed.',
    ]);
}

$isSecure = !empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off';
session_set_cookie_params([
    'httponly' => true,
    'samesite' => 'Strict',
    'secure' => $isSecure,
]);

session_start();

$recipient = 'info@playtivate.com';
$fromAddress = 'no-reply@playtivate.com';
$subjectPrefix = 'Playtivate Contact Form';
$allowedServices = ['VR/AR', 'E-Learning', 'Serious Games', 'Not Sure Yet'];
$maxAttempts = 5;
$rateWindowSeconds = 900;

$requestHost = strtolower((string) ($_SERVER['HTTP_HOST'] ?? ''));
$origin = (string) ($_SERVER['HTTP_ORIGIN'] ?? '');
$referer = (string) ($_SERVER['HTTP_REFERER'] ?? '');

$originHost = strtolower((string) parse_url($origin, PHP_URL_HOST));
$refererHost = strtolower((string) parse_url($referer, PHP_URL_HOST));

if (($originHost !== '' && $originHost !== $requestHost) || ($refererHost !== '' && $refererHost !== $requestHost)) {
    $respond(403, [
        'ok' => false,
        'message' => 'Invalid request origin.',
    ]);
}

$csrfToken = (string) ($_POST['csrfToken'] ?? '');
$sessionToken = (string) ($_SESSION['contact_csrf_token'] ?? '');

if ($csrfToken === '' || $sessionToken === '' || !hash_equals($sessionToken, $csrfToken)) {
    $respond(419, [
        'ok' => false,
        'message' => 'Your session expired. Please refresh the page and try again.',
    ]);
}

$clientIp = (string) ($_SERVER['REMOTE_ADDR'] ?? 'unknown');
$rateLimitFile = sys_get_temp_dir() . '/playtivate-contact-rate-' . hash('sha256', $clientIp) . '.json';
$attemptTimes = [];

if (is_file($rateLimitFile)) {
    $stored = json_decode((string) file_get_contents($rateLimitFile), true);
    if (is_array($stored)) {
        $attemptTimes = array_values(array_filter(
            $stored,
            static fn ($timestamp): bool => is_int($timestamp) || ctype_digit((string) $timestamp)
        ));
    }
}

$now = time();
$attemptTimes = array_values(array_filter(
    $attemptTimes,
    static fn ($timestamp): bool => ((int) $timestamp) > ($now - $rateWindowSeconds)
));

if (count($attemptTimes) >= $maxAttempts) {
    $respond(429, [
        'ok' => false,
        'message' => 'Too many enquiries from this connection. Please wait a few minutes and try again.',
    ]);
}

$honeypot = trim((string) ($_POST['website'] ?? ''));
if ($honeypot !== '') {
    $respond(200, [
        'ok' => true,
        'message' => 'Submission received.',
    ]);
}

$name = trim((string) ($_POST['name'] ?? ''));
$organization = trim((string) ($_POST['organization'] ?? ''));
$email = trim((string) ($_POST['email'] ?? ''));
$serviceInterest = trim((string) ($_POST['serviceInterest'] ?? ''));
$projectGoals = trim((string) ($_POST['projectGoals'] ?? ''));
$timeline = trim((string) ($_POST['timeline'] ?? ''));

if ($name === '' || $organization === '' || $email === '' || $projectGoals === '') {
    $respond(422, [
        'ok' => false,
        'message' => 'Please complete all required fields.',
    ]);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $respond(422, [
        'ok' => false,
        'message' => 'Please enter a valid email address.',
    ]);
}

$cleanSingleLine = static function (string $value, int $maxLength): string {
    $value = strip_tags($value);
    $value = preg_replace('/\s+/u', ' ', $value) ?? '';
    $value = trim($value);

    if (function_exists('mb_substr')) {
        return mb_substr($value, 0, $maxLength);
    }

    return substr($value, 0, $maxLength);
};

$cleanMultiline = static function (string $value, int $maxLength): string {
    $value = strip_tags($value);
    $value = str_replace(["\r\n", "\r"], "\n", $value);
    $lines = array_map(
        static fn (string $line): string => trim(preg_replace('/\s+/u', ' ', $line) ?? ''),
        explode("\n", $value)
    );
    $value = trim(preg_replace("/\n{3,}/", "\n\n", implode("\n", $lines)) ?? '');

    if (function_exists('mb_substr')) {
        return mb_substr($value, 0, $maxLength);
    }

    return substr($value, 0, $maxLength);
};

$safeName = $cleanSingleLine($name, 120);
$safeOrganization = $cleanSingleLine($organization, 160);
$safeEmail = $cleanSingleLine($email, 160);
$safeServiceInterest = $cleanSingleLine($serviceInterest, 80);
$safeTimeline = $cleanSingleLine($timeline, 120);
$safeProjectGoals = $cleanMultiline($projectGoals, 3000);

if ($safeName === '' || $safeOrganization === '' || $safeEmail === '' || $safeProjectGoals === '') {
    $respond(422, [
        'ok' => false,
        'message' => 'Please complete all required fields.',
    ]);
}

if (!in_array($safeServiceInterest, $allowedServices, true)) {
    $respond(422, [
        'ok' => false,
        'message' => 'Please select a valid service interest.',
    ]);
}

if (function_exists('mb_strlen')) {
    $goalLength = mb_strlen($safeProjectGoals);
} else {
    $goalLength = strlen($safeProjectGoals);
}

if ($goalLength < 20) {
    $respond(422, [
        'ok' => false,
        'message' => 'Please provide a bit more detail about your project goals.',
    ]);
}

$messageLines = [
    'New enquiry from the Playtivate website:',
    '',
    'Name: ' . $safeName,
    'Organization: ' . $safeOrganization,
    'Email: ' . $safeEmail,
    'Service Interest: ' . ($safeServiceInterest !== '' ? $safeServiceInterest : 'Not provided'),
    'Timeline: ' . ($safeTimeline !== '' ? $safeTimeline : 'Not provided'),
    '',
    'Project Goals:',
    $safeProjectGoals,
    '',
    'IP Address: ' . ($_SERVER['REMOTE_ADDR'] ?? 'Unknown'),
    'User Agent: ' . ($_SERVER['HTTP_USER_AGENT'] ?? 'Unknown'),
];

$subject = sprintf('%s: %s', $subjectPrefix, $safeName);

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: Playtivate Website <' . $fromAddress . '>',
    'Reply-To: ' . $safeEmail,
    'X-Mailer: PHP/' . phpversion(),
];

$sent = mail(
    $recipient,
    $subject,
    implode(PHP_EOL, $messageLines),
    implode(PHP_EOL, $headers)
);

if (!$sent) {
    $respond(500, [
        'ok' => false,
        'message' => 'Unable to send your message right now. Please email info@playtivate.com instead.',
    ]);
}

$attemptTimes[] = $now;
file_put_contents($rateLimitFile, json_encode($attemptTimes), LOCK_EX);

unset($_SESSION['contact_csrf_token']);

$respond(200, [
    'ok' => true,
    'message' => 'Thanks. Your enquiry has been sent.',
]);