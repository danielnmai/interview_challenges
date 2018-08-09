
let currentMove = 0

function printMove(n, from, to){
    console.log(`Move ${n} from ${from} to ${to}`)
}
function moveDisks(n, from, to, spare){

    if(n == 1) {
        return printMove(n, from, to)
    }
    moveDisks(n - 1, from, spare, to)
    moveDisks(1 , from , to, spare)
    moveDisks(n - 1, spare, to, from)   
}

let noOfDisk = 2

let from = []
for(let i = 0;i < noOfDisk; i++){
    from.push(i)
}
// moveDisks(1, 'A', 'C', 'B')
console.log(from)