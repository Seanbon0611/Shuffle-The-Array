const shuffleArray = (nums, n) => {
  let result = [];
  for (let i=0; i < n; i++) {
    console.log(result)
    result.push(nums[i]);
    result.push(nums[i+n])
  }
  return result
}

shuffleArray([2,5,1,3,4,7], 3)