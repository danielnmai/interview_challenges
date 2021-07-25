/**
 * 
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

 
Example 1:
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:
Input: digits = ""
Output: []
Example 3:
Input: digits = "2"
Output: ["a","b","c"]

2 => a b c
3 => d e f
23 => ad ae af bd be bf cd ce cf

23

                                        build(2)

                                            a b c

                                        build(3)

                                        d e f

                                        build(0, '');

                                        digit = digits[0] = 2
                                        letters =  'abc'

                                        build(1, a)

                                        digit = digits[1] = 3
                                        letters = 'def'

                                        s = ad

                                        build(2, ad)

                                        build(1, b)
                                        s = ab
                                        build(2, ab)

                                        build(1, c)
                                        s = ac
                                        build(2, ac)
 
 */

function mapDigitsToLetters(digits){

    const map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }

    const result = [];

    function build(sIdx, s){
        if(sIdx === digits.length) {
            result.push(s);
            return;
        }

        const digit = parseInt(digits[sIdx]);
        const letters = map[digit];

        for(let i = 0; i < letters.length; i++) {
            build(sIdx + 1, s + letters[i]);   
        }
        
    }

    build(0, '');

    //return array of all combinations of digits string representation
    return result;
}

console.log(mapDigitsToLetters('234'));