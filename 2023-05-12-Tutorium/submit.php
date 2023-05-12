
<?php

if($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Speichere Value aus POST in Variable
    $name = $_POST['inputName'];
    $message = $_POST['inputMessage'];

    // Öffne die messages.txt-Datei im Anhangmodus
    $file = fopen('messages.txt', 'a');

    // Schreibt neuen Eintrag in die Datei
    fwrite($file, "$name|$message\n");

    // Datei Schließen
    fclose($file);

    // Zurück auf index.php leiten
    header('Location: index.php');
    exit;

} else {
    echo "<p>Ungültige Anfrage</p>";
}
