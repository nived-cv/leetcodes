// https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/submissions/1340223164/

/**
 * @param  {string} str
 * @return {number}
*/

const minimumDeletions = (str) => {
    const rangeStart = str.indexOf('a')
    const rangeEnd = str.lastIndexOf('b')

    if(rangeStart === -1 || rangeEnd === -1){
        return 0
    }

    let a_in_between = 0
    let b_in_between = 0
    let buffer = null
    let currentLetter = str[rangeStart]
    // abbbaaab

    for(let i = rangeStart; i <= rangeEnd; i++){

        if(str[i] !== currentLetter){

            if(str[i] === 'a' && buffer !== null){
                b_in_between += buffer
            } else if(str[i] === 'b' && buffer !== null){
                a_in_between += buffer
            }

            currentLetter = str[i]
            buffer = 1
        } else if(str[i] === currentLetter && buffer !== null) {
            buffer++
        }
    }

    console.info('rage a, b', a_in_between, b_in_between)

    return (rangeStart - 0) + ((str.length-1) - rangeEnd) + (a_in_between < b_in_between ? a_in_between: b_in_between)
}

const testCases = [
// {value:'aababbab', expected: 2}, // length is 8 and b between a = 3, a between b = 2
// {value:'bbaaaaabb', expected: 2}, //  a between b = 0 , b between a = 0
// {value:'aab', expected: 0}, // a between b = 0, b between a = 0
// {value:'aba', expected: 1}, // a between b = 0 b between a = 0
// {value:'babbbaaab', expected: 4}, // a between b = 3 , b between a = 3
// {value:'baababbaabbaaabaabbabbbabaaaaaabaabababaaababbb', expected: 18},
// {value:'a', expected: 0},
// {value:'b', expected: 0},
{value: "aaaaaabbbbbaaababbbbbbaaabbaababbabbbbaabbbbaabbabbabaabbbabab", expected: 25}
]

const test = (testFn, testCases) => {

    testCases.map((testCase, index) => {
        if(testCase.expected === testFn(testCase.value)){
            console.log('test case ',index, ' passed')
        } else {
            console.error('test case failed for ', index)
        }
    })
}

test(minimumDeletions, testCases)
