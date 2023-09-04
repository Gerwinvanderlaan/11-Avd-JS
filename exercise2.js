//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}

function winBattle(bool) {
    return bool;
}

var experiencePoints = winBattle(true) ? "10" : "1";

//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward");
undefined

//#3 return value when moveCommand("back");
"you arrived home"

//#4 return value when moveCommand("right");
"you found a river"

//#5 return value when moveCommand("left");
undefined

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!



var arrowUp = document.addEventListener("keyup", e => {
    if (e.key.toLowerCase() === 38);
    moveDirection();
})
var arrowDown = document.addEventListener("keydown", e => {
    if (e.key.toLowerCase() === 40);
    moveDirection();
})
var arrowLeft = document.addEventListener("keyleft", e => {
    if (e.key.toLowerCase() === 37);
    moveDirection();
})
var arrowRight = document.addEventListener("keyright", e => {
    if (e.key.toLowerCase() === 39);
    moveDirection();
})

function moveDirection(arrow) {
    var encounter;
    switch (arrow) {
        case arrowUp:
            encounter = "You travel forward";
            break;
        case arrowDown:
            encounter = "You travel backward";
            break;
        case arrowLeft:
            encounter = "You travel left";
            break;
        case arrowRight:
            encounter = "You travel right";
            break;
    } return encounter;
}