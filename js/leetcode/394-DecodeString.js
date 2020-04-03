/**
 * @param {string} s
 * @return {string}
 * 
 */
function decodeString(s){
	const map = new Map();
    let start = 0;
    let end = 0;
    let k;
    let decodedStr;
    let result = '';
    let runOnce = false;
    let prevEnd = 0;
	
    for(let i = 0; i < s.length; i++){
        let curChar = s[i];

        if(curChar === '['){
            start = i + 1;
        }
        
        if(curChar === ']'){
            end = i;
        }
        
      

        

        if(start !== 0 && end !== 0){
          decodedStr = s.substring(start, end);
          if(prevEnd !== 0){
            prevEnd += 1;
          }
          if(start > prevEnd){
            k = s.substring(prevEnd, start - 1);
            prevEnd = end;
            map.set(k, decodedStr);
          }
            start = 0;
            end = 0;
            k = '';            
        }
    }

    for(let key of map.keys()){
      console.log('key ', key);
        for(let i = 0; i < parseInt(key); i++){
            result += map.get(key);
        }
    }
    return result;
}
s = "3[a]2[bc]";s1 = "2[abc]3[cd]ef";

console.log(decodeString(s1));

const list = "1873,1626,2186,623,647,1805,1791,372,643,919,28,1798,1742,1999,668,1906,23,1968,1674,631,2063,1604,861,1597,719,246,386,898,517,1239,1315,2200,466,2159,2052,1162,414,341,610,981,855,1452,1880,2067,576,316,245,426,710,616,306,291,718,1235,1035,758,2138,2076,450,723,53,653,395,417,520,1413,1409,1747,1355,1771,155,138,1403,453,52,1859,964,825,1177,380,1444,2127,992,1973,926,2082,843,2053,1280,1468,1869,518,384,1985,1983,851,899,1546,1620,1542,254,980,1123,1412,1986,656,336,444,214,178,1382,1979,1218,1552,1937,1904,240,410,1088,836,127,1993,663,2166,1118,2027,571,888,1887,1624,456,1857,626,1919,1368,1821,2087,2002,1411,1320,304,1079,1250,1716,1298,516,1059,2153,166,1365,1912,930,676,1536,2148,1738,1213,812,1574,852,1254,1634,720,648,397,129,1673,1769,1344,925,651,1879,1458,1017,944,2090,1370,377,415,1654,657,1760,269,2126,928,866,1913,2194,424,1487,790,490,1969,619,173,261,1686,973,1262,900,1167,1768,1305,1914,264,2133,2135,111,1557,2181,335,611,1066,1607,768,914,605,882,1566,644,1724,1106,1105,1169,1876,1119,1766,1230,1160,1387,524,454,1664,2119,1428,1537,1497,1921,950,230,2069,2141,2035,630,1535,406,1310,2094,1219,592,495,1311,1438,596,1656,2038,842,1823,1643,624,1478,1553,468,2078,955,1227,1826,295,267,1722,999,1648,1602,363,19,107,108,1450,962,1556,1272,2003,491,378,561,439,436,248,1418,2121,1490,311, 1005";


console.log(list);
/**
 * 
 * Solution using stack
 *
var decodeString = function(s) {
  const stack = [[1, '']];
  for (let i = 0; i < s.length; i++) {
    if (isNumber(s[i])) {
      const numStr = parseNumber(s, i);
      stack.push([parseInt(numStr), '']);
      i += numStr.length - 1;
    } else if (s[i] === '[') {
      continue;
    } else if (s[i] === ']') {
      const [nRepeats, str] = stack.pop();
      const top = stack[stack.length - 1];
      top[1] += str.repeat(nRepeats);
    } else {
      const top = stack[stack.length - 1];
      top[1] += s[i];
    }
  }
  const [nRepeats, str] = stack.pop();
  return str.repeat(nRepeats);
};

function isNumber(c) {
  return /[0-9]/.test(c);
}

function parseNumber(s, start) {
  let i = start;
  while (isNumber(s[i])) {
    i += 1;
  }
  return s.substring(start, i);
}
 */