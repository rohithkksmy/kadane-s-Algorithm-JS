/*
Kadane's Algorithm Javascript.

Helps us to find maximum sum of sub array from an array

*/

function Kadane(arr){
	var maxCurrent = arr[0],maxGlobal = arr[0];
	for(var i = 1; i< arr.length; i++){
		maxCurrent = Math.max((maxCurrent + arr[i]), arr[i])
		if(maxCurrent > maxGlobal){
			maxGlobal = maxCurrent;
		}
	}
	return maxGlobal;
}

/*

Explanation

Each elemeent and the sum of the previous element is considered as subset, So from the iteration we calculate the sum from each element
from the start to the end of the array. Comparison is done between the sum  of the previous element and current elements and the ouptut is 
updated accordingly
*/