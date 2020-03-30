
	//	Victory check 
	//	Determines victory for a side.
	class VictoryCheck {
	
		CheckForVictory(board, side){
			
			this.CheckTiles(board.GetTilesByColumn(1), side, board);
			this.CheckTiles(board.GetTilesByColumn(2), side, board);
			this.CheckTiles(board.GetTilesByColumn(3), side, board);
			
			this.CheckTiles(board.GetTilesByRow(1), side, board);
			this.CheckTiles(board.GetTilesByRow(2), side, board);
			this.CheckTiles(board.GetTilesByRow(3), side, board);
			
			this.CheckTiles(board.GetTilesNWSE(), side, board);
			this.CheckTiles(board.GetTilesNESW(), side, board);
			

		
		}
		
		CheckTiles(tiles, side, board){
			
			let isOnSameSideCounter = 0;
			
			for(let a = 0; a < tiles.length; a++){
				
				if(tiles[a].side == side){
					
					isOnSameSideCounter++;
					
				}
				
			}
			
			if(isOnSameSideCounter == 3){
				
				window.alert(side + " wins!");
				
				//	End the game.
				board.GameState.EndState();
			}
			
		}
	
	}