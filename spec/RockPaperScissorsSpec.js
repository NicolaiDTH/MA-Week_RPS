describe("Rock-Paper-Scissors", function() {
  var player1, player2, game;

  beforeEach(function() {

    player1 = new Player('Human');
    player2 = new Player('Computer');
    game = new Game(player1, player2);
  });

  describe('winning and losing', function() {

    describe('rock', function() {

      it('should beat scissors', function() {
        player1.picks('rock');
        player2.picks('scissors');
        expect(game.winner()).toBe(player1);
      });

      it('should beat shocker', function() {
        player1.picks('rock');
        player2.picks('shocker');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to paper', function() {
        player1.picks('rock');
        player2.picks('paper');
        expect(game.winner()).toBe(player2);
      });

      it('should lose to bullhorns', function() {
        player1.picks('rock');
        player2.picks('bullhorns');
        expect(game.winner()).toBe(player2);
      });
    });

    describe('paper', function() {

      it('should beat rock', function() {
        player1.picks('paper');
        player2.picks('rock');
        expect(game.winner()).toBe(player1);
      });

      it('should beat bullhorns', function() {
        player1.picks('paper');
        player2.picks('bullhorns');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to scissors', function() {
        player1.picks('paper');
        player2.picks('scissors');
        expect(game.winner()).toBe(player2);
      });

      it('should lose to shocker', function() {
        player1.picks('paper');
        player2.picks('shocker');
        expect(game.winner()).toBe(player2);
      });
    });

    describe('scissors', function() {

      it('should beat paper', function() {
        player1.picks('scissors');
        player2.picks('paper');
        expect(game.winner()).toBe(player1);
      });

      it('should beat shocker', function() {
        player1.picks('scissors');
        player2.picks('shocker');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to rock', function() {
        player1.picks('scissors');
        player2.picks('rock');
        expect(game.winner()).toBe(player2);
      });

      it('should lose to bullhorns', function() {
        player1.picks('scissors');
        player2.picks('bullhorns');
        expect(game.winner()).toBe(player2);
      });

    });

    describe('shocker', function() {

      it('should beat paper', function() {
        player1.picks('shocker');
        player2.picks('paper');
        expect(game.winner()).toBe(player1);
      });

      it('should beat bullhorns', function() {
        player1.picks('shocker');
        player2.picks('bullhorns');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to rock', function() {
        player1.picks('shocker');
        player2.picks('rock');
        expect(game.winner()).toBe(player2);
      });

      it('should lose to scissors', function() {
        player1.picks('shocker');
        player2.picks('scissors');
        expect(game.winner()).toBe(player2);
      });

    });

    describe('bullhorns', function() {

      it('should beat rock', function() {
        player1.picks('bullhorns');
        player2.picks('rock');
        expect(game.winner()).toBe(player1);
      });

      it('should beat scissors', function() {
        player1.picks('bullhorns');
        player2.picks('scissors');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to paper', function() {
        player1.picks('bullhorns');
        player2.picks('paper');
        expect(game.winner()).toBe(player2);
      });

      it('should lose to shocker', function() {
        player1.picks('bullhorns');
        player2.picks('shocker');
        expect(game.winner()).toBe(player2);
      });

    });
  });

  describe('draws', function() {

    describe('any identical picks', function() {

      it('should result in no winner', function() {
        var drawGameResults = ['rock', 'paper', 'scissors', 'shocker', 'bullhorns'].map(function(x) {
          player1.picks(x);
          player2.picks(x);
          return game.winner();
        });

        expect(drawGameResults).toEqual(['Draw', 'Draw', 'Draw', 'Draw', 'Draw']);
      });

    });

  });

  describe('victory messages', function() {

    it("should return the winner's name, the verb and the loser's name", function() {
      player1.picks('scissors');
      player2.picks('rock');
      expect(game.winningMessage()).toEqual('Jack crushes Jill');
    });

  });

});