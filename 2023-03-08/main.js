"use strict";

let myArrayTest;

function createArray(size) {
    myArrayTest = [];
    for(let i = 0; i < size; i++) {
        myArrayTest[i] = i + 1;
    }
}

function displayArray() {
    let list = document.createElement('ul');
    for (let i = 0; i < myArrayTest.length; i++) {
        const item = document.createElement('li');
        const text = document.createTextNode(myArrayTest[i]);
        item.appendChild(text);
        list.appendChild(item);
    }
    document.body.appendChild(list);
}

createArray(3);
displayArray();