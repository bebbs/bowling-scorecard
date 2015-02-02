describe("Scorecard", function() {

  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
    scorecard.setupGame();
  });

  describe("by default", function() {

    it("should create a game of 10 frames", function() {
      expect(scorecard.frames.length).toEqual(10);
    });

    it("each frame should have an index", function() {
      expect(scorecard.frames[0].number).toEqual(1);
    });

    it("should have a total score of 0", function() {
      expect(scorecard.totalScore).toEqual(0);
    });
  });

  describe("scoring the game", function() {

    it("can calculate the score after 1 frame", function() {
      scorecard.frames[0].receiveRollOne(1);
      scorecard.frames[0].receiveRollTwo(1);
      scorecard.calculateScore();
      expect(scorecard.totalScore).toEqual(2);
    });

    it("can calculate the score after a strike", function() {
      scorecard.frames[0].receiveRollOne(5);
      scorecard.frames[0].receiveRollTwo(2);
      scorecard.frames[1].receiveRollOne(10);
      scorecard.frames[2].receiveRollOne(4);
      scorecard.frames[2].receiveRollTwo(5);
      scorecard.calculateScore();
      expect(scorecard.totalScore).toEqual(35);
    });

    it("can calculate the score after a spare", function() {
      scorecard.frames[0].receiveRollOne(1);
      scorecard.frames[0].receiveRollTwo(9);
      scorecard.frames[1].receiveRollOne(1);
      scorecard.calculateScore();
      expect(scorecard.totalScore).toEqual(12);
    });

  });

});
