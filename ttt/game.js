require("./board.js");

class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.board = new Board();
    this.currentplayer = player1;
  }

  switchTurn() {
    if(this.currentplayer === this.player1){
      this.currentplayer = this.player2;
    }else{
      this.currentplayer = this.player1;
    }
  }

  play() {

  }

}



