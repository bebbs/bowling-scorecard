describe("Frame", function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("should initalise with a default score of 0", function() {
    expect(frame.totalScore).toEqual(0);
  });

  it("should start with 2 unused rolls", function() {
    expect(frame.availableRolls).toEqual(2);
  });

  it("should receive a roll and have 1 unused roll remaining", function() {
    expect(frame.availableRolls).toEqual(2);
    frame.receiveRoll();
    expect(frame.availableRolls).toEqual(1);
  });

  it("when a ball is rolled, the score should update", function() {
    frame.receiveRoll(5);
    expect(frame.totalScore).toEqual(5);
  });

  it("can't receive more than 10 points from a roll", function() {
    frame.receiveRoll(11);
    expect(frame.totalScore).toEqual(10);
  });

  describe("When a strike is scored", function() {

    it("only one ball can be rolled", function() {
      frame.receiveRoll(10);
      expect(frame.availableRolls).toEqual(0);
    });

  });


});