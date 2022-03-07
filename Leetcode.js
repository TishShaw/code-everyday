// Brute Force
function twoSum(nums, target) {
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				return [i, j];
			}
		}
	}
}

// Optimal Soluion
function twoSum(nums, target) {
    const previousValues = {}
    
    for(let i = 0; i < nums.length; i++) {
        let currentNumber = nums[i]
        const neededValue = target - currentNumber
        const index2 = previousValues[neededValue]
        
        if(index2 != null) {
            return [index2, i]
        } else {
            previousValues[currentNumber] = i
        }
    }
}; 



var addTwoNumbers = function (l1, l2) {
	let result = new ListNode(0);
	let currentNode = result;
	let carry = 0;

	while (l1 != null || l2 != null) {
		let v1 = 0;
		let v2 = 0;

		if (l1 != null) v1 = l1.val;
		if (l2 != null) v2 = l2.val;

		let sum = v1 + v2 + carry;
		carry = Math.floor(sum / 10);
		sum = sum % 10;
		currentNode.next = new ListNode(sum);
		currentNode = currentNode.next;

		if (l1 != null) l1 = l1.next;
		if (l2 != null) l2 = l2.next;
	}
	if (carry > 0) {
		currentNode.next = new ListNode(carry);
	}
	return result.next;
};
