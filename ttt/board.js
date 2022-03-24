class Board{
  constructor(){
    this.board = new Array(3).fill().map(() => Array(3).fill("_"));
  }
  won(mark) {
    return this.win_row(mark) || this.win_col(mark) || this.win_diagonal(mark);
  }

  valid_pos(pos) {
    return (pos[0] >= 0 && pos[0] < 3 && pos[1] >= 0 && pos[1] < 3);
  }

  print() {
    for (let i = 0; i < this.board.length; i++) {
      console.log(this.board[i]);
    }
  }

  win_row(mark) {
    const isMark = (value) => mark;
    for (let i = 0; i < this.board.length; i++) {
      if (this.board[i].every(isMark)) {
        return true;
      }
    }
    return false;
  }

  transpose(){
    let grid = this.board.map((x) => x);
    for (let i = 0; i< this.grid.length;i++){
      for (let j = 0; j< this.grid.length;j++){
        [grid[i][j],grid[j][i]] = [grid[j][i],grid[i][j]];
      }
    }
    return grid;
  }

  win_col(mark) {
    let grid = this.transpose();
    const isMark = (value) => mark;
    for (let i = 0; i < this.grid.length; i++) {
      if (this.grid[i].every(isMark)) {
        return true;
      }
    }
    return false;
  }

  win_diagonal(mark) {

  }

  winner(){
    if (this.won()){
      console.log("Someone Won!!!");
    }
  }

  empty(pos){
    return this.board[pos[0]][pos[1]] === "_";
  }

  place_mark(pos, mark){
    if (!this.empty(pos)) {
      this.board[pos[0]][pos[1]] = mark;
    }
  }
}