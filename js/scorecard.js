var Scorecard = function() {
  this.frames = [];
  this.totalScore = 0;
};

Scorecard.prototype.setupGame = function() {
  this._populateFrames();
  this._generateFrameIndex();
};

Scorecard.prototype.calculateScore = function() {
  for(var i=0; i<10; i++) {
    if (i !== 0) {
      this.calculateBonusScore(i);
    };
    this.totalScore += this.frames[i].totalScore;
  };
};

Scorecard.prototype.calculateBonusScore = function(x) {
  if (this.frames[x-1]._isAStrike()) {
    this.frames[x-1].totalScore += this.frames[x].totalScore;
  } else if (this.frames[x-1]._isASpare()) {
    this.frames[x-1].totalScore += this.frames[x].firstRollScore;
  };
};

Scorecard.prototype._populateFrames = function() {
  for(var i=0; i < 10; i++) {
    this.frames.push(new Frame);
  }
};

Scorecard.prototype._generateFrameIndex = function() {
  for(var i=0; i < 10; i++) {
    this.frames[i].number = i+1;
  }
};
