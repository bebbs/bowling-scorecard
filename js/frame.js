var Frame = function() {
  this.totalScore = 0;
  this.availableRolls = 2;
};

Frame.prototype.receiveRoll = function() {
  this.availableRolls -= 1;
};