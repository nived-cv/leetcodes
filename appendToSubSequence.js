
/**
 * @param {string} first 
 * @param {string} second
 */
const appendToSubSequence = (first, second) => {
    let lastPosition = 0
    let minimumLetters = second.length
    for (let letter of second){
        const foundIndex = first.indexOf(letter, lastPosition )
        if(foundIndex === -1 || foundIndex < lastPosition){
            return minimumLetters
        }
        lastPosition = foundIndex
        minimumLetters--
    }

    return minimumLetters
}

console.log(appendToSubSequence('heyllo', 'hello'))