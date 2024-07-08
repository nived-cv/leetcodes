
/**
 * @param {number[]} nums 
 * @param {number} k 
 * @return {number}
 */

const minKBitFlips = (nums, k) => {

}

const testCases = [
    [[0,1,0], 1],
    [[1,1,0], 2]
]


const test = (testCases, testFn) => {
    testCases.map((testCase) => console.log(testFn(testCase[0], testCase[1])))
}

test(testCases, minKBitFlips)
