function mergeSort(arr) {
	if(arr.length === 1) return arr;
	const mid = Math.floor(arr.length / 2);
	
	// break the array into 2 halves
	const leftArr = arr.slice(0, mid);
	const rightArr = arr.slice(mid);

	//sort each half
	const sortedLeftArr = mergeSort(leftArr);
	const sortedRightArr = mergeSort(rightArr);

	// merge them together
	return merge(sortedLeftArr, sortedRightArr);    
}



function merge(leftArr, rightArr) {
	let result = [];
	let left = 0;
	let right = 0;
	while(left < leftArr.length && right < rightArr.length) {
			if(leftArr[left] < rightArr[right]) {
					result.push(leftArr[left]);
					left++;
			} else {
					result.push(rightArr[right]);
					right++;
			}   
	}

//     while(left < leftArr.length) result.push(leftArr[left++]);
//     while(right < rightArr.length) result.push(rightArr[right++]);

//     return result;
	return result.concat(leftArr.slice(left)).concat(rightArr.slice(right));
}

mergeSort([1,10,50,2,14,99,100]);