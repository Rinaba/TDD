function fizzBuzz(num) {
    const canDivideByThree = num % 3 === 0;
    if(canDivideByThree && num % 5 ===0) {
        return 'FizzBuzz';
    } else if(canDivideByThree) {
        return 'Fizz';
    } else if(num % 5 === 0) {
        return 'Buzz';
    }
    return num.toString();
}

module.exports = fizzBuzz;