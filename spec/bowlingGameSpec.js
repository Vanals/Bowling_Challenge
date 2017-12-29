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

  describe('isSpare', function() {
    it('Return true if in the previous frame you did spare ', function () {
      bowlinggame.rollAndSave(5)
      bowlinggame.increaseTurn()
      bowlinggame.rollAndSave(5)
      bowlinggame.increaseTurn()
      expect(bowlinggame._isSpare()).toEqual(true)
    });
  });

  describe('spareBonus', function() {
    it('Add the score you just did in the previous frame if isSpare returns true', function () {
      bowlinggame.runTurn(4)
      bowlinggame.runTurn(6)
      bowlinggame.runTurn(8)
      expect(bowlinggame._previousFrame().scores[1]).toEqual(14)
    });
  });

});
