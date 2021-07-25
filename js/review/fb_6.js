/**
 * 
An encoded string S is given.  To find and write the decoded string to a tape, the encoded string is read one character at a time and the following steps are taken:
If the character read is a letter, that letter is written onto the tape.
If the character read is a digit (say d), the entire current tape is repeatedly written d-1 more times in total.
Now for some encoded string S, and an index K, find and return the K-th letter (1 indexed) in the decoded string.

Example 1:
Input: s = "leet2code3", k = 10
Output: "o"
Explanation: 
The decoded string is "leetleetcodeleetleetcodeleetleetcode".
The 10th letter in the string is "o".
Example 2:
Input: s = "ha22", k = 5
Output: "h"
Explanation: 
The decoded string is "hahahaha".  The 5th letter is "h".
Example 3:
Input: s = "a2345678999999999999999", k = 1
Output: "a"
Explanation: 
The decoded string is "a" repeated 8301530446056247680 times.  The 1st letter is "a".

*/
function decodeString(s, k) {
    
    let decodeS = '';

    for(let i = 0; i < s.length; i++) {
        const char = s[i];
        const digit = parseInt(char);
        if(Number.isInteger(digit)){
            const extractedS = s.ubstr(0, i);
            console.log('extracted s ', extractedS)
            let numOfWrites = 0;
            while(numOfWrites < digit){
                decodeS += extractedS;
                console.log('decode s ', decodeS)
                numOfWrites++;
            }
        } else {
            decodeS += char;
        }
    }

    return decodeS[k - 1];
}
    

console.log(decodeString('leet2code3', 10));
