var user = prompt("Choose heads or tails: ", "heads")
if (user === "heads" || user === "tails") {
    var value = ["heads", "tails"]
    var randomNumber = Math.floor(Math.random() * value.length);
    var word = value[randomNumber];
    document.write("Random coin value : " + word + "<br>")

    if (word === user) {
        document.write("<h3>"+"You Win"+"</h3>")
    } else {
        document.write("You Lose, Better Luck Next Time")
    }
} else {
    document.write("Enter The Correct Value (heads or tails)")
}