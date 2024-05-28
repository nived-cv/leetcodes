/**
 * @param {string} currentIndex
 * @param {string[]} chain
 * @param {Object} dict
 */

const returnIndexChain = (currentIndex, chain, dict) => {
        let index = currentIndex
        const result = chain
        while(String(index) in dict){
            result.push(index)
            index = dict[index][0]
            console.log('index', index, dict)
        }

    return result
}

/**
 * @param {string} string
 * @param {string[]} dict
 * @return {string[]}
 */
const wordBreak = (string, dict) => {
    const wordMap = {}

   for(let word of dict){
    const index = string.indexOf(word)

    if(index > -1){
        if(index in wordMap){
            wordMap[index].push(index + word.length)
            continue
        }
        wordMap[index] = [index + word.length]
    }
   }

   
   const chain = returnIndexChain(0, [], wordMap)

    return chain

}

const testCases = [
    ['catsanddog', ["cat","cats","and","sand","dog"]]
]

/**
 * @param {Function} testFn 
 * @param {Array} testCases 
 */
const test = (testFn, testCases) => {
    testCases.forEach((testCase) => {
        const result = testFn(...testCase)
        console.log('result :: ', result)
    })
}

// test(wordBreak, testCases)
console.log(wordBreak(...testCases[0]))







// solution 1
// const connectSentence = (dict, string) => {

//     for (let word of dict){
//         const index = string.indexOf(word)
//         if(index === 0){
//             const remaining = string.slice(word.length)
//             return [word , remaining ]
//         }
//     }
//     return ['', '']
// }

// const wordBreak = (string, dict) => {
    
//     let remaining = string
//     let sentence = ''

//     while(remaining.length > 0){
//         [word, remaining] =  connectSentence(dict, remaining)
//         if(!word){
//             return []
//         }
//         sentence = sentence + word + ' '
//     }
    
//     return sentence
// }