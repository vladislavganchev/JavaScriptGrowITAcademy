//"Create a program that checks a string input. If the length is greater than or equal to 3, take the last three 
//characters and concatenate them at the beginning and end of the input string. For example: 'growit' becomes 'itgrowitit'."

let input = 'growit';

function stringAsParameter(str) {
    let counter = str.length;
    if (counter >= 3) {
        let item = str.slice(-3);
        let result = item + input + item;
        return result;
    }

}

function printResults(result) {
    console.log('The modified word is: ' + result);
}

let finalResult = stringAsParameter(input);
printResults(finalResult);
