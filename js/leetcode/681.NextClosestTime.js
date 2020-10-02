function nextClosestTime(time) {

    let ar = time.replace(':', '').split('').map(char => parseInt(char))
    let h1 = ar[0],
        h2 = ar[1],
        m1 = ar[2],
        m2 = ar[3],
        min = Math.min(...ar)

    //test digit
    //to make sure we do not compare matched element with itself,
    //hence the 2nd condition (i != index of the digit we want to compare)

    //Return the next closest time in string time format
    function getResult(){
        return h1.toString() + h2.toString() + ":" + m1.toString() + m2.toString()
    }
    function goNextDay(){
        h1 = min
        h2 = min
        m1 = min
        m2 = min
    }

    //m2 digit
    for(let i = 0; i < ar.length; i++){   
        if (ar[i] > m2 && i != 3){
            m2 = Math.min(...ar.filter(el => el > m2))
            return getResult()
        }
    }
    //m1 Digit
    for(let i = 0; i < ar.length; i++){   
        if (ar[i] > m1 && ar[i] <= 5 && i != 2){
            m1 = Math.min(...ar.filter(el => el > m1))
            m2 = Math.min(...ar.filter(el => el < m2))        
            return getResult()
        }
    }
    //h2 Digit
    for(let i = 0; i < ar.length; i++){
        //h1 is less than 2, i.e h2 can go 0-> 9
        if(h1 < 2){
            if (ar[i] > h2 && ar[i] <= 9 && i != 1){            
                h2 = ar[i]
                m1 = min
                m2 = min                      
                return getResult()
            }
        }

        //h1 is 2, i.e h2 can go 0->4
        else {
            if (ar[i] > h2 && ar[i] < 5 && i != 1){            
                h2 = ar[i]
                m1 = min
                m2 = min                      
                return getResult()
            }
        } 
        
    }
    //h1 Digit
    for(let i = 0; i < ar.length; i++){   
        if (ar[i] > h1 && ar[i] <= 2 && i != 0){
            h1 = ar[i]
            h2 = min
            m1 = min
            m2 = min
            return getResult()
        }
    }
    //If all the above is false, we need to go to the next day time
    goNextDay()

    return getResult()
}

// console.log(nextClosestTime('01:32'))
// console.log(nextClosestTime('19:39'))
// console.log(nextClosestTime('19:44'))
// console.log(nextClosestTime('23:59'))
// console.log(nextClosestTime('18:42'))
// console.log(nextClosestTime('13:55'))
// console.log(nextClosestTime('23:52'))
// console.log(nextClosestTime('22:23'))
console.log(nextClosestTime('23:59'))
console.log(nextClosestTime('20:48'))
console.log(nextClosestTime('13:55'))


