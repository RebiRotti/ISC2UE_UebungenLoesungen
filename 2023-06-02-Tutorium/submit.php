<?php

session_start();
$_SESSION = [];

if($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Formulardaten erfassen
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST["message"];
    $subscribe = isset($_POST['subscribe']) ? true : false;
    $frequency = isset($_POST['subscribe']) ? $_POST['frequency'] : false;

    // Validierung der Fomulardaten
    $error = [];

    if(empty($name)) {
        $error[] = "Bitte gib deinen Namen ein";
    }
    if(empty($email)) {
        $error[] = "Gib eine Mailadresse ein";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error[] = "Bitte gib eine gültige Mailadresse ein";
    }
    $pattern = "/<\?php|<\?= /";
    if(empty($message)) {
        $error[] = "Gib eine Nachricht ein";
    } elseif(strpos($message, "<?php") !== false ||
        strpos($message, "<?= ") !== false ||
        preg_match($pattern, $message)) {
        $error[] = "Enthält ungültige Zeichenfolgen";
    }

    // Wenn keine Fehler vorhanden sind
    if(empty($error)) {
        $_SESSION["successMessage"] = "Ihre Nachricht wurde erfolgreich gesendet";

    } else {
        $_SESSION["errors"] = $error;
    }
    header("Location: index.php");
    exit();

}
