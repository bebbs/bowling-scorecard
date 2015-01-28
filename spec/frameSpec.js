describe("Frame", function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe("by default", function() {

    it("should initalise with a default score of 0", function() {
      expect(frame.totalScore).toEqual(0);
    });

    it("should have a default bonus score of 0", function() {
      expect(frame.bonusScore).toEqual(0);
    });

  });


  it("can receive the first roll", function() {
    frame.receiveRollOne(4);
    expect(frame.totalScore).toEqual(4);
  });

  it("can receive the second roll", function() {
    frame.receiveRollOne(4);
    frame.receiveRollTwo(4);
    expect(frame.totalScore).toEqual(8);
  }); 






});