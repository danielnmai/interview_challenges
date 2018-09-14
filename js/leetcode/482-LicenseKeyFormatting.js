const licenseKeyFormatting = (s, k) => {
    let result = []
    //delete all dashes if any from the original string
    let str = s.replace(/\W/g, '')
    //Counter
    let c = 0
    for(let i = str.length - 1; i >= 0; i--){
        //if counter is equal k, add a dash to the result
        if(c === k){
            result.unshift('-')
            //add the next char and increment the count
            result.unshift(str[i])
            c = 1
        }
        //if counter is not yet equal to k, add char to result 
        else {
            result.unshift(str[i])
            c++
        }
               
    }
    return result.join('').toUpperCase()
}

console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4))
console.log(licenseKeyFormatting( "2-5g-3-J", 2))
console.log(licenseKeyFormatting( "AA1B2C3D", 3))