// ternary operator

function isUserValid(bool) {
    return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access denied"

var automatedAnswer = "Your account number is " + (isUserValid(false) ? "1234" : "not available.");

function condition() {
    if (isUserValid(true)) {
        return "You may enter"
    } else {
        return "Access denied"
    }
}

var answer2 = condition();

// switch statement

function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "You encounter a monster";
            break;
        case "back":
            whatHappens = "You arrived home";
            break;
        case "right":
            whatHappens = "You found a river";
            break;
        case "left":
            whatHappens = "You run into a troll";
            break;

        default:
            whatHappens = "Please enter a valid direction";
    } return whatHappens;
}