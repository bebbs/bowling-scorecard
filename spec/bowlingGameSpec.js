describe("A bowling game", function() {

  var game;

  beforeEach(function() {
    game = new bowlingGame();
  });

  it("can score a gutter game", function() {
    rollMultiple(0,20);
    expect(game.score()).toEqual(0);
  });

  it("can roll a game of ones", function() {
    rollMultiple(1,20);
    expect(game.score()).toEqual(20);
  });

  var rollMultiple = function(pins, rolls) {
    for(var i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  };

});