/**
 * Kata link: https://www.codewars.com/kata/5672a98bdbdd995fad00000f
 *
 *
 * Rock Paper Scissors
 * Let's play! You have to return which player won! In case of a draw return Draw!.
 *
 * Examples(Input1, Input2 --> Output):
 *
 * "scissors", "paper" --> "Player 1 won!"
 * "scissors", "rock" --> "Player 2 won!"
 * "paper", "paper" --> "Draw!"
 *
 */

/**
 *
 * @param {string} p1
 * @param {string} p2
 *
 */

const rps = (p1, p2) => {
  // key win against the value
  const winMap = {
    paper: 'rock',
    rock: 'scissors',
    scissors: 'paper'
  }

  if (p1 === p2) return 'Draw!'

  return winMap[p1] === p2 ? 'Player 1 won!' : 'Player 2 won!'
}

module.exports = rps
