//Reverse string without reversing individual words. i.e. Good Morning! Pramod => Pramod Morning! Good
function reverseStringWithoutReversingWord(str) {
    let outputString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] === ' ' || i === 0) {
            let j = i === 0 ? i : i + 1;
            let word = '';
            while (str[j] !== ' ' && str[j] !== undefined) {
                word += str[j];
                j++;
            }
            outputString += word + ((i === 0) ? "" : " ");
        }
    }
    return outputString;
}

console.log(reverseStringWithoutReversingWord('Good Morning! Pramod')); //Pramod Morning! Good