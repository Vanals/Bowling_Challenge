function BowlingGame(bowlingball = BowlingBall, bowlingframe = BowlingFrame) {
  this.bowlingball = new bowlingball();
  this.bowlingframe = bowlingframe
  this.frames = []
  this.turn = 0 // need a increase turn method
}

BowlingGame.prototype.rollAndSave = function (score) {
  this.pushNewFrame() // shouldn't be here, but in another big method wich will contian rollandsave
  this.frames[this.turn].saveScore(this.bowlingball.roll(score))
  this.turn += 1 // make a method for that

};

BowlingGame.prototype.pushNewFrame = function () {
  this.frames.push(new this.bowlingframe())
};
