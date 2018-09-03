function wordCloud(str) {
    let strAr = str.split('')
    let hash = []
    for(let word of strAr){
        let input = formatStr(word)
        if(hash.hasOwnProperty(input)){
            hash[input]++
        }
        else {
            hash[input] = 1
        }
    }
    function formatStr(str){
        return str.toLowerCase().replace(/\W/g,'')
    }
    return hash
}

console.log(wordCloud('I really like cheese.. I mean it. Cheese!'))
