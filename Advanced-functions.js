const first = () => {
    const greet = "hi";
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

// closures -> function ran and is executed. It's never going to execute again. But it's going to remember that there are references to those variables. So the child scope always has access to the parent scope.

// currying -> converting a function, takes multiple variables and executes it one of the time.

const multiply = (a, b) => a * newFunc;
const curriedMultiply = (a) => (b) => a * b; // a function within a function
curriedMultiply(3)(4);

const multiplyBy5 = curriedMultiply(5);
multiplyBy5(5);
multiplyBy5(55);
// etc.

// compose -> the act of putting two functions together to create a third function where the output of one function is the output of the other function

const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5);

