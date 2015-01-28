describe("Scorecard", function() {

  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
    scorecard.setupGame();
  });

  it("should create a game of 10 frames", function() {
    expect(scorecard.frames.length).toEqual(10);
  });

  it("each frame should have an index", function() {
    expect(scorecard.frames[0].number).toEqual(1);
  });

});
