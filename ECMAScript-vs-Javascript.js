// let en const

const player = 'Bobby'; // can not be changed in code (! const can not be changed, but the propeties can be changed **)
let experience = 100; // changable under different circumstances
let wizardLevel = false;

if (experience > 90) {
    let wizardLevel = true;
    console.log('inside', wizardLevel);
}

console.log('outside', wizardLevel);

inside true
outside false

//**

const obj = {
    name: 'Bobby',
    experience: '100',
    wizardLevel: true
}

obj.wizardLevel = false;

-> obj { name: 'Bobby', experience: '100', wizardLevel: false }

// destructuring

const player = obj.player;
const experience = obj.experience;
const = wizardLevel = obj.wizardLevel;

// ===

const { player, experience } = obj;
let { wizardLevel } = obj;

const name = 'John Snow';

const obj = {
    [name]: 'hello';
    ['ray' + 'smith']: 'hihi';
}

// object properties

const a = 'Simon';
const b = true;
const c = {};

// to assign value to property: 

const obj = {
    a: a,
    b: b,
    c: c
}

// === (no need to assign to specific value; if its the same property it automatically assigns the specific value to that property)

const obj = { a, b, c }

// template strings


const name = "Sally";
const age = 34;
const pet = "horse";
// const greeting = "Hello" + name + " you seem to be "+ age + ...;

const greetingBest = `Hello ${name} you seem to be ${age - 10}. What a lovely ${pet} you have!`;

// default arguments

function greet(name = '', age = 30, pet = 'cat') {
    return `Hello ${name} you seem to be ${age - 10}. What a lovely ${pet} you have!`;
}

greet();
'Hello  you seem to be 20. What a lovely cat you have!'

greet("John", 50, 'monkey');

// symbol

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

sym1
Symbol()

sym2
Symbol(foo)

sym2 === sym3;
false // because symbols are unique, even if they have the same values

// arrow functions 

function add(a, b) {
    return a + b;
}

// ===

const add2 = (a, b) => a + b;

add(4, 2);
6

add2(4, 2);
6       