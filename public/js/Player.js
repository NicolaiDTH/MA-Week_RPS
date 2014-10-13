function Player(name) {
 this.name = name;
 this.win_count = 0;
};

Player.prototype.picks = function(pick) {
 this.pick = pick;
};

Player.prototype.randomlyPicks = function(array) {
 this.pick = array[Math.floor ( Math.random() * array.length )]
 return this.pick;
};

Player.prototype.wins = function() {
 this.win_count += 1;
};

Player.prototype.wc = function() {
 return this.win_count;
};