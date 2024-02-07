const greeting = getGreeting('John', 'Smith');
console.log(greeting); // Hi, “John Smith”. What's up?

function getGreeting(firstName, secondName){
    return `Hi, "${firstName} ${secondName}". What's up?`
}