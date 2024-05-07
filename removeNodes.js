
const removeNodes = (head) => {
    
    let currentNode = head
    let stack = []
    let top = -1

    while(currentNode){

        while(currentNode?.value > stack[top]?.value){
            stack[top] = null
            top--
        }

        top++
        stack[top] = currentNode
        if(top > 0){
            stack[top - 1].next = stack[top]
        }
        currentNode = currentNode.next
    }

    return stack[0]
}

const e = {
    next: null,
    value: 8
}
const d = {
    next: e,
    value: 3,
}
const c = {
    next: d,
    value: 13,
}
const b = {
    next: c,
    value: 2,
}

const a  = {
    next: b,
    value: 5
}


console.log(removeNodes(a))
