console.warn("exercise 1");
console.log();


const greeting = getGreeting('John', 'Smith');
console.log(greeting); // Hi, “John Smith”. What's up?

function getGreeting(firstName, secondName){
    return `Hi, "${firstName} ${secondName}". What's up?`;
}


console.warn("exercise 2");


console.log(isThisMyName('Adam'));

function isThisMyName(name) {
    return name === "Natasza";
}


console.warn("exercise 3");


console.log(isThisBoolean(true));  //true
console.log(isThisBoolean(false));  // true
console.log(isThisBoolean('true')); // false

function isThisBoolean(booleanTest) {
    return typeof booleanTest === "boolean";
}


console.warn("exercise 4");


const radius = 5;
const area = getCircleArea(radius);
console.log(area); // 78.53981633974483

function getCircleArea(providedRadius) {
    return providedRadius * providedRadius * Math.PI;
}


console.warn("exercise 5");

const circlesAreaSum = getCirclesAreaSum(5, 10);
console.log(circlesAreaSum); // 392.69908169872417

function getCirclesAreaSum(radius1, radius2) {
    return getCircleArea(radius1) + getCircleArea(radius2);
}


console.warn("exercise 6");


const quarterOf = (month) => {
    if (month < 4) {
        return 1;
    }
    if (month < 7) {
        return 2;
    }
    if (month < 10) {
        return 3;
    }
    return 4;
}

console.log(quarterOf(7));


console.warn("exercise 7");


const hours = convertMinutesToHours(75);
console.log(hours); // 1.25

function convertMinutesToHours (minutes) {
    return minutes/60;
}


console.warn("exercise 8");


console.log(isTextUppercase('Hello')); // false
console.log(isTextUppercase('HELLO')); // true


function isTextUppercase (isUppercaseString) {
    uppercaseTest = isUppercaseString.toUpperCase();
    return uppercaseTest === isUppercaseString;
}


console.warn("exercise 9");


function isDivisible(n, x, y) {
    const division1 = n%x
    const division2 = n%y
    const result = division1 + division2
    return result === 0
}

console.log(isDivisible(50,4,10))