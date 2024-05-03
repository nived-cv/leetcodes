
const main = (nums) => {
    const hashRes = {}

    nums.forEach((num) => {
        if(num in hashRes){
            hashRes[num] = -num
        } else {
            hashRes[-num] = 0
        }
    })

    for (let key of hashRes){
        if(key in hashRes){
            
        }
    }

    return -1
}

let raw = [-1,10,6,7,-7,1]

console.log(main(raw))