const password = "101";
const encryptedPassword = btoa(password); // Base64-Verschlüsselung


window.onload = passwordCheck;
function passwordCheck() {
    var password = prompt("Gib mir 5!");
    if (password !== encryptedPassword) {
        alert("Falsches Passwort!\nVersuche es gleich erneut!");
        away();
    } 
}
window.onload = passwordCheck;


function away() {
    window.location.href = 'https://PhilippPR.github.io/Anmeldung';
}