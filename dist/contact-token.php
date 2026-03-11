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

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    $respond(405, [
        'ok' => false,
        'message' => 'Method not allowed.',
    ]);
}

$requestHost = $normalizeHost((string) ($_SERVER['HTTP_HOST'] ?? ''));
$originHost = $normalizeHost((string) ($_SERVER['HTTP_ORIGIN'] ?? ''));
$refererHost = $normalizeHost((string) ($_SERVER['HTTP_REFERER'] ?? ''));
$fetchSite = strtolower(trim((string) ($_SERVER['HTTP_SEC_FETCH_SITE'] ?? '')));
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

if (empty($_SESSION['contact_session_initialized'])) {
    session_regenerate_id(true);
    $_SESSION['contact_session_initialized'] = true;
}

$token = bin2hex(random_bytes(32));
$_SESSION['contact_csrf_token'] = $token;
$_SESSION['contact_csrf_issued_at'] = time();

echo json_encode([
    'ok' => true,
    'token' => $token,
    'issuedAt' => $_SESSION['contact_csrf_issued_at'],
]);