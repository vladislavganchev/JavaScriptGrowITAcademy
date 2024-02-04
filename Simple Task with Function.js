function calculateSumAndMultiply(arr) {
    let sum = 0;
    let multiply = 1;

    for (let i = 0; i < arr.length; i++) {
        let currNum = arr[i];
        if (!isNaN(currNum)) {
            sum += currNum;
            multiply *= currNum;
        }
    }

    return { sum, multiply };
}

function printResults(sum, multiplyDifference) {
    console.log('The sum is: ' + sum);
    console.log('The multiply is: ' + multiplyDifference);
}

const myArray = [2, 5, undefined, 6, 3];
debugger
const {sum, multiply} = calculateSumAndMultiply(myArray);
const multiplyDifference = multiply - sum;

printResults(sum, multiplyDifference);