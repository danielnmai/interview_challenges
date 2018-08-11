const URLify = (s, n) =>{
    let result = []
    for(let i = 0; i < n; i++){
        if(s[i] == ' '){
            result.push('%20')
        }
        else {
            result.push(s[i])
        }
    }
    return result.join('')
}

console.log(URLify("Mr John Smith      ", 13))