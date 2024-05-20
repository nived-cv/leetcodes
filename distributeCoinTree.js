
// url: https://leetcode.com/problems/distribute-coins-in-binary-tree/?envType=daily-question&envId=2024-05-18

const returnNodeCount = (root) => {
	let count = 0;
	const rightChildren = []
	let curr = root

	while(curr){
		count++
		if(curr.right){
			rightChildren.push(curr.right)
		}

		if(curr.left){
			curr = curr.left
		} else {
			curr = rightChildren[rightChildren.length - 1]
			rightChildren.pop()
		}
	}
	return count
}

const distributeCoins = (root) => {
	
	let collector = 0;
	let hasCompleted = false

	while(!hasCompleted){
		
		
	}
}

const root = {
	val: 0,
	right: {
		val:0,
		left: null,
		right: null
	},
	left: {
		val: 3, 
		left: null,
		right: null
	}
}

console.log(returnNodeCount(root))

