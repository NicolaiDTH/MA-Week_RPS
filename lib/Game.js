function Game(player1, player2) {
 this.player1 = player1;
 this.player2 = player2;
};

Game.prototype.gesture = {    

  rock:       { scissors: 'obliterates', shocker: 'extinguishes' },
  paper:      { rock: 'engulfs', shocker: 'incarcerates' },
  scissors:   { paper: 'lacerates', bullhorns: 'shears' },
  shocker:    { bullhorns: 'traumatises', scissors: 'electrocutes' },
  bullhorns:  { rock: 'tramples', paper: 'impales' }
};

Game.prototype.winner = function() {
  if(this._isSamePick()) return null;

  if(this._victoryVerb(this.player1.pick, this.player2.pick)) {
    return this.player1;
  }
  else {
    return this.player2;
  }
}

Game.prototype.loser = function() {
  return (this.winner() === this.player1 ? this.player2 : this.player1);
}

Game.prototype.winningMessage = function() {
  var message;

  if(this.winner()) {
    message = this.winner().name + "'s " +
      this.winner().pick + " " +
      this._victoryVerb(this.winner().pick, this.loser().pick) + " " +
      "the " + this.loser().name + "'s " + this.loser().pick + ".";
  } else {
    message = 'Draw.';
  }

  return message;
}

Game.prototype._victoryVerb = function(winnerPick, loserPick) {
  return this.gesture[winnerPick][loserPick];
}

Game.prototype._isSamePick = function() {
 return this.player1.pick === this.player2.pick;
};