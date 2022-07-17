<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail -> CharSet = 'UTF-8';
$mail -> setLanguage('ru', 'phpmailer/language/');
$mail -> IsHTML(true);

// От кого письмо
$mail -> setFrom('dobry_tah@gmail.com', 'Dobry Tah');

// Кому отправить
$mail -> addAddress('moksdm@gmail.com');

// Тема письма
$mail -> Subject = 'Новая резервация!';

$params = array();
parse_str($_POST, $params);



// Time
if ($_POST['time'] == 1) {
    $time = "2 часа";
} elseif ($_POST['time'] == 2) {
    $time = "Другое время";
} else {
    $time = 'Уточнить время перебывания';
}


// Тело письма
$body = '<h1>Поступила новая резервация</h1>';

if (trim(!empty($_POST['name']))) {
    $body.='<p><strong>Имя гостя:</strong> ' .$_POST['name'].'</p>';
}

if (trim(!empty($_POST['email']))) {
    $body.='<p><strong>E-mail гостя:</strong> ' .$_POST['email'].'</p>';
}

if (trim(!empty($_POST['date']))) {
    $body.='<p><strong>Дата резервации гостя:</strong> ' .$_POST['date'].'</p>';
}

if (trim(!empty($_POST['time']))) {
    $body.='<p><strong>Длительность резервации:</strong> ' .$time.'</p>';
}

if ($_POST['table-list'] == 1) {
    $table = 'Gauč pro 2';
} elseif ($_POST['table-list'] == 2) {
    $table = 'Gauč pro 4';
} elseif ($_POST['table-list'] == 3) {
    $table = 'U okna pro 4';
} elseif ($_POST['table-list'] == 4) {
    $table = 'Marocký pro 2';
} elseif ($_POST['table-list'] == 5) {
    $table = 'Uprostřed pro 4';
} elseif ($_POST['table-list'] == 6) {
    $table = 'Uprostřed pro 6';
} elseif ($_POST['table-list'] == 7) {
    $table = 'U okna pro 2';
} elseif ($_POST['table-list'] == 8) {
    $table = 'Pod vitráží pro 2';
} else {
    $table = 'Столик не выбран';
}

if (trim(!empty($_POST['table-list']))) {
    $body.='<p><strong>Выбранный столик:</strong> ' .$table.'</p>';
}

if (trim(!empty($_POST['guests']))) {
    $body.='<p><strong>Количество гостей:</strong> ' .$_POST['guests'].'</p>';
}

$mail -> Body = $body;

// Отправляем!
if(!$mail->send()) {
    $message = 'Error';
    echo $message;
} else {
    // $message = 'Письмо успешно отравлено!';
    // header('location: index.html');
    // http_response_code(200);
    echo 1;
}

// $response = ['message' => $message];

// header('Content-type: application/json');
// echo json_encode($response);

?>