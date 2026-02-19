// If we use the const keyword, we can't re-assign that value
const nums = [1,2,3]
// nums = [];

// but we can still manipulate it using its methods
nums.push(4);
console.log(nums);

const numsConst = [1,2,3] as const;
// Using as const eliminates any possibility of manipulating the array
// numsConst.push(4);
// numsConst[0] = 3;


// Social Media Example
const comments = [];
// UPPERLIMIT = 

