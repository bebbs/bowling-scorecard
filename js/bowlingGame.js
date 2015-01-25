var bowlingGame = function() {
  this.rolls = [];
  this.rollIndex = 0;
};

bowlingGame.prototype.roll = function(pins) {
  this.rolls.push(pins);
};

bowlingGame.prototype.score = function() {
  var result = 0;
  var game = this;

  for(var frameIndex = 0; frameIndex < 10; frameIndex++) {
    if (isAStrike()) {
      result += strikeScore();
      game.rollIndex++;
    } else if (isASpare()) {
      result += spareScore();
      game.rollIndex += 2;
    } else {
      result += normalScore();
      game.rollIndex += 2;
    }
  };

  return result;

  function isAStrike() {
    return game.rolls[game.rollIndex] === 10;
  };

  function isASpare() {
    return game.rolls[game.rollIndex] + game.rolls[game.rollIndex+1] === 10;
  };

  // Strike and spare score are the same method?

  function strikeScore() {
    return game.rolls[game.rollIndex] + game.rolls[game.rollIndex+1] + game.rolls[game.rollIndex+2];
  };

  function spareScore() {
    return game.rolls[game.rollIndex] + game.rolls[game.rollIndex+1] + game.rolls[game.rollIndex + 2];
  };

  function normalScore() {
    return game.rolls[game.rollIndex] + game.rolls[game.rollIndex+1];
  }
};

bowlingGame.prototype.runningTotal = function() {
  var game = this;
  var rollsLength = this.rolls.length;

  function addEmptyRolls() {
    for(var i = rollsLength; i < 20; i++) {
      game.roll(0);
    };
  };
  addEmptyRolls();
  return this.score();
};
