import React, { Component } from 'react';
import './App.css';

class TicTacToeGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick = (index) => {
    const squares = [...this.state.squares];
    if (this.calculateWinner(squares) || squares[index]) {
      return;
    }
    squares[index] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  };

  calculateWinner = (squares) => {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  render() {
    const winner = this.calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="App">
        <h1>Tic Tac Toe</h1>
        <div className="status">{status}</div>
        <div className="board">
          {this.state.squares.map((square, index) => (
            <button
              key={index}
              className="square"
              onClick={() => this.handleClick(index)}
            >
              {square}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default TicTacToeGame;
