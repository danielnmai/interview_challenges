/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canJump(nums) { 
  const memo = new Array(nums.length).fill(-1);
  memo[memo.length - 1] = 1;

  function jump(curIdx){    
    console.log(`jump(${curIdx})`);
    if(curIdx === nums.length - 1){
      return true;
    }
    let furthestJump = Math.min(curIdx + nums[curIdx], nums.length - 1);
    for(let i = curIdx + 1; i <= furthestJump; i++){
      
      if(jump(i)){
        return true;
      }
    }
    console.log(`invalid jump`);
    return false;
  }
  
  return jump(0);    
};

function canJumpWithMemo(nums){ 
  
  const memo = new Array(nums.length).fill(-1);
  memo[memo.length - 1] = 1;

function jump(curIdx){
  console.log(`jump(${curIdx})`);
  if(memo[curIdx] != -1){
      return memo[curIdx] === 1;
  }
  let furthestJump = Math.min(curIdx + nums[curIdx], nums.length - 1);
  for(let i = curIdx + 1; i <= furthestJump; i++){
    if(jump(i)){
      memo[curIdx] = 1;
      return true;
    }
  }
  memo[curIdx] = 0;
  console.log(`invalid jump`);
  return false;
}

return jump(0);    
};


/*
A  2, 3, 1, 1, 4
i  0  1  2  3  4

i = 0 can jump max 2 steps: 1, 2 (1 => 2)
i = 1 can jump max 3 steps: 2, 3, 4 (2 => 4)
i = 2 can jump max 1 steps: 3 (3 => 4)
i = 3 can jump max 1 steps: 4 (4 => 5)


*/
const nums = [3, 1, 2];

const nums2 = [3,2,1,0,4];
console.log(canJump(nums2));
console.log(canJumpWithMemo(nums2));