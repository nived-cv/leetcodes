/**
 * @param {number[]} nums
 * @return {void}
 */

const sortColors = (nums) => {
    const counts = {0: 0, 1:0 , 2: 0}
    for(let i =0; i< nums.length; i++){
        counts[nums[i]] = counts[nums[i]] + 1
    }

    for(let i =0; i< nums.length; i++){
        if(counts[0] > 0){
            nums[i] = 0
            counts[0]--
            continue
        }

        if(counts[1] > 0){
            nums[i] = 1
            counts[1]--
            continue
        }
        nums[i] = 2
    }
}

const testCases = [
    [2,0,2,1,1,0],
    [2,0,1]
]

for(const item of testCases){
    sortColors(item)
}