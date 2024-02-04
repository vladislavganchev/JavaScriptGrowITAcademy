let input = "myFile.exe";
function findExtension(str) {
    let result = str.split('.').pop();
    return result;
}
let finalResult = findExtension(input);
console.log('The extension is: ' + finalResult);