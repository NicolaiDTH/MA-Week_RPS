function Player(name) {
 this.name = name;
 self.win_count = 0;
};

Player.prototype.picks = function(pick) {
 this.pick = pick;
};

Player.prototype.randomlyPicks = function(array) {
  this.pick = array[Math.floor ( Math.random() * array.length )]
  return this.pick;
};

Player.prototype.wins = function() {
  self.win_count += 1;
};