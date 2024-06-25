
/**
 * @param {number[]} nums 
 * @param {number} k 
 * @return {number}
 */

const minKBitFlips = (nums, k) => {

    let count = 1
    while(count < nums.length - k + 1){

        const index = nums.indexOf(0)
        
        for(let i = index; i < index + k; i++){
            nums[i] = !nums[i]
        }

        if(nums.indexOf(0) === -1){
            return count
        }
        count++
    }
}

const testCases = [
    [[0,1,0], 1],
    [[1,1,0], 2]
]


const test = (testCases, testFn) => {
    testCases.map((testCase) => console.log(testFn(testCase[0], testCase[1])))
}

test(testCases, minKBitFlips)

