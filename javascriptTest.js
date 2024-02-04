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