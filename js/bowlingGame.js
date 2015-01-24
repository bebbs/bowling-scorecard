var bowlingGame = function() {
  this.rolls = [];
};

bowlingGame.prototype.roll = function(pins) {
  this.rolls.push(pins);
};

bowlingGame.prototype.score = function() {
  var result = 0;
  var rollIndex = 0;
  var game = this;

  for(var frameIndex = 0; frameIndex < 10; frameIndex++) {
    if (isAStrike()) {
      result += strikeScore();
      rollIndex++;
    } else if (isASpare()) {
      result += spareScore();
      rollIndex += 2;
    } else {
      result += normalScore();
      rollIndex += 2;
    }
  };

  return result;

  function isAStrike() {
    return game.rolls[rollIndex] === 10;
  };

  function isASpare() {
    return game.rolls[rollIndex] + game.rolls[rollIndex+1] === 10;
  };

  function strikeScore() {
    return game.rolls[rollIndex] + game.rolls[rollIndex+1] + game.rolls[rollIndex+2];
  };

  function spareScore() {
    return game.rolls[rollIndex] + game.rolls[rollIndex+1] + game.rolls[rollIndex + 2];
  };

  function normalScore() {
    return game.rolls[rollIndex] + game.rolls[rollIndex+1];
  }
};