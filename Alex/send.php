<?php
$name = $_POST['name'];
$mail = $_POST['mail'];
$text = $_POST['text'];
$tel = $_POST['tel'];
$calendarin = $_POST['calendarin'];
$calendarout = $_POST['calendarout'];
$adults = $_POST['adults'];
$teen = $_POST['teen'];
$children = $_POST['children'];
$room = $_POST['room'];
$roomsquantity = $_POST['roomsquantity'];

$name = htmlspecialchars($name);
$mail = htmlspecialchars($mail);
$text = htmlspecialchars($text);
$tel = htmlspecialchars($tel);
$calendarin = htmlspecialchars($calendarin);
$calendarout = htmlspecialchars($calendarout);
$adults = htmlspecialchars($adults);
$teen = htmlspecialchars($teen);
$children = htmlspecialchars($children);
$room = htmlspecialchars($room);
$roomsquantity = htmlspecialchars($roomsquantity);

$name = urldecode($name);
$mail = urldecode($mail);
$text = urldecode($text);
$tel = urldecode($tel);
$calendarin = urldecode($calendarin);
$calendarout = urldecode($calendarout);
$adults = urldecode($adults);
$teen = urldecode($teen);
$children = urldecode($children);
$room = urldecode($room);
$roomsquantity = urldecode($roomsquantity);

$name = trim($name);
$mail = trim($mail);
$text = trim($text);
$tel = trim($tel);
$calendarin = trim($calendarin);
$calendarout = trim($calendarout);
$adults = trim($adults);
$teen = trim($teen);
$children = trim($children);
$room = trim($room);
$roomsquantity = trim($roomsquantity);
//echo $name;
//echo "<br>";
//echo $mail;

if (mail("bugazua@gmail.com", "ЗАПИТ БРОНЮВАННЯ", "Им'я:".$name.". E-mail: ".$mail.". Телефон: ".$tel.". Заселення: ".$calendarin.". Выселення: ".$calendarout.". Дорослі: ".$adults.". Підлітки: ".$teen.". Діти: ".$children.". Номер: ".$room.". Кількість номерів: ".$roomsquantity.". Повідомлення: ".$text, "From: info@bugazua.com \r\n"))
 {     echo "ПОВІДОМЛЕННЯ УСПІШНО ВІДПРАВЛЕНО";
} else {
    echo "при надсиланні повідомлення виникли помилки";
}?>
