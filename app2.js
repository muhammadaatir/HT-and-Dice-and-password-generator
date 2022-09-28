var randomvalues = + prompt("How many times you want to roll the dice?","1");

for (i = 1; i < randomvalues+1; i++) {
    var randomNumber = Math.floor((Math.random() * 6)) + 1;
    document.write(i + " times dice value : " + randomNumber + "<br>")
}