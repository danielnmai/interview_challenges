function mergeSort(a) {
	let length = a.length;
	if (length == 1) return a;

	let mid = Math.floor(length / 2);

	let left = a.slice(0, mid);
	let right = a.slice(mid);

	return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
	let result = [],
		l = 0,
		r = 0;
	let llen = left.length,
		rlen = right.length;

	while (l < llen && r < rlen) {
		if (left[l] < right[r]) {
			result.push(left[l++]);
		} else {
			result.push(right[r++]);
		}
	}

	while(l < left.length) result.push(left[l++]);
	while(r < right.length) result.push(right[r++]);

	return result;

	// return result.concat(left.slice(l).concat(right.slice(r)));
} 

ar = [9, 2, 7, 6, 1, 11, 2, 1, 4, 5, 7, 20, 90, 10, 5];
console.log(mergeSort(ar));
