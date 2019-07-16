<?php 

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];


$para='contacto@quimera-it.com';   




    $subject = "Alguien hizo un consulta desde Quimera";

    $email_message = "Detalles del formulario de contacto: \r\n <br/>";
    $email_message .= "Nombre: " . $_POST['nombre'] . "\r\n <br/>";
    $email_message .= "Email: " . $_POST['email'] . "\r\n <br/>";
    $email_message .= "Asunto: " . $_POST['asunto'] . "\r\n <br/>";
    $email_message .= "Mensaje: " . $_POST['mensaje'] . "\r\n <br/>";

    $headers = "MIME-Version: 1.0\r\n"; 
    $headers .= "Content-type: text/html; charset=iso-8859-1\r\n"; 
    $headers .= "From: Quimera < noreply@quimera-it.com >\r\n";

    mail("$para", $subject, $email_message,$headers);
?>



