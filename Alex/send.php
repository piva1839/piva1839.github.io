<?php
$name = $_POST['name'];
$mail = $_POST['mail'];
$name = htmlspecialchars($name);
$mail = htmlspecialchars($mail);
$name = urldecode($name);
$mail = urldecode($mail);
$name = trim($name);
$mail = trim($mail);
//echo $name;
//echo "<br>";
//echo $mail;
if (mail("bugazua@gmail.com", "Заявка с сайта", "ФИО:".$name.". E-mail: ".$mail ,"From: avobo.md@gmail.com \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>