// js/script.js
function displayCurrentDateTime() {
    const currentDateTime = new Date().toUTCString();
    console.log("Current Date and Time (UTC):", currentDateTime);
}

displayCurrentDateTime();