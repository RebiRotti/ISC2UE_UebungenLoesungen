function displayAllCatFacts() {
    // Wählen Sie den Container aus, in den die Fakten eingefügt werden sollen
    const catsContainer = document.querySelector('#cats');
    // Definieren Sie die URL, von der die Fakten abgerufen werden sollen
    const factsUrl = 'https://cat-fact.herokuapp.com/facts';

    // Rufen Sie die Fakten von der API ab
    fetch(factsUrl)
        .then(response => response.json())
        .then(data => {
            // Erstellen Sie ein Array von <section> -Elementen, das jede Fakt-<p> -Element enthält
            const factElements = data.map(fact => {
                // Erstellen Sie ein neues <section> -Element
                const newDiv = document.createElement('section');
                // Erstellen Sie ein neues <p> -Element, um den Text des Fakts anzuzeigen
                const factElement = document.createElement('p');
                // Setzen Sie den Text des <p> -Elements auf den Fakt
                factElement.innerText = fact.text;
                console.log(fact)
                // Fügen Sie das <p> -Element dem <section> -Element hinzu
                newDiv.appendChild(factElement);
                // Geben Sie das <section> -Element zurück, um es später in den Container einzufügen
                return newDiv;
            });

            // Fügen Sie jedes <section> -Element dem Container hinzu
            factElements.forEach(arrayElement => catsContainer.appendChild(arrayElement));
        })
        .catch(error => console.error(error));
}

// Rufen Sie die Funktion auf, um die Fakten anzuzeigen
displayAllCatFacts();



// Firefox: https://cat-fact.herokuapp.com/facts
