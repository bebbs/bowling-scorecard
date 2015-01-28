var Scorecard = function() {
  this.frames = [];
};

Scorecard.prototype.setupGame = function() {
  this._populateFrames();
  this._generateFrameIndex();
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