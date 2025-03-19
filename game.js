var submit = document.getElementById("submit");
var noOfLive = document.getElementById("livesNo");
var msg = document.getElementById("message");

var randomNumber = Math.floor(Math.random() * 100) + 1;
var lives = 5;

submit.onclick = () => {
    console.log("Random Number (For Debugging):", randomNumber);

    var userinput = parseInt(document.getElementById("number").value);
    if (isNaN(userinput) || userinput < 1 || userinput > 100) {
        msg.style.display = "inherit";
        msg.innerHTML = " Please enter a number between 1 and 100!";
        return;
    }

    lives--;

    if (userinput === randomNumber) {
        location.href = "./win.html";
    } else if (lives === 0) {
        location.href = "./lose.html";
    } else {
        if (userinput > randomNumber) {
            msg.innerHTML = " Oops! Your guess is too high.";
        } else {
            msg.innerHTML = " Oops! Your guess is too low.";
        }

        msg.style.display = "inherit";
        noOfLive.innerHTML = lives;
    }
};
