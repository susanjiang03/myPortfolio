/*Using your preferred language, please create an input string and then demonstrate how you would reverse it.
 For example: an input of "Programming is so much fun!" should return "!nuf hcum os si gnimmargorP".
  Do *not* use a built-in method, and be sure that your code is written clearly,
   in a way that enables others to easily understand your approach. */
// function myReverse(str){

//     var rs = "";
// 	for(var i = str.length;i >=0;i--){
// 		rs += str[i];
// 	}
//     return rs;
// }

// console.log(myReverse("Programming is so much fun!"));



/*Using your preferred language, please create an input array and then write a 
function to return the second smallest element in that array.
 For example: an input of {42, 8, 13, 79, 5, 2, 18} should return 5. */
 var list = [42, 8, 13, 79, 5, 2, 18,1,-1,-12];
 
function secondSmallest(list){

	var min = Math.min(list[0],list[1]);
	var secMin = Math.max(list[0],list[1]);

	for(var i = 2; i<list.length;i++){
		var num = list[i];

		if(num < min){
			secMin = min;
			min = num;
		}
		else if(num > min && num < secMin){

			secMin = num;
		}
		else{
			//num > secMin, no change
		}
	}
	return secMin;
}

console.log(secondSmallest(list));
