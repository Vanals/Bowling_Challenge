function BowlingGame(bowlingball = BowlingBall, bowlingframe = BowlingFrame) {
  this.bowlingball = new bowlingball();
  this.frames = []
  this.turn = 0 // need a increase turn method
}

BowlingGame.prototype.rollAndSave = function (score) {

  this.frames.push(new bowlingframe()) //make a create new frame method
  this.frames[this.turn].saveScore(this.bowlingball.roll(score))
  this.turn += 1 // make a method for that

};
