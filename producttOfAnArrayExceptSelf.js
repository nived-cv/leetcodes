
const test = (nums)  => {
    const product = nums.reduce((curr, acc) => curr * acc, 1)

    return nums.map((num) => product / num)
}

const main = (nums) =>  {
    let resArr = []
    let productFromBehind = 1
    let productFromFront = 1

    for(let i = 0, j=nums.length - 1; i< nums.length; i++, j--){
        resArr[i] = resArr[i] === undefined ? productFromFront : resArr[i]  * productFromFront
        resArr[j] = resArr[j] === undefined ? productFromBehind : resArr[j]  * productFromBehind
        productFromFront *= nums[i] 
        productFromBehind *= nums[j]
    }

    return resArr
}

let input = [2,3,5,0]
console.log(main(input), "main")
console.log(test(input), "test")
