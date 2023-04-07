"use strict";

/**
 * @const {Date}
 */
let initialDate = new Date();

/**
 * Adds a leading zero to all numbers smaller than 10.
 * @param {number} value The input value that might need a leading zero.
 * @returns {(string|number)} The number as a string with a leading zero or the original number.
 */
function addLeadingZero(value) {
    return value < 10 ? "0" + value : value;
}

/**
 * Prints out the current day in a machine-readable and human-readable format.
 */
function currentDay() {
    /** @const {number} */
    const weekday = initialDate.getDay();

    /** @const {number} */
    const day = initialDate.getDate();

    /** @const {number} */
    const month = initialDate.getMonth();

    /** @const {number} */
    const year = initialDate.getFullYear();

    /** @const {string[]} */
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    /** @const {string[]} */
    const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    /** @const {string} */
    const humanReadable = daysOfWeek[weekday] + ", " + monthsOfYear[month] + " " + addLeadingZero(day) + ", " + year;

    /** @const {string} */
    const machineReadable = year + "-" + addLeadingZero(month + 1) + "-" + addLeadingZero(day);
    document.querySelector('#outputDate').innerHTML = "<p>Today is<br><time datetime='" + machineReadable + "'>" + humanReadable + "</time></p>";
}

/**
 * Prints out the current time in a machine-readable and human-readable format.
 */
function currentTime() {
    initialDate = new Date();
    /** @const {number} */
    let hours = initialDate.getHours();

    /** @const {number} */
    let minutes = initialDate.getMinutes();

    /** @const {number} */
    let seconds = initialDate.getSeconds();
    
    document.querySelector('#outputTime').innerHTML = "<p>The Time is<br><time>" + addLeadingZero(hours) + ":" + addLeadingZero(minutes) + ":" + addLeadingZero(seconds) + "</time>";
}

/**
 * Shows the time spent on this page in an alert window.
 */
function timeOnPage() {
    /** @const {Date} */
    const currentDate = new Date();

    /** @type {Date} */
    const diff = new Date(currentDate.getTime() - initialDate.getTime());

    // Use getUTC* here so we don't have a timezone added
    /** @const {number} */
    const hoursHere = diff.getUTCHours();

    /** @const {number} */
    const minutesHere = diff.getUTCMinutes();

    /** @const {number} */
    const secondsHere = diff.getUTCSeconds();

    window.alert("You have been on this page for " + addLeadingZero(hoursHere) + " hours, " + addLeadingZero(minutesHere) + " minutes and " + addLeadingZero(secondsHere) + " seconds.");
}

/**
 * Reloads the current page.
 */
function refresh() {
    location.reload();
}


setInterval(currentTime, 1000);