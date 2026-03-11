<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode([
        'ok' => false,
        'message' => 'Method not allowed.',
    ]);
    exit;
}

$isSecure = !empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off';
session_set_cookie_params([
    'httponly' => true,
    'samesite' => 'Strict',
    'secure' => $isSecure,
]);

session_start();

$token = bin2hex(random_bytes(32));
$_SESSION['contact_csrf_token'] = $token;

echo json_encode([
    'ok' => true,
    'token' => $token,
]);