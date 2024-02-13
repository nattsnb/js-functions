console.warn("exercise 1");


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
    const uppercaseTest = isUppercaseString.toUpperCase();
    return uppercaseTest === isUppercaseString;
}


console.warn("exercise 9");


function isDivisible(n, x, y) {
    const division1 = n%x;
    const division2 = n%y;
    const result = division1 + division2;
    return result === 0;
}

console.log(isDivisible(50,4,10));


console.warn("exercise 10");


console.log(getBillboardPrice('Hello world!', 10)); // 120
console.log(getBillboardPrice('Hello world!', 15)); // 180
console.log(getBillboardPrice('To be, or not to be', 20)); // 380

function getBillboardPrice (billboardText, price) {
    return billboardText.length * price;
}


console.warn("exercise 11");


console.log(opposite(10));
function opposite(number) {
    return -number;
}


console.warn("exercise 12");


console.log(makeNegative(10));
console.log(makeNegative(-5));

function makeNegative(num) {
    if (num > 0) {
        return -num;
    }
    return num;
}


console.warn("exercise 13");


console.log(removeChar("anaconda"));

function removeChar(str){
    let removedLettersString = str.slice(1);
    removedLettersString = removedLettersString.slice(0, -1);
    return removedLettersString
}


console.warn("exercise 14");


console.log(basicOp("+", 14, 16));

function basicOp(operation, value1, value2){
    if (operation === "+") {
        return value1 + value2;
    }
    if (operation === "-") {
        return value1 - value2;
    }
    if (operation === "*") {
        return value1 * value2;
    }
    if (operation === "/") {
        return value1 / value2;
    }
    return "error";
}


console.warn("exercise 15");


console.log(century(34789));

function century(year) {
    if (year<100){
        return 1
    }
    if (year<1000) {
        const yearString = year.toString();
        const firstNumber = yearString.substr(0, 1);
        const lastTwoNumbers = yearString.substr(-2);
        if (lastTwoNumbers === "00"){
            return Number(firstNumber);
        }
        return Number(firstNumber)+1;
    }
    const yearString = year.toString();
    const firstNumbers = yearString.substr(0, yearString.length - 2);
    const lastTwoNumbers = yearString.substr(-2);
    if (lastTwoNumbers === "00"){
        return Number(firstNumbers);
    }
    return Number(firstNumbers)+1;
}


console.warn("exercise 16");


console.log(evenOrOdd(6786));

function evenOrOdd(number) {
    const isDividedByTwo = number % 2;
    if (isDividedByTwo === 0){
        return "Even";
    }
    return "Odd";
}


console.warn("exercise 17");


console.log(areYouPlayingBanjo("Robert"));

function areYouPlayingBanjo(name) {
    let firstLetter = name.slice(0,1);
    firstLetter = firstLetter.toLowerCase();
    if (firstLetter === "r"){
        return name + " plays banjo";
    }
    return name + " does not play banjo";
}


console.warn("exercise 18");


console.log(bmi(65,1.65));

function bmi(weight, height) {
    const bmiNumber =  weight / (height*height);
    if (bmiNumber <= 18.5){
        return "Underweight";
    }
    if (bmiNumber <= 25){
        return "Normal";
    }
    if (bmiNumber <= 30){
        return "Overweight";
    }
    return "Obese";
}


console.warn("exercise 19");


console.log(rockPaperScissors('rock', 'scissors')); // 1
console.log(rockPaperScissors('rock', 'paper')); // 2
console.log(rockPaperScissors('paper','paper')); // 0

function rockPaperScissors(firstPlayerAnswer, secondPlayerAnswer) {
    if (firstPlayerAnswer === "rock"){
        if (secondPlayerAnswer === "scissors"){
            return 1;
        }
        if (secondPlayerAnswer === "paper"){
            return 2;
        }
        return 0;
    }
    if (firstPlayerAnswer === "scissors"){
        if (secondPlayerAnswer === "paper"){
            return 1;
        }
        if (secondPlayerAnswer === "rock"){
            return 2;
        }
        return 0;
    }
    if (firstPlayerAnswer === "paper"){
        if (secondPlayerAnswer === "rock"){
            return 1;
        }
        if (secondPlayerAnswer === "scissors"){
            return 2;
        }
        return 0;
    }
}


console.warn("exercise 20");


console.log(getCalculationResult("-", 14, 16));

function getCalculationResult(operation, value1, value2){
    if (operation === "+") {
        return value1 + value2;
    }
    if (operation === "-") {
        return value1 - value2;
    }
    if (operation === "*") {
        return value1 * value2;
    }
    if (operation === "/") {
        return value1 / value2;
    }
    return null;
}


console.warn("exercise 21");


console.log(getPercentageValue(200, 13));

function getPercentageValue(baseNumber, percentage) {
    return baseNumber*(percentage/100);
}


console.warn("exercise 22");





console.warn("exercise 23");