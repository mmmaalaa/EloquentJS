const range = (start, end, step) => {
  let nums = [];
  if (step === undefined) step = 1;
  if (start < end ) {
    for (let i = start; i <= end; i += step) {
      nums.push(i);
    }
  }else {
   for (let i = start; i >= end; i += step) {
     nums.push(i);
   }}

  return nums;
};
const sum = (nums) => {
  let total = 0;
  for (let num of nums) {
    total += num;
  }
  return total;
};
