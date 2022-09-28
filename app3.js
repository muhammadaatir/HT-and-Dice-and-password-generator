var user = +prompt("Enter password length")
var randomStrings = "abcdefghijklmnopqrstuvwxyz0123456789"

var randomPassword = "";
var randomNumber = 0;
for (var i = 0; i < user; i++) {
    randomNumber = Math.floor(Math.random() * randomStrings.length);
    randomPassword += randomStrings.charAt(randomNumber);
}
document.write("<h3>" + "Random Password:  " + randomPassword + "</h3>");