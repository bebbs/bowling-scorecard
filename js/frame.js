var Frame = function() {
  this.totalScore = 0;
  this.availableRolls = 2;
};

Frame.prototype.receiveRoll = function(numberOfPins) {
  this.availableRolls -= 1;
  if (this.totalScore + numberOfPins > 10) {
    this.totalScore = 10;
  } else {
    this.totalScore += numberOfPins;
  };
  
  if (numberOfPins === 10) {
    this.availableRolls = 0;
  };

};