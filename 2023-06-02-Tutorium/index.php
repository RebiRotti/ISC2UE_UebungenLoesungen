<!DOCTYPE html>
<html>
<head>
    <title>Kontaktformular</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
</head>
<body>
<main>
    <h1>Kontaktformular</h1>

    <!-- PHP STUFF -->
    <?php
    session_start();
    // var_dump($_SESSION);
    if(isset($_SESSION['errors']) && !empty($_SESSION['errors'])) : ?>
        <h2>Fehler beim Senden des Formulars</h2>
        <ul>
            <?php foreach($_SESSION['errors'] as $error): ?>
                <li><?= $error ?></li>
            <?php endforeach; ?>

            <!-- Alternative Schreibweise-->
            <?php foreach($_SESSION['errors'] as $error){ ?>
                <li><?php echo $error ?></li>
            <?php } ?>
        </ul>

    <?php endif; ?>

    <!-- Alternative Schreibweise -->
    <?php
        if(isset($_SESSION['errors']) && !empty($_SESSION['errors'])) {
            echo '<h2>Fehler beim Senden des Formulars</h2>';
            echo '<ul>';
            foreach($_SESSION['errors'] as $error) {
                echo '<li>' . $error . '</li>';
            }
            echo '</ul>';
            unset($_SESSION['errors']);
        }
    ?>

    <!-- Erfolgsmedlung anzeigen -->
    <?php if(isset($_SESSION['successMessage'])) : ?>
        <h2>Vielen Dank!</h2>
        <p><?= $_SESSION['successMessage']; ?></p>
        <?php unset($_SESSION['successMessage']); ?>
    <?php endif; ?>




    <!-- Kontaktformular -->
    <form method="post" action="submit.php">
        <div class="flex">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
        </div>
        <div class="flex">
            <label for="email">E-Mail:</label>
            <input type="email" id="email" name="email" required placeholder="hier ihre Email Adresse">
        </div>
        <div class="flex">
            <label for="message">Nachricht:</label>
            <textarea id="message" name="message" required></textarea>
        </div>
        <div class="flex">
            <label for="subscribe">Newsletter anmelden</label>
            <input type="checkbox" id="subscribe" name="subscribe">
        </div>
        <div id="additionalField" class="none">
            <label for="frequency">Häufigkeit:</label>
            <select id="frequency" name="frequency">
                <option value="daily">Täglich</option>
                <option value="weekly">Wöchentlich</option>
                <option value="monthly">Monatlich</option>
            </select>
        </div>
        <button type="submit" class="submitBtn">Absenden</button>
    </form>
</main>
<script>
    let additionalField = document.querySelector('#additionalField');
    document.querySelector('#subscribe').addEventListener("change", function () {
        additionalField.classList.toggle('flex');
        additionalField.classList.toggle('none');
    });
</script>
</body>
</html>
