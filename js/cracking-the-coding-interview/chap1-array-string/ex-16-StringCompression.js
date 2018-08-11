function stringCompression (s) {
    let hash = {}, ar = []
    for(let i = 0; i < s.length; i++){
        if(hash.hasOwnProperty(s[i])){
            hash[s[i]]++
        }
        else {
            hash[s[i]] = 1
        }
    }
    for(let key in hash){
        ar.push(key + hash[key])
    }
    let s2 = ar.join('')

    //if the s2 string is not smaller than the original string,
    //return the original string
    if(s2.length >= s.length){
        return s
    }
    return s2
}

console.log(stringCompression('abcd'))