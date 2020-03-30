
	//	Turn controller 
	//	Controls what side is currently in play 
	class TurnController {
		
		constructor(){
			
			this.player1 = 1;
			this.player2 = 2;
			
			//	0 = neutral
			//	1 = player 1
			//	2 = player 2
			this.currentTurn = 0;
			
		}
		
		
		//	Make a random first turn 
		FirstTurn(){
			
			let rng = Math.floor(Math.random() * 100);
			
			if(rng > 50){
			
				this.currentTurn = this.player1;
				
				document.getElementById("sideIndicator").innerHTML = "CURRENT TURN: PLAYER 1";
				
				document.getElementById("sideIndicator").classList = "";
				document.getElementById("sideIndicator").classList.add("blueCounter");
				
			} else {
			
				this.currentTurn = this.player2;
				document.getElementById("sideIndicator").innerHTML = "CURRENT TURN: PLAYER 2";
				
				document.getElementById("sideIndicator").classList = "";
				document.getElementById("sideIndicator").classList.add("redCounter");
				
			}
			
		}
		
		//	Change the turn 
		ChangeTurn(){
		
			if(this.currentTurn == this.player1){
			
				this.currentTurn = this.player2;
				document.getElementById("sideIndicator").innerHTML = "CURRENT TURN: PLAYER 2";
			
				document.getElementById("sideIndicator").classList = "";
				document.getElementById("sideIndicator").classList.add("redCounter");
			
			} else {
			
				this.currentTurn = this.player1;
				document.getElementById("sideIndicator").innerHTML = "CURRENT TURN: PLAYER 1";
			
				document.getElementById("sideIndicator").classList = "";
				document.getElementById("sideIndicator").classList.add("blueCounter");
			
			}
			
		}
		
	}