
/**this is the documentation of the function fizBuz  
 * @param {number} limit - the limit upto print fiz-buz
*/

const fizBuz = (limit) => {

    /**
     * @number - current iterating number (goes till limit supplied)
     */
    let curr = 0

    while(curr < limit) {
        curr++

        const remainderByThree = curr % 3
        const remainderByFive = curr % 5

        if(remainderByThree === remainderByFive === 0){
            console.log('Fiz-buz')
            continue
        }
        if(remainderByThree === 0){
            console.log('Fiz')
            continue
        }
        if(remainderByFive === 0){
            console.log('Buz')
            continue
        }

        console.log(curr)
    }
}

fizBuz(15)