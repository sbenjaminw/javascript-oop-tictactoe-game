
	//	Gamme state 
	//	Starts a game or ends a game 
	class GameState {
		
		constructor(){
		
			this.GameIsOn = false;
			
			
		}
		
		StartState(){
		
			if(this.GameIsOn == false){
				
				this.GameIsOn = true;
				
				let tds = document.getElementsByTagName("td");
				
				for(let a =0; a < tds.length; a++){
					
					tds[a].childNodes[0].classList = "";
					tds[a].childNodes[0].classList.add("neutralTile");
					
				}
			
			}
		
		}
		
		EndState(){
			
			if(this.GameIsOn == true){
				
				this.GameIsOn = false;
				
			}
			
		}
		
	
	}