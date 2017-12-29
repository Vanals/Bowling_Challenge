(function(exports) {

  function BowlingFrame() {
    this.scores = []

  }

  BowlingFrame.prototype.saveScore = function (score) {
    this.scores.push(score)
  };

exports.BowlingFrame = BowlingFrame;
})(this);
