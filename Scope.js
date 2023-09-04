// Scope

var fun = 5;

function funFunction() {
    //child scope
    var fun = "hellooo";
    console.log(fun);
}

function funerFunction() {
    //child scope
    var fun = "byee";
    console.log(fun);
}

function funestFunction() {
    //child scope
    var fun = "AHHHH";
    console.log(fun);
}

console.log(fun);
funFunction();
funerFunction();
funestFunction();