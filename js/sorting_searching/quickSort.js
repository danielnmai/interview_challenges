function quickSort(ar, left, right){
    let index = partition(ar, left, right)
    if(left < index - 1) quickSort(ar, left, index - 1)
    if(index < right) quickSort(ar, index, right)
  
    function partition(ar, left, right){
      let pivot = ar[Math.floor((left + right) / 2)]
      while (left <= right){   
        while (ar[left] < pivot) left++
        while (ar[right] > pivot) right--
  
        //Swap
        if (left <= right){
          swap(ar, left, right)
          left++
          right--
        }
      }
      console.log('left: ' + left)
      return left
    }
  
    function swap (ar, left, right){
      let temp = ar[left]
      ar[left] = ar[right]
      ar[right] = temp
    }
  }
  
  
  let ar1 = [7, 1, 3, 5, 2]
  
  
  quickSort(ar1, 0, ar1.length - 1)
  console.log(ar1)