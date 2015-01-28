var Frame = function() {
  this.totalScore = 0;
  this.bonusScore = 0;
  this.rollOneScore = 0;
  this.rollTwoScore = 0;
};

Frame.prototype.receiveRollOne = function(numberOfPins) {
  this.rollOneScore = numberOfPins;
  this.totalScore += this.rollOneScore;
};

Frame.prototype.receiveRollTwo = function(numberOfPins) {
  if (this.rollOneScore === 10) {
    this.rollTwoScore = 0; 
  } else {
    this.rollTwoScore = numberOfPins;
    this.totalScore += this.rollTwoScore;
  };
};

Frame.prototype._isAStrike = function() {
  return this.rollOneScore === 10;
};