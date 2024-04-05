import _ from 'lodash';
import './css/style.css';
import Gameboard from './classes/gameboard.js';
import Player from './classes/player.js'
import Computer from './classes/computer.js'
import gameLoop from './loop.js'


const player = new Player(new Gameboard(10));
const computer = new Computer(new Gameboard(10));



// Creating div element for game board
const $gameBoard = document.createElement('div')
$gameBoard.id = 'game-board'
document.body.appendChild($gameBoard)
const gameBoardElement = document.getElementById('game-board')

function drawGameBoard(gameboard, container) {
  container.innerHTML = '';

  for (const coordinate of Object.keys(gameboard.grid)) {
    const cell = document.createElement('div');
    cell.classList.add('game-cell');

    if (gameboard.grid[coordinate].occupied) {
      cell.classList.add('occupied');
    } else if (gameboard.grid[coordinate].destroyed) {
      cell.classList.add('destroyed');
    }

    cell.textContent = coordinate;
    container.appendChild(cell);
  }
}

gameLoop(drawGameBoard);
