describe("A bowling game", function() {

  var game;

  beforeEach(function() {
    game = new bowlingGame();
  });

  describe("Scoring a game", function() {

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

    it("can roll a strike", function() {
      game.roll(10);
      game.roll(4);
      game.roll(3);
      rollMultiple(0, 16);
      expect(game.score()).toEqual(24);
    });

    it("can score a perfect game", function() {
      rollMultiple(10,12);
      expect(game.score()).toEqual(300);
    });

  });

  describe("Keeping a running total", function() {

    it("after 1 frame", function() {
      game.roll(1);
      game.roll(1);
      expect(game.runningTotal()).toEqual(2);
    });

    it("after a spare", function() {
      game.roll(3);
      game.roll(7);
      game.roll(5);
      expect(game.runningTotal()).toEqual(20);
    });

    it("after a strike", function() {
      game.roll(10);
      game.roll(4);
      game.roll(4);
      expect(game.runningTotal()).toEqual(26);
    });

  });

  var rollMultiple = function(pins, rolls) {
    for(var i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  };

});