describe('BowlingBall', function() {

  beforeEach(function() {
    var bowlingball = new BowlingBall.js
  });

  describe('Roll', function() {
    it('Roll a bowling ball returning a score', function () {
      expect(bowlingball.roll(3).toEqual(3))
    });
  });

});
