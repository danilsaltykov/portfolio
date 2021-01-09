<?php
    
    $to ="dddsaltykov@gmail.com";
    $from = trim($_POST['email']);


    $name = trim($_POST['name']);
    
    $message = htmlspecialchars($_POST['text']);
    $message = urldecode($message);
    $message = trim($message);

    $headers = "From: $from" . "\r\n" .
    "Reply-To: $from" . "\r\n" .
    "X-Mailer: PHP/" . phpversion();

    if(mail($to, $message, $headers, $name)) {
       header('location: thankyou.html');
    } else{
        echo 'Письмо не отправлено';
    }

    

?>

