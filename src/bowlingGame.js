function BowlingGame(bowlingball = BowlingBall, bowlingframe = BowlingFrame) {
  this.bowlingball = new bowlingball();
  this.bowlingframe = bowlingframe
  this.frames = [new this.bowlingframe(), new this.bowlingframe(), new this.bowlingframe(), new this.bowlingframe(), new this.bowlingframe(), new this.bowlingframe(), new this.bowlingframe(), new this.bowlingframe(), new this.bowlingframe(), new this.bowlingframe(), ]
  this.turn = 0
  this.totalscore = [0]
}

BowlingGame.prototype.rollAndSave = function (score) {
  this.frames[this.turn].saveScore(this.bowlingball.roll(score))
  this.increaseTurn()
};

// BowlingGame.prototype.pushNewFrame = function () {
//   if (previousFrame().score.length === 2) this.frames.push(new this.bowlingframe())
// };

BowlingGame.prototype.increaseTurn = function () {
  if (this.frames[this._actualTurn()].scores.length === 2) this.turn += 1
};

BowlingGame.prototype.getFinalScore = function () {
  this.frames.map(frame => frame.scores.map(score => this.totalscore.push(score)));
  if (this.isGutter()) this.totalscore.push(20)
  return this.totalscore.reduce((a, b) => a + b)
};

BowlingGame.prototype.isGutter = function () {
  return this.totalscore.reduce((a, b) => a + b) === 0
};

BowlingGame.prototype._actualTurn = function () {
  return this.turn
};

BowlingGame.prototype._previousFrame = function () {
  return this.frames[this._actualTurn() - 1]
};

BowlingGame.prototype._isSpare = function () {
  return this._previousFrame().scores.reduce((a, b) => a + b) === 10 && this._previousFrame().scores[0] != 10
};
