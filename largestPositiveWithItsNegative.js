
const main = (nums) => {
    const hashRes = {}

    for(let num of nums){

        if(num in hashRes){
            hashRes[num] = -num
        } else {
            hashRes[-num] = hashRes[-num] ?? 0
        }
    }

    let largest = -1
    for (let key in hashRes){
        if(hashRes[key] === 0){
            continue
        }
        let temp = +key
        temp = +key > 0 ? +key : +-key
        largest = temp > largest ? temp : largest
    }

    return largest
}

let raw = [-11,28,23,41,33,-14,-32,-35,34,-31,28,-26,38,4,16,33,-48,28,-13,-35,-7,-49,3,7,43,18,20,-37,-27,-38,-30,-37,49,-33,33,-14,-49,-38,-25,3,31]

console.log(main(raw))