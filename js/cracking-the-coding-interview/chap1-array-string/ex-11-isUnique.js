//Implement an algorithm to determine if  a string has all unique characters. 
//What if you cannot use additional data structures?

//Solution: iterate through each character of the string and compare it with the rest of the characters
//This will take O(N^2)
//To solve it in O(N log(N)), we can sort the string using efficient sorting and compare one char with the next one,
//Check for any duplicates.


//O(N^2 solution)
const isUnique = (str) => {
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < str.length; j++){
            if(i != j){
                if(str[i] == str[j]){
                    return false
                }
            }
        }
    }
    return true
}
//O( N log N) solution
const isUniqueSort = (str) => {
    let sortedStr = str.split('').sort().join('')
    for(let i = 0; i < sortedStr.length; i++){
        if(sortedStr[i] == sortedStr[i+1]){
            return false
        }
    }
    // console.log(sortedStr)
    return true
}

console.log(isUnique('abcd'))
console.log(isUnique('fjdklasjfkdasljf'))
console.log(isUniqueSort('abcdc'))