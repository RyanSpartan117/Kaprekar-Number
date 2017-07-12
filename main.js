// A kaprekar number is In mathematics, a Kaprekar number for a given base is a non-negative integer,
// the representation of whose square in that base can be split into two parts that add up to the original number again.
// For instance, 45 is a Kaprekar number, because 452 = 2025 and 20 + 25 = 45. The Kaprekar numbers are named after D. R. Kaprekar.

// X = A + B where B !== 0;


function numberSplit(num) { // take a number and separate it to iterate through it later.

let output = [];

	while(num) {

		output.push(num % 10);
		num = Math.floor(num/10);
	
	}
	return output.reverse(); // the numbers are pushed from the right, so array needs to be reversed.

}

function findKaprekarNumbers(sr, er) {//start range, end range

	let start = sr;
	let knumbs = []; //push all of the Kaprekar Numbers into an array


	for(sr; sr <= er; sr ++) {	
		
		let srSquared = sr**2;

		let array = numberSplit(srSquared);

		for(let i = 0; i <=array.length; i++) {

			let leftArr = [];
			let rightArr = [];

			leftArr = array.slice(0, i); //split the array into left and right without changing the original array (splice)
			rightArr = array.slice(i, array.length);

			leftArr = leftArr.join(""); //join all the numbers into a string together with no space
			rightArr =rightArr.join	("");

			leftArr = parseInt(leftArr) || 0; // make the string a number
			rightArr = parseInt(rightArr) || 1;

			if(leftArr + rightArr === sr) {

				knumbs.push(sr);

			}

		}

	}

	return knumbs; //output the result
}
