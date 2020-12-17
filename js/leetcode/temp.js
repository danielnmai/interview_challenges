function moveToEnd(n) {
  let allPaths = [];

  function move(i, j, result) {
    if(i === n - 1 && j === n - 1) {
      result += ` ${i}-${j}`;
      allPaths.push(result);
      return;
    }
    result += ` ${i}-${j} `;

    // move until reaching row bound
    if(i < n - 1) {
      move(i + 1, j, result);
     
    };
    // move until reaching column bound
    if(j < n - 1) {
      move(i, j + 1, result);
    }
       
  }

  move(0, 0, '');
  return allPaths;
}




console.log(moveToEnd(3));