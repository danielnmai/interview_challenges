function meetingPlanner(slotsA, slotsB, dur) {
  let i = 0;
  let j = 0;
  
  while(i < slotsA.length && j < slotsB.length){
    const [startA, endA] = slotsA[i];
    const [startB, endB] = slotsB[j];

    const maxStart = Math.max(startA, startB);
    const minEnd = Math.min(endA, endB);

    if(maxStart + dur <= minEnd){
      return([maxStart, maxStart + dur])
    }

    if(endA < endB){
      i++;
    } else {
      j++;
    }
  }

  return [];
}


// const slotsA = [[60, 120], [140, 210]];
// const slotsB = [[10, 50], [60, 70], [130, 140]];
// const slotsA = [[7, 12]];
// const slotsB = [[2, 11]];

// const slotsA = [[1, 10]];
// const slotsB = [[2, 3], [5, 7]];

const slotsA = [[0,5],[50,70],[120,125]];
const slotsB = [[0,50]];


console.log(meetingPlanner(slotsA, slotsB, 8));