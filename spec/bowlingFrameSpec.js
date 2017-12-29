describe('BowlingFrame', function() {

  beforeEach(function() {
     bowlingframe = new BowlingFrame()
  });

  describe('saveScore', function() {
    it('Takes a score and save it in the scores array', function () {
      bowlingframe.saveScore(10)
      expect(bowlingframe.scores[0]).toEqual(10)
    });
  });

});
