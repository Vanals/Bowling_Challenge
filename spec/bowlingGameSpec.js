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

});
