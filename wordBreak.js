/**
 * @param {string} string
 * @param {string[]} dict
 * @return {string[]}
 */
const wordBreak = (string, dict) => {
    const wordMap = {}
    
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