<?php
$name = $_POST['name'];
$mail = $_POST['mail'];
$text = $_POST['text'];
$name = htmlspecialchars($name);
$mail = htmlspecialchars($mail);
$text = htmlspecialchars($text);
$name = urldecode($name);
$mail = urldecode($mail);
$text = urldecode($text);
$name = trim($name);
$mail = trim($mail);
$text = trim($text);
//echo $name;
//echo "<br>";
//echo $mail;
if (mail("bugazua@gmail.com", "ПИТАННЯ З САЙТУ", "Им'я:".$name.". E-mail: ".$mail.". Повідомлення: ".$text, "From: info@bugazua.com \r\n"))
 {     echo "ПОВІДОМЛЕННЯ УСПІШНО ВІДПРАВЛЕНО";
} else {
    echo "при надсиланні повідомлення виникли помилки";
}?>
