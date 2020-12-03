/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
  

  intervals.sort((a, b) => a[0] - b[0]);

  for(let i = 0; i < intervals.length - 1; i++) {
    const curInterval = intervals[i];
    const nextInterval = intervals[i + 1];
    const [curStart, curEnd] = curInterval;
    const [nextStart, nextEnd] = nextInterval;

    if(curEnd > nextStart && curEnd > nextEnd) {
    
      return false;
    }

  }

  return true;
};

const intervals = [[0,30],[5,10],[15,20]];
const intervals1 = [[7,10],[2,4]];

console.log('can attend meetings ', canAttendMeetings(intervals1));

