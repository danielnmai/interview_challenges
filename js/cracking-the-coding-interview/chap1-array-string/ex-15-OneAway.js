function oneAway (s1, s2){
    //If the lengths of two strings are more than 1 character different, return false
    if(Math.abs(s1.length - s2.length) > 1){
        return false
    }
    //Have a hash to keep track of character counts
    //char will be the key, its frequency will be the value
    let hash = {}, s1Count = 0
    for(let i = 0; i < s1.length; i++){
        if(hash.hasOwnProperty(s1[i])){
            hash[s1[i]]++
            s1Count++
        }
        else {
            hash[s1[i]] = 1
            s1Count++
        }
    }
    //Keep track of char count of string 2
    let s2Count = 0
    for(let i = 0; i < s2.length; i++){
        if(hash.hasOwnProperty(s2[i])){
            s2Count++
        }
    }
    //Insertion case - both s1 and s2 char count must be the same (i.e both have the same characters)
    if(s2.length > s1.length){
        return s1Count == s2Count
    }
    //Remove and replace cases - s2 count must be less than s1 count exactly 1
    else {
        return s1Count - s2Count == 1
    }
}

console.log(oneAway('pale', 'ple'))
console.log(oneAway('pales', 'pale'))
console.log(oneAway('pale', 'bale'))
console.log(oneAway('pale', 'bake'))