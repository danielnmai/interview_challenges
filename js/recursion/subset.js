
// Complete the function below. 
// The function accepts a STRING as parameter and is expected to return a STRING ARRAY.
function get_distinct_subsets(str) {
    
  const set = new Set();
  
  
  function helper(index){
      
      if(index === str.length) {
          return;
      }
      
      if(set.size === 0) {
          set.add('');
      }
      
      const char = str.charAt(index);
      
      for(const str of set) {
          set.add(str + char);
          console.log('set ', set);
      }
      helper(index + 1);
  }
  
  helper(0);
  
  
  return Array.from(set);
  
}

console.log(get_distinct_subsets('aab'));