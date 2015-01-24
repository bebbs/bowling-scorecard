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

  it("can roll a spare", function() {
    game.roll(5);
    game.roll(5);
    game.roll(3);
    rollMultiple(0, 17);
    expect(game.score()).toEqual(16);
  })

  var rollMultiple = function(pins, rolls) {
    for(var i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  };

});