export default function gameLoop(drawGameBoard) {
  // Check if the game is over
  if (player.gameboard.allShipsSunk()) {
    console.log("Computer wins!");
    return;
  } else if (computer.gameboard.allShipsSunk()) {
    console.log("Player wins!");
    return;
  }

  // Player's turn
  let validCoordinate = false;
  while (!validCoordinate) {
    const playerCoordinate = prompt("Enter your attack coordinates (e.g., A5):");
    if (computer.gameboard.isValidCoordinate(playerCoordinate)) {
      player.attackOpponent(playerCoordinate, computer.gameboard);
      validCoordinate = true;
    } else {
      console.log("Invalid coordinate. Please try again.");
    }
  }

  // Computer's turn
  computer.attackOpponent(player.gameboard);

  // Redraw the game boards
  drawGameBoard(player.gameboard, document.getElementById('player-board'));
  drawGameBoard(computer.gameboard, document.getElementById('computer-board'));

  // Recursively call the game loop
  requestAnimationFrame(() => gameLoop(drawGameBoard));
}