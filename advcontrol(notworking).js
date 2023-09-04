


const arrowUp = () => {
    if (KeyboardEvent === 38) {
        moveDirection();
    } console.log(arrowUp);
}

function moveDirection(arrow) {
    var direction;
    switch (arrow) {
        case arrowUp:
            direction = "You travel forward";
            break;
        case "arrowDown":
            direction = "You travel backward";
            break;
        case "arrowLeft":
            direction = "You travel left";
            break;
        case "arrowRight":
            direction = "You travel right";
            break;
        default:
            direction = "Please enter a valid direction"
    } return direction;
}



