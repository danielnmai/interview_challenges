function pigLatinTranslation(str) {
	let strArray = str.split(' ');
	let vowels = ['a', 'e', 'u', 'i', 'o'];
	let result = [];

	for (strAll of strArray) {
		//remove tailing special characters out of the string (! ? or .), if any
		let str = strAll.replace(/[!?.]/g, '');
		//Get tailing special characters, if any
		let anySpecialChars = strAll.substr(str.length, strAll.length - 1);

    //CASE 1: String starts with a vowel letter
		if (vowels.includes(str[0].toLowerCase())) {
			//get the pig Latin word plus any special chars
			let pigLatinStr = str + 'way';
			//return a capitalized pig latin str if the original is capitalized
			if (isCapitalized(str)) {
				pigLatinStr = capitalizeStr(pigLatinStr);
			}
			result.push(pigLatinStr + anySpecialChars);
		}
		//CASE 2: String starts with a consonant sound (non-vowel)
		else if (!vowels.includes(str[0]) && vowels.includes(str[1])) {
			//get the pig Latin word plus any special chars
			let pigLatinStr =
				str.substr(1, str.length - 1) + str[0].toLowerCase() + 'ay';
			//return a capitalized pig latin str if the original is capitalized
			if (isCapitalized(str)) {
				pigLatinStr = capitalizeStr(pigLatinStr);
			}
			result.push(pigLatinStr + anySpecialChars);
		}
		//CASE 3: String starts with a consonant cluster (such as 'th', ch', 'sh', 'sch')
		else if (!vowels.includes(str[0]) && !vowels.includes(str[1])) {
			//if string contains invalid chars, just return the same string
			if (containInvalidChars(str)) {
				result.push(str + anySpecialChars);
			} else {
				//find the first appearance of the vowel in the string
				let vowelIndex = 0;
				for (let i = 0; i < str.length; i++) {
					if (vowels.includes(str[i])) {
						//when found, return right away
						vowelIndex = i;
						break;
					}
				}
				//get the pig Latin word plus any special chars
				let pigLatinStr =
					str.substr(vowelIndex, str.length - 1) +
					str.substr(0, vowelIndex) +
					'ay';
				//return a capitalized pig latin str if the original is capitalized
				if (isCapitalized(str)) {
					pigLatinStr = capitalizeStr(pigLatinStr);
				}
				result.push(pigLatinStr + anySpecialChars);
			}
		}
	}
  //HELPER FUNCTIONS
  //check whether the string is capitalized
	function isCapitalized(str) {
		return str.charAt(0) === str.charAt(0).toUpperCase();
	}

  //Capitalize the string
	function capitalizeStr(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	//Check if string contains unallowed chars, including digits
	function containInvalidChars(str) {
		let pattern = new RegExp(/[\d~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/);
		if (pattern.test(str)) {
			return true;
		}
		return false;
	}

	return result.join(' ');
}
// hello => ellohay
// eat => eatway
// eat world => eatway orldway
// Hello => Ellohay
// Apples => Applesway
// eat… world?! => eatway… orldway?!
// school => oolschay
// quick => ickquay
// she’s great! => e’sshay eatgray!

console.log(pigLatinTranslation('hello'));
console.log(pigLatinTranslation('eat'));
console.log(pigLatinTranslation('eat world'));
console.log(pigLatinTranslation('Hello'));
console.log(pigLatinTranslation('Apples'));
console.log(pigLatinTranslation('eat… world?!'));
console.log(pigLatinTranslation('school'));
console.log(pigLatinTranslation('quick'));
console.log(pigLatinTranslation('she’s great!'));
console.log(pigLatinTranslation('234a!!'));
console.log(pigLatinTranslation('$%2...'));
