function isPalindrome(s){
    //remove all whitespaces
    let s1 = s.replace(/\s/g, '')
    //a hash to keep counts of characters
    let countChars = {}
    for(let i = 0; i < s1.length; i++){
        let currentChar = s1[i].toLowerCase()
        //If we already see the char, decrement its count
        if(countChars.hasOwnProperty(currentChar)){
            countChars[currentChar]--
        }
        //Otherwise, we set the count to 1
        else {
            countChars[currentChar] = 1
        }
    }
    //Count all the values of 1. If a string is a palindrome, there must be at most 1 character that 
    // does not have a corresponding char. i.e at most 1 key that has a value of 1. The rest must be 0.
    let countOnes = 0
    for(let key in countChars){
        if(countChars[key] != 0){
            countOnes++
        }
    }
    //countOnes must be at most 1 for the string to be a palindrome
    return countOnes <= 1
}

console.log(isPalindrome('atco ctae'))