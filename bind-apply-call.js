let avgScore = 'global score'

function avg(scores){
  let sumOfScores = scores.reduce((accumulator, currentValue) => accumulator + currentValue)
  this.avgScore = sumOfScores / scores.length
}

let gameController = {
  scores: [20, 34, 55, 46, 77],
  avgScore: null
}
avg(gameController.scores)

avg.call(gameController, gameController.scores)

console.log(gameController.avgScore)
