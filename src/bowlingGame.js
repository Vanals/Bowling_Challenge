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
  this.strikeBonus()
  this.strikeBonus2()
  this.increaseTurn()
}

BowlingGame.prototype.rollAndSave = function (score) {
  this.frames[this.turn].saveScore(this.bowlingball.roll(score))
};

BowlingGame.prototype.spareBonus = function () {
  if ( (this._actualTurn() != 0) && (this._wasSpare()) ) {
    this._previousFrame().scores[1] += this._actualFrame().scores[0];
  }
};

BowlingGame.prototype.strikeBonus = function () {
  if ( this._actualTurn() != 0 && this._actualFrame().scores.length === 2 && this._wasStrike()) this._previousFrame().scores[0] += this._actualFrame().scores.reduce((a, b) => a + b)
};

BowlingGame.prototype.strikeBonus2 = function () {
  if ( this._actualTurn() > 1 && this._actualFrame().scores.length === 1 && this._wasStrike() && this._wasStrike2()) {
    this._previousFrame2().scores[0] += (this._previousFrame().scores[0] + this._actualFrame().scores[0])
  }
};
BowlingGame.prototype.increaseTurn = function () {
  if (this._actualFrame().scores.reduce((a, b) => a + b) === 10 && this._actualFrame().scores.length === 1) this.turn += 1
  if (this.frames[this._actualTurn()].scores.length === 2) this.turn += 1
};

BowlingGame.prototype.getFinalScore = function () {
  this.frames.map(frame => frame.scores.map(score => this.totalscore.push(score)));
  if (this._isGutter()) this.totalscore.push(20)
  return this.totalscore.reduce((a, b) => a + b)
};

BowlingGame.prototype._wasStrike = function () {
  return (this._previousFrame().scores.reduce((a, b) => a + b) === 10 && this._previousFrame().scores.length === 1)
};

BowlingGame.prototype._wasStrike2 = function () {
  return (this._previousFrame2().scores.reduce((a, b) => a + b) === 10 && this._previousFrame2().scores.length === 1)
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

BowlingGame.prototype._previousFrame2 = function () {
  return this.frames[this._actualTurn() - 2]
};

BowlingGame.prototype._wasSpare = function () {
  return this._previousFrame().scores.reduce((a, b) => a + b) === 10 && this._previousFrame().scores[0] != 10
};
