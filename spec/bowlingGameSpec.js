describe("A bowling game", function() {

  var game;

  it("can score a gutter game", function() {
    var game = new bowlingGame();
    for(var i = 0; i < 20; i++) {
      game.roll(0);
    };

    expect(game.score()).toEqual(0);
  });

});