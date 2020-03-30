
# javascript-oop-tictactoe-game-app
A tic-tac-toe game made in OOP JavaScript.

===========================================

This game is mainly made for mobile devices. 

The goal of this project was to create a tictactoe game made in OOP JavaScript, leaving some separation between the game logic and HTML.

Contains: 

index.html        = the HTML file.
style.css         = the CSS file.
init.js           = sets up the game.
board.js          = represents the game's board.
tile.js           = represents a tile on the board.
gamestate.js      = represents the state of a game.
tilelogic.js      = contains the logic behind the click of a tile. 
turncontroller.js = keeps a track of what turn it currently is.
victorycheck.js   = determines if there has been a win or not.

The game works like this:

1. User clicks on "START GAME"
2. The GameState is turned true.
3. User clicks on a tile.
4. TileLogic gets instance of Tile from board.
5. TileLogic gets current turn from TurnController and changes the side of the Tile, then updates it in the Board array.
6. TileLogic then uses VictoryCheck to check all tiles in Board array for current side. If it counts 3, then it is win.
