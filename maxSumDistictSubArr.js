/**
 * @param {number[]} nums
 * @param {number} k
 */

const maximumSubArrSum = (nums, k) => {
	if (k <= 0) {
		return 0;
	}

	if (k > nums.length) {
		return 0;
	}

	const arr = [];

	nums.forEach((num) => {
		if (arr.includes(num)) {
			return;
		}
        const arrayIndex = arr.indexOf((item) => item > num) 
		const position =  arrayIndex === -1 ? 0 : arrayIndex - 1

        if(arr.length < 3){
            return arr.splice(position, 0, num)
        }

		return arr.splice(position , 1, num)
	})

	return arr.reduce((sum, curr) => curr + sum, 0)
};

const testCases = [
    { nums: [1, 5, 4, 2, 9, 9, 9], k: 3, want: 15 },
    { nums: [1,1,1], k: 3, want: 1 },
    { nums: [1,1,1], k: 3, want: 1 },
];

const test = () => {
	testCases.map((testCase) => {
		const result = maximumSubArrSum(testCase.nums, testCase.k);

		console.log(result === testCase.want ? "pass" : result);
	});
};

test();
