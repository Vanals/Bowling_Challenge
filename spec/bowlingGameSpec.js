describe('BowlingGame', function() {

  beforeEach(function() {
     bowlinggame = new BowlingGame()
  });

  describe('pushNewFrame', function() {
    it('Push a new Frame function in the frames array', function () {
      bowlinggame.pushNewFrame()
      expect(bowlinggame.frames[0].constructor).toEqual(BowlingFrame)
    });
  });

  describe('increaseTurn', function() {
    it('Increase the turn variable by 1', function () {
      bowlinggame.increaseTurn()
      expect(bowlinggame.turn).toEqual(1)
    });
  });

});
