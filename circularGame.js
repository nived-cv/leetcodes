// https://leetcode.com/problems/find-the-winner-of-the-circular-game/description/?envType=daily-question&envId=2024-07-08

/**
 * 
 * @param {number} n 
 * @param {number} k 
 */
const findTheWinner = (n, k) => {
    
    const head = {value: 0, next: null}
    let prev = head
    for(let i =0 ; i< n; i++){
        const linkedList = {value: i+1, next: null}
        prev.next = linkedList
        prev = linkedList
    }
    prev.next = head

    let temp = head
    prev = head
    let count = 0
    while(temp.next){
        count++
        if(count === k){
            count = 0
            prev.next = temp.next
        }
        temp = temp.next
        prev = temp
    }
    console.log(temp)
}


findTheWinner(4,1)