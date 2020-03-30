
	//	The logic for tile click 
	class TileLogic {
		
		//	Adds the click event to cells 
		AddCellLogic(board, turnController){
			
			let tds = document.getElementsByTagName("td");
			
			//	The context of self, for the closure
			let cntxt = this;
			
			//	Loops through the tds an then adds a click method to it 
			for(let a = 0; a < tds.length; a++){
				
				(function(){
					
					tds[a].addEventListener("click", function(){
						
						let row = this.getAttribute("data-row");
						let col = this.getAttribute("data-col");
						
						let victoryCheck = new VictoryCheck();
						
						let tile = board.FindTileByCoords(
							row,
							col
						);
						
						//	Only do the rest if tile side is 0 and if game state is on
						if(tile.side == 0 && board.GameState.GameIsOn == true){
							
							tile.ChangeSide(turnController.currentTurn);
							
							board.UpdateTile(tile);
							
							if(turnController.currentTurn == turnController.player1){
								
								document.getElementById(this.id).childNodes[0].classList = "";
								document.getElementById(this.id).childNodes[0].classList.add("blueCounter");
							
							} 
							
							if(turnController.currentTurn == turnController.player2){
								
								document.getElementById(this.id).childNodes[0].classList = "";
								document.getElementById(this.id).childNodes[0].classList.add("redCounter");
							
							}
							
							victoryCheck.CheckForVictory(board, turnController.currentTurn);
							turnController.ChangeTurn();
							
						}
						
					});
					
				})();
				
			}
			
		}
		
	}