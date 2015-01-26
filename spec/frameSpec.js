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

  it("should receive a roll and", function() {
    expect(frame.availableRolls).toEqual(2);
    frame.receiveRoll();
    expect(frame.availableRolls).toEqual(1);
  });

});