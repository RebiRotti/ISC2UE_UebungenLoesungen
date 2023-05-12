<!DOCTYPE html>
<html>
<head>
    <title>Gästebuch</title>
    <link rel="stylesheet" href="style.css">
    <meta charset="UTF-8">
</head>
<body>
    <?php include('includes/header.php') ?>
    <main>
        <h1>Gästebuch</h1>
        <form method="post" action="submit.php">
            <div>
                <label for="name">Name</label>
                <input type="text" name="inputName" id="name" required>
            </div>
            <div>
                <label for="message">Ihre Nachricht</label>
                <input type="text" name="inputMessage" id="message" required>
            </div>
            <button type="submit">Absenden</button>
        </form>

        <h2>Bisherige Einträge</h2>
        <ul>
            <?php
            // File öffnen
            $file = fopen('messages.txt', 'r');

            // Liest Inhalt der Datei in ein Array
            $lines = file('messages.txt');

            // schließt Date
            fclose($file);
            // Gibt jede Nachricht als Listenelement aus
            foreach($lines as $entryId => $line) {
                // Teilt Nachricht in Namen und Text auf
                list($name, $message) = explode('|', $line);
            ?>
                <li class="flex">
                    <span>
                        <strong><?= $name ?>:</strong> <?php echo $message ?>

                    </span>
                    <span class="flex">
                        <a href="edit.php?id=<?= $entryId ?>">Bearbeiten</a>
                        <form method="post" action="delete.php">
                            <input type="hidden" name="entryId" value="<?= $entryId ?>">
                            <button type="submit">Löschen</button>
                        </form>
                    </span>
                </li>

            <?php
                // das gleiche nur in PHP mit echo ausgaben
                /*
                 * echo "<li class='flex'>";
                 * echo "<span><strong>$name:</strong> $message</span>";
                 * echo "<span class='flex'><a href='edit.php?id=$entryId'>Bearbeiten</a>";
                 * echo "<form method='post' action='delete.php'>";
                 * usw....
                */
            }
            //var_dump($lines);
            ?>
        </ul>
    </main>
</body>
</html>
