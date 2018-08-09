//Given two strings, write a method to decide if one is a permuation of the other

const checkPermutation = (s1, s2) => {
    if(s1.length != s2.length) {
        return false
    }
    let sortedS1 = s1.split('').sort().join('')
    let sortedS2 = s2.split('').sort().join('')
    return sortedS1 == sortedS2
}

console.log(checkPermutation('acdbe', 'bcdae'))
