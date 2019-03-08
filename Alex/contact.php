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
if (mail("bugazua@gmail.com", "ВОПРОС С САЙТА", "Имя:".$name.". E-mail: ".$mail.". Сообщение: ".$text, "From: info@bugazua.com \r\n"))
 {     echo "СООБЩЕНИЕ УСПЕШНО ОТПРАВЛЕНО";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>
