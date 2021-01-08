<?php
    $email = $_POST['email'];
    $name = $_POST['name'];
    $text = $_POST['text'];

    $subject = "=?utf-8?В?".base64_encode("Сообщение с портфолио сайта")."?=";
    $headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";

    $success = mail("dddsaltykov@gmail.com", $subject, $text, $headers);
    echo $success;

?>

