const isSubstring = (s1, s2) => {
    if(s1 == null || s2 == null) return false
    if(s1.length != s2.length || s1.length == 0 || s2.length == 0) {
        return false
    }
    let s1Ar = s1.split('')
    for(let char of s1Ar){
        let firstChar = s1Ar.shift()
        s1Ar.push(firstChar)
        if(s1Ar.join('') == s2){
            return true
        }
    }
    return false
}

console.log(isSubstring('waterbottle', 'bottlewater'));
console.log(isSubstring('a', 'a'));
console.log(isSubstring('a', null));