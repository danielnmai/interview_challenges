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

console.log(isUnique('abcd'))
console.log(isUnique('fjdklasjfkdasljf'))