/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {

  if(intervals.length === 0) return 0;

  let noOfRooms = 0;

  const startTimes = [];
  const endTimes = [];

  intervals.forEach(interval => {
    const [startTime, endTime] = interval;
    startTimes.push(startTime);
    endTimes.push(endTime);
  })

  startTimes.sort((a, b) => a - b);
  endTimes.sort((a, b) => a - b);

  console.log('startTimes ', startTimes);
  console.log('endTime ', endTimes);

  let endPointer = 0;

  for(let i = 0; i < startTimes.length; i++) {
    if(startTimes[i] >= endTimes[endPointer]) {
      endPointer++;
    } else {
      noOfRooms++;
    }
  }

  return noOfRooms;
};

const intervals = [[0,30], [15,20], [5,10]];
const intervals1 = [[[7,10],[2,4]]];
const intervals2 = [[4, 9], [4, 17], [9, 10]];
const intervals3 = [[2,11],[6,16],[11,16]];
console.log('no of rooms ', minMeetingRooms(intervals));