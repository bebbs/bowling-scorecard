var bowlingGame = function() {
  this.rolls = [];
};

bowlingGame.prototype.roll = function(pins) {
  this.rolls.push(pins);
};

bowlingGame.prototype.score = function() {
  var result = 0;
  for(var i = 0; i < 20; i++) {
    result += this.rolls[i];
  };

  return result;
};