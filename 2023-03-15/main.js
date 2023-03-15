// allgemein Objekt für die Ausgabe im ersten article
const cat = {
    name: 'Mieze',
    breed: 'Hauskatze',
    age: 13,
    showCat: function () {
        document.querySelector('#objectOutput').innerHTML +=
            `Name: ${this.name} gehört zur Rasse ${this.breed}. <br>` +
            `Alter: ${this.age}<br><hr>`;
        console.log(cat);
        //alternative statt `` 
        /*
        'Name: ' + this.name + ' gehört zur Rasse ' + this.breed + '.<br>' +
        'Alter: ' + this.age + '<br><hr>';
        */
    }
};

// setzt einen Eventlistener von Typ Click auf den Button mit der ID catObject
document.querySelector('#catObject').addEventListener('click', function () {
    cat.showCat();
});


// Allgemeine Funktionen ------------
// Leeres Array indem die Objekte gespeichert werden
let allCats = [];
// Array für die Ausgabe des Monats
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
// Array für die Ausgabe des Tages
const weeks = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

function validateForm() {
    let input = [];
    // Auslesen der input's aus der Form & abspeichern des Wertes in einem Array
    input[0] = document.querySelector('#name').value;
    input[1] = document.querySelector('#breed').value;
    input[2] = Number(document.querySelector('#age').value).toFixed(2);
    input[3] = new Date(document.querySelector('#birth').value);
    // Check ob die Input Values nicht leer sind
    if ((input[0] == null || input[0] == "") && (input[1] == null || input[1] == "") && (input[2] == null || input[2] == "") && (input[3] == null || input[3] == "")) {
        alert("Please Fill In All Required Fields");
        return false
    }
    // Rückgabe des Arrays mit den Werten aus den Input Feldern
    return input;
}

function show(value) {
    document.querySelector('#output').innerHTML +=
        `<p>Name: ${value.name}<br>
        Rasse: ${value.breed}. <br>
        Alter: ${value.age}<br>
        Geboren Jahr: ${value.birth.getFullYear()} <br>
        Geboren Monat: ${months[value.birth.getMonth()]} <br>
        Geboren Wochentag: ${weeks[value.birth.getDay()]} <br>
        Button: ${value.button}<br><br>
        Zeichenlänge Name: ${value.name.length}<br>
        Zeichen auf einer Random Position:  
        ${value.name.charAt(Math.floor(Math.random() * value.name.length))}</p>`;
}
/* 
The .getDay() method in JavaScript returns the day of the week 
(as a number from 0 to 6, where 0 represents Sunday) for a given date object, not the month. 

getFullYear() returns the full year (4 digits) of a date.
https://www.w3schools.com/jsref/jsref_getfullyear.asp

getMonth() returns the month (0 to 11) of a date.
https://www.w3schools.com/jsref/jsref_getmonth.asp

Math.floor() wird oft im Kontext von Math.random benutzt
Math.random() method returns a random number from 0 (inclusive) up to but not including 1 (exclusive).
https://www.w3schools.com/jsref/jsref_random.asp
*/

function showAllCats() {
    document.querySelector('#output').innerHTML = '';
    // Sort Array after Age
    allCats.sort((minAge, maxAge) => minAge.age - maxAge.age);
    // Function to get youngest and oldest Cat
    showAge(allCats);
    // Show Cats
    for (const thisCat of allCats) {
        thisCat.showCat();
    }
}

// Get youngest and oldest Cat
function showAge(allCats) {
    let maxAgeValue = -Number.MAX_VALUE;
    let minAgeValue = Number.MAX_VALUE;

    allCats.forEach(cat => {
        if (cat.age > maxAgeValue) {
            maxAgeValue = cat.age;
        }
        if (cat.age < minAgeValue) {
            minAgeValue = cat.age;
        }
    });
    // Ausgabe der jüngsten & der ältesten Katze im Element mit der der ID outputAge
    document.querySelector('#outputAge').innerHTML =
        `<p>jüngste Katze: ${minAgeValue}</p>
    <p>älteste Katze: ${maxAgeValue}</p>`;
}

// Objekt erstellen mit Constructor -----------
function CatConstructor(name, breed, age, birth, button) {
    this.name = name;
    this.breed = breed; //rasse
    this.age = age;
    this.birth = birth;
    this.button = button;
    this.showCat = function () {
        show(this);
    }
}

// setzt einen Eventlistener von Typ Click auf den Button mit der ID newCatConstructor
document.querySelector('#newCatConstructor').addEventListener('click', function () {
    let returnValue = validateForm();
    if (returnValue != false) {
        allCats[allCats.length] = new CatConstructor(returnValue[0], returnValue[1], returnValue[2], returnValue[3], 'constructor');
        showAllCats();
    }
});


// mit Klassen ------------------
class CatClass {
    constructor(name, breed, age, birth, button) {
        this.name = name;
        this.breed = breed; //rasse
        this.age = age;
        this.birth = birth;
        this.button = button;
    }
    showCat() {
        show(this);
    }
}

// setzt einen Eventlistener von Typ Click auf den Button mit der ID newCatClass
document.querySelector('#newCatClass').addEventListener('click', function () {
    let returnValue = validateForm();
    if (returnValue != false) {
        allCats.push(new CatClass(returnValue[0], returnValue[1], returnValue[2], returnValue[3], 'classes'));
    }
    showAllCats();
});


