//Alation Interview 09/06/2018

// Wikipedia
// Compute the H-index.
// The definition of the index is that a scholar with an index of h has published h papers each of which has been cited in other papers at least h times.Thus, the h-index reflects both the number of publications and the number of citations per publication.

// Examples: 
// Let f be the function that corresponds to the number of citations for each publication. 

// f(A)=10, f(B)=8, f(C)=5, f(D)=4, f(E)=3　→ h-index=4
// at least 3 papers with 3 or more citations (each) True
// at least 4 papers with 4 or more citations (each) True
// at least 5 papers with 5 or more citations (each) False

// f(A)=25, f(B)=8, f(C)=5, f(D)=3, f(E)=3　→ h-index=3
// f(A)=3, f(B)=3, f(C)=5, f(D)=8, f(E)=25　→ h-index=3
// f(A)=1000, f(B)=1, f(C)=100, f(D)=1, f(E)=1　→ h-index=?
// f(A)=1000, f(B)=100, f(C)=1, f(D)=1, f(E)=1　→ h-index=?
// f(A)=2, f(B)=2, f(C)=1, f(D)=1, f(E)=1　→ h-index=?
// f(A)=5, f(B)=5, f(C)=5, f(D)=5, f(E)=5  → h-index=?
// f(A)=2, f(B)=5, f(C)=5, f(D)=5, f(E)=5  → h-index=?

// If you have k papers, what is the what max possible h-index ?
// What is the minimum possible h-index ?

// input: array of citations
// output: h-index

//O(NlogN)
function getHIndex(ar) {
    let k = ar.length, hIndex = 0
    ar.sort((a, b) => { return b - a })
    console.log(ar)
    //i: 0->4, we need position goes from 1->5
    for(let i = 0; i < k; i++){
        let pos = i + 1
        if(ar[i] < pos){
            hIndex = i
            break
        }
    }
    return hIndex
}

//Run time: O(N)
function getHIndexCountSort(ar) {
    let n = ar.length
    let paperCounts = [...ar].fill(0)
    paperCounts.push(0)
    for(let c of ar){
        paperCounts[Math.min(c, n)]++
    }
    let k = n
    for(let sum = paperCounts[n]; k > sum; sum += paperCounts[k]){
        k--
    }
    return k
}

console.log(getHIndexCountSort([1,3,2,3,100]))
// console.log(getHIndexCountSort([25, 8, 5, 3, 3]))
// console.log(getHIndexCountSort([1,1,3,6,7,10,7,1,8,5,9,1,4,4,3]))