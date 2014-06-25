function Player(name) {
 this.name = name;
};

Player.prototype.picks = function(pick) {
 this.pick = pick;
};

Player.prototype.randomlyPicks = function(array) {
  this.pick = array[Math.floor ( Math.random() * array.length )]
  return this.pick;
};