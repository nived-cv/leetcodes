
/**
 * @param str {string} 
 * @return {number}
 */

const minimumDeletions = (str) => {

    const positionsToBeDeleted = []
    for(let i =0, j = str.length - 1; i< str.length , j > -1; i++, j--){
        if( i === j){
          break 
        }

       if(str[i] === str[j]){

            if(str[i] === 'a'){
               positionsToBeDeleted.push(j) 
            } else {
                positionsToBeDeleted.push(i)
            }
       } 

        positionsToBeDeleted.push(i)
    }

    return positionsToBeDeleted.length
}

const testCases = [
    {value:'aababbab', expected: 2},
{value:'bbaaaaabb', expected: 2},
{value:'aab', expected: 0},
]

const test = (testFn, testCases) => {

    testCases.map((testCase, index) => {
        if(testCase.expected === testFn(testCase.value)){

            console.log('test case ',index, ' passed')
        } else {
            console.error('test case failed for ', index, 'result >>', testFn(testCase))
        }
    })

}

test(minimumDeletions, testCases)