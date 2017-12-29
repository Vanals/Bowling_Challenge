function BowlingGame(bowlingball = BowlingBall, bowlingframe = BowlingFrame) {
  this.bowlingball = new bowlingball();
  this.bowlingframe = bowlingframe
  this.frames = [new this.bowlingframe(), new this.bowlingframe(), new this.bowlingframe(), new this.bowlingframe(), new this.bowlingframe(), new this.bowlingframe(), new this.bowlingframe(), new this.bowlingframe(), new this.bowlingframe(), new this.bowlingframe(), ]
  this.turn = 0
  this.totalscore = [0]
}

BowlingGame.prototype.runTurn = function (score) {
  this.rollAndSave(score)
  this.spareBonus()
  this.increaseTurn()
}

BowlingGame.prototype.rollAndSave = function (score) {
  this.frames[this.turn].saveScore(this.bowlingball.roll(score))
  // this.increaseTurn()
};

BowlingGame.prototype.spareBonus = function () {
  if ( (this._actualTurn() != 0) && (this._isSpare()) ) {
    this._previousFrame().scores[1] += this._actualFrame().scores[0];
  }
};

BowlingGame.prototype.increaseTurn = function () {
  if (this.frames[this._actualTurn()].scores.length === 2) this.turn += 1
};

BowlingGame.prototype.getFinalScore = function () {
  this.frames.map(frame => frame.scores.map(score => this.totalscore.push(score)));
  if (this._isGutter()) this.totalscore.push(20)
  return this.totalscore.reduce((a, b) => a + b)
};



BowlingGame.prototype._isGutter = function () {
  return this.totalscore.reduce((a, b) => a + b) === 0
};

BowlingGame.prototype._actualTurn = function () {
  return this.turn
};

BowlingGame.prototype._actualFrame = function () {
  return this.frames[this._actualTurn()]
};

BowlingGame.prototype._previousFrame = function () {
  return this.frames[this._actualTurn() - 1]
};

BowlingGame.prototype._isSpare = function () {
  return this._previousFrame().scores.reduce((a, b) => a + b) === 10 && this._previousFrame().scores[0] != 10
};
