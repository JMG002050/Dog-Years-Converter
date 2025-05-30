let userInput = prompt('What is your age?: ');
let age = Number(userInput);

if (!userInput || isNaN(age)) {
    console.log('Please enter a valid number.');
} else if (age < 0 || age > 150) {
    console.log('Please enter a number greater than 0 but less than 150.');
} else {
    let dogYears = age * 7;
    console.log(`Your age would be equivalent to ${dogYears} in dog years!`);
}
