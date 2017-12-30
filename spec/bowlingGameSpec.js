describe('BowlingGame', function() {

  beforeEach(function() {
     bowlinggame = new BowlingGame()
  });

  describe('increaseTurn', function() {
    it('Increase the turn variable by 1', function () {
      bowlinggame.rollAndSave(8)
      bowlinggame.rollAndSave(8)
      bowlinggame.increaseTurn()
      expect(bowlinggame.turn).toEqual(1)
    });

    it('Increase turn by 1 if in the first roll you did Strike', function () {
      bowlinggame.runTurn(10)
      expect(bowlinggame._actualTurn()).toEqual(1)
    });

  });

  describe('getFinalScore', function() {
    it('Get the scores from all the frames and calculate the sum', function () {
      bowlinggame.rollAndSave(8)
      bowlinggame.rollAndSave(8)
      bowlinggame.rollAndSave(1)
      bowlinggame.rollAndSave(2)
      expect(bowlinggame.getFinalScore()).toEqual(19)
    });
  });

  describe('isGutter', function() {
    it('Add 20 points if your totalscore array is equal to 0', function () {
      bowlinggame._isGutter()
      expect(bowlinggame.getFinalScore()).toEqual(20)
    });
  });

  describe('wasSpare', function() {
    it('Return true if in the previous frame you did spare ', function () {
      bowlinggame.rollAndSave(5)
      bowlinggame.increaseTurn()
      bowlinggame.rollAndSave(5)
      bowlinggame.increaseTurn()
      expect(bowlinggame._wasSpare()).toEqual(true)
    });
  });

  describe('spareBonus', function() {
    it('Add the score you just did in the previous frame if wasSpare returns true', function () {
      bowlinggame.runTurn(4)
      bowlinggame.runTurn(6)
      bowlinggame.runTurn(8)
      expect(bowlinggame._previousFrame().scores[1]).toEqual(14)
    });
  });

  describe('wasStrike', function() {
    it('Return true if in the previous frame you did Strike!', function () {
      bowlinggame.runTurn(10)
      expect(bowlinggame._wasStrike()).toEqual(true)
    });
  });

  describe('strikeBonus', function() {
    it('Add to the Strike score the next 2 rolls', function () {
      bowlinggame.runTurn(10)
      bowlinggame.runTurn(5)
      bowlinggame.runTurn(3)
      expect(bowlinggame.frames[0].scores.reduce((a, b) => a + b)).toEqual(18)
    });
  });

  describe('Typical game', function() {
    it('Create a complete bowling game session with spares and strikes, and get the final score', function() {
      bowlinggame.runTurn(10)
      bowlinggame.runTurn(5)
      bowlinggame.runTurn(2)
      bowlinggame.runTurn(5)
      bowlinggame.runTurn(5)
      bowlinggame.runTurn(10)
      bowlinggame.runTurn(2)
      bowlinggame.runTurn(1)
      bowlinggame.runTurn(10)
      bowlinggame.runTurn(10) //double strike to fix
      expect(bowlinggame.getFinalScore()).toEqual(90)
    });
  });
});
