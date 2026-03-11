<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');
header('Expires: 0');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('Referrer-Policy: no-referrer');
header("Content-Security-Policy: default-src 'none'; frame-ancestors 'none'; base-uri 'none'; form-action 'none'");
header('Cross-Origin-Resource-Policy: same-origin');

$respond = static function (int $statusCode, array $payload): void {
    http_response_code($statusCode);
    echo json_encode($payload);
    exit;
};

$normalizeHost = static function (string $value): string {
    $value = trim(strtolower($value));
    if ($value === '') {
        return '';
    }

    $candidate = str_contains($value, '://') ? $value : 'http://' . $value;
    return strtolower((string) parse_url($candidate, PHP_URL_HOST));
};

$isLocalHost = static function (string $host): bool {
    if ($host === '' || $host === 'localhost' || str_ends_with($host, '.local')) {
        return true;
    }

    if (!filter_var($host, FILTER_VALIDATE_IP)) {
        return false;
    }

    return filter_var($host, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE) === false;
};

$hasLengthExceeded = static function (string $value, int $maxLength): bool {
    if (function_exists('mb_strlen')) {
        return mb_strlen($value) > $maxLength;
    }

    return strlen($value) > $maxLength;
};

$consumeRateLimitSlot = static function (string $filePath, int $windowSeconds, int $maxAttempts, int $now): bool {
    $handle = fopen($filePath, 'c+');
    if ($handle === false) {
        return true;
    }

    $allowed = true;

    try {
        if (!flock($handle, LOCK_EX)) {
            return true;
        }

        rewind($handle);
        $contents = stream_get_contents($handle);
        $decoded = $contents !== false && $contents !== '' ? json_decode($contents, true) : [];

        if (!is_array($decoded)) {
            $decoded = [];
        }

        $attemptTimes = array_values(array_filter(
            $decoded,
            static fn ($timestamp): bool => (is_int($timestamp) || ctype_digit((string) $timestamp))
                && ((int) $timestamp) > ($now - $windowSeconds)
        ));

        if (count($attemptTimes) >= $maxAttempts) {
            $allowed = false;
        } else {
            $attemptTimes[] = $now;
        }

        ftruncate($handle, 0);
        rewind($handle);
        fwrite($handle, json_encode($attemptTimes));
        fflush($handle);
    } finally {
        flock($handle, LOCK_UN);
        fclose($handle);
    }

    return $allowed;
};

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    $respond(405, [
        'ok' => false,
        'message' => 'Method not allowed.',
    ]);
}

$requestHost = $normalizeHost((string) ($_SERVER['HTTP_HOST'] ?? ''));
$originHost = $normalizeHost((string) ($_SERVER['HTTP_ORIGIN'] ?? ''));
$refererHost = $normalizeHost((string) ($_SERVER['HTTP_REFERER'] ?? ''));
$fetchSite = strtolower(trim((string) ($_SERVER['HTTP_SEC_FETCH_SITE'] ?? '')));
$contentType = strtolower(trim((string) strtok((string) ($_SERVER['CONTENT_TYPE'] ?? ''), ';')));
$contentLength = (int) ($_SERVER['CONTENT_LENGTH'] ?? 0);
$isSecure = (
    (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off')
    || strtolower((string) ($_SERVER['HTTP_X_FORWARDED_PROTO'] ?? '')) === 'https'
    || strtolower((string) ($_SERVER['HTTP_X_FORWARDED_SSL'] ?? '')) === 'on'
);

if ($requestHost === '') {
    $respond(400, [
        'ok' => false,
        'message' => 'Invalid request host.',
    ]);
}

if (!$isSecure && !$isLocalHost($requestHost)) {
    $respond(403, [
        'ok' => false,
        'message' => 'Secure transport is required.',
    ]);
}

if ($fetchSite !== '' && !in_array($fetchSite, ['same-origin', 'same-site', 'none'], true)) {
    $respond(403, [
        'ok' => false,
        'message' => 'Invalid request context.',
    ]);
}

if (($originHost !== '' && $originHost !== $requestHost) || ($refererHost !== '' && $refererHost !== $requestHost)) {
    $respond(403, [
        'ok' => false,
        'message' => 'Invalid request origin.',
    ]);
}

if (!in_array($contentType, ['multipart/form-data', 'application/x-www-form-urlencoded'], true)) {
    $respond(415, [
        'ok' => false,
        'message' => 'Unsupported form submission type.',
    ]);
}

if ($contentLength <= 0 || $contentLength > 16384) {
    $respond(413, [
        'ok' => false,
        'message' => 'Form submission is too large.',
    ]);
}

ini_set('session.use_only_cookies', '1');
ini_set('session.use_strict_mode', '1');
ini_set('session.use_trans_sid', '0');
session_name('playtivate_contact');
session_set_cookie_params([
    'lifetime' => 0,
    'path' => '/',
    'httponly' => true,
    'samesite' => 'Strict',
    'secure' => $isSecure,
]);
session_cache_limiter('nocache');

session_start();

$recipient = 'info@playtivate.com';
$fromAddress = 'no-reply@playtivate.com';
$subjectPrefix = 'Playtivate Contact Form';
$allowedServices = ['VR/AR', 'E-Learning', 'Serious Games', 'Not Sure Yet'];
$maxTokenAgeSeconds = 1800;
$minimumSubmissionAgeSeconds = 2;
$maxAttempts = 5;
$rateWindowSeconds = 900;

$now = time();

$csrfToken = (string) ($_POST['csrfToken'] ?? '');
$sessionToken = (string) ($_SESSION['contact_csrf_token'] ?? '');
$tokenIssuedAt = (int) ($_SESSION['contact_csrf_issued_at'] ?? 0);

if (
    $csrfToken === ''
    || $sessionToken === ''
    || $tokenIssuedAt <= 0
    || !hash_equals($sessionToken, $csrfToken)
) {
    $respond(419, [
        'ok' => false,
        'message' => 'Your session expired. Please refresh the page and try again.',
    ]);
}

$tokenAge = $now - $tokenIssuedAt;

if ($tokenAge > $maxTokenAgeSeconds) {
    unset($_SESSION['contact_csrf_token'], $_SESSION['contact_csrf_issued_at']);

    $respond(419, [
        'ok' => false,
        'message' => 'Your secure form session expired. Please refresh the page and try again.',
    ]);
}

if ($tokenAge < $minimumSubmissionAgeSeconds) {
    $respond(429, [
        'ok' => false,
        'message' => 'Please wait a moment and submit the form again.',
    ]);
}

$clientIp = (string) ($_SERVER['REMOTE_ADDR'] ?? 'unknown');
$clientFingerprint = hash('sha256', $clientIp . '|' . substr((string) ($_SERVER['HTTP_USER_AGENT'] ?? ''), 0, 180));
$rateLimitFile = sys_get_temp_dir() . '/playtivate-contact-rate-' . $clientFingerprint . '.json';

if (!$consumeRateLimitSlot($rateLimitFile, $rateWindowSeconds, $maxAttempts, $now)) {
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

if (
    $hasLengthExceeded($name, 120)
    || $hasLengthExceeded($organization, 160)
    || $hasLengthExceeded($email, 160)
    || $hasLengthExceeded($serviceInterest, 80)
    || $hasLengthExceeded($timeline, 120)
    || $hasLengthExceeded($projectGoals, 3000)
) {
    $respond(422, [
        'ok' => false,
        'message' => 'One or more fields exceed the allowed length.',
    ]);
}

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

if ((function_exists('mb_strlen') ? mb_strlen($safeName) : strlen($safeName)) < 2) {
    $respond(422, [
        'ok' => false,
        'message' => 'Please enter your full name.',
    ]);
}

if ((function_exists('mb_strlen') ? mb_strlen($safeOrganization) : strlen($safeOrganization)) < 2) {
    $respond(422, [
        'ok' => false,
        'message' => 'Please enter your organization name.',
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

unset($_SESSION['contact_csrf_token'], $_SESSION['contact_csrf_issued_at']);

$respond(200, [
    'ok' => true,
    'message' => 'Thanks. Your enquiry has been sent.',
]);