<?php
/* Ehmar Foods — newsletter subscription capture endpoint */
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

/* Accept email from JSON body or form post */
$email = '';
if (isset($_POST['email'])) {
    $email = trim($_POST['email']);
} else {
    $raw = file_get_contents('php://input');
    $j = json_decode($raw, true);
    if (is_array($j) && isset($j['email'])) {
        $email = trim($j['email']);
    }
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Please enter a valid email address.']);
    exit;
}

$when = date('Y-m-d H:i:s');
$ip   = isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : '';

/* Store subscriber in a CSV kept next to this script (blocked from web access via .htaccess) */
$store = __DIR__ . '/subscribers.csv';
if (!file_exists($store)) {
    @file_put_contents($store, "date,email,ip\n", LOCK_EX);
}
$line = '"' . $when . '","' . str_replace('"', '', $email) . '","' . $ip . "\"\n";
@file_put_contents($store, $line, FILE_APPEND | LOCK_EX);

/* Also notify the store inbox (best-effort; mail() may be unavailable on some hosts) */
if (function_exists('mail')) {
    $to      = 'info@ehmarfoods.com';
    $subject = 'New Newsletter Subscriber - Ehmar Foods';
    $body    = "You have a new newsletter subscriber.\n\nEmail: $email\nDate:  $when";
    $headers = "From: Ehmar Foods <no-reply@ehmarfoods.com>\r\n"
             . "Content-Type: text/plain; charset=UTF-8\r\n";
    @mail($to, $subject, $body, $headers);
}

echo json_encode(['ok' => true]);
