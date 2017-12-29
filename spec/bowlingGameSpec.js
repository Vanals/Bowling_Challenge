describe('BowlingGame', function() {

  beforeEach(function() {
     bowlinggame = new BowlingGame()
  });

  describe('pushNewFrame', function() {
    xit('Push a new Frame function in the frames array', function () {
      bowlinggame.pushNewFrame()
      expect(bowlinggame.frames[0].constructor).toEqual(BowlingFrame)
    });
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
      bowlinggame.isGutter()
      expect(bowlinggame.getFinalScore()).toEqual(20)
    });
  });

  describe('isSpare', function() {
    it('Return true if in the previous frame you did spare ', function () {
      bowlinggame.rollAndSave(5)
      bowlinggame.rollAndSave(5)
      expect(bowlinggame._isSpare()).toEqual(true)
    });
  });


});
