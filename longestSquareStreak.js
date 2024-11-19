// question link
// https://leetcode.com/problems/longest-square-streak-in-an-array/description/?envType=daily-question&envId=2024-10-28

// conditions
// min length for subsequence = 2
// after sorting x1,x2,x3.... x2 must be a square of x1
// return the minimum length if subsequence exists or -1 if not

/**
 * @param {number[]} nums 
 * @returns {number} 
 */

const longestSquareStreak = (nums) => {
	const streaks = {}

	nums.forEach((num) => {
		if (num**2 in streaks){
			return streaks[num**2].splice(0, 0, num)
		}

		const sqrt = Math.sqrt(num)
		if(Number.isInteger(sqrt)){
			if(sqrt in streaks){
					return streaks[sqrt].push(num)
			}
		}

		return streaks[num]= [num]
	})


	const result = Object.values(streaks).find((arr) => arr.length > 1)

	return result ? result.length : -1;
};

const testCases = [
	{in: [1, 4, 2, 6, 16, 8, 1, 1, 3, 9, 81, 36], want: 3},
	{in: [1,1, 2], want: 2},
	{in: [2,3,5,6,7], want: -1},

]

const test = (testCases) => {
	testCases.forEach((testCase) => {
		const result = longestSquareStreak(testCase.in)

		console.log( result === testCase.want ? 'Pass': result)
	})
}

console.log(test(testCases));
