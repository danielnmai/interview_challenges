/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const sAr = s.split('');
  let result = 0;
  for(let i = 0; i < s.length; i++){
      if(s[i] === 'I' && (s[i + 1] === 'X' || s[i + 1] === 'V')) {
          sAr.push(s[i] + s[i + 1]);
          sAr[i] = 'O';
          sAr[i + 1] = 'O';
      } else if (s[i] === 'X' && (s[i + 1] === 'L' || s[i + 1] === 'C')) {
          sAr.push(s[i] + s[i + 1]);
          sAr[i] = 'O';
          sAr[i + 1] = 'O';
      } else if (s[i] === 'C' && (s[i + 1] === 'D' || s[i + 1] === 'M')) {
          sAr.push(s[i] + s[i + 1]);
          sAr[i] = 'O';
          sAr[i + 1] = 'O';
      }
  }
  for(const char of sAr) {
    switch(char) {
      case 'I':
        result += 1;
        break;
      case 'V':
        result += 5;
        break;
      case 'X':
        result += 10;
        break;
      case 'L':
        result += 50;
        break;
      case 'C':
        result += 100;
        break;
      case 'D':
        result += 500;
        break;
      case 'M':
        result += 1000;
        break;
      case 'IX':
        result += 9;
        break;
      case 'IV':
        result += 4;
        break;
      case 'XL':
        result += 40;
        break;
      case 'XC':
        result += 90;
        break;
      case 'CD':
        result += 400;
        break;
      case 'CM':
        result += 900;
        break;
      default:
        result += 0;
    }
  }
  return result;
  
};



