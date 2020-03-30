	
	//	Board js
	//	Represents a board
	class Board {
		
		constructor(){
			
			//	Top row 
			this.tiles = [
				new Tile("tileA1", 1, 1),
				new Tile("tileA2", 1, 2),
				new Tile("tileA3", 1, 3),
				new Tile("tileB1", 2, 1),
				new Tile("tileB2", 2, 2),
				new Tile("tileB3", 2, 3),
				new Tile("tileC1", 3, 1),
				new Tile("tileC2", 3, 2),
				new Tile("tileC3", 3, 3)
			];
			
			this.GameState = new GameState();
			this.GameState.StartState();
			
			let turnController = new TurnController();
			turnController.FirstTurn();
			
			let tileLogic = new TileLogic();
			tileLogic.AddCellLogic(this, turnController);
			
		}
		
		//	Finds a tile by ID
		FindTileById(tileID){
			
			let foundTile = null;
			
			for(let a = 0; a < this.tiles.length; a++){
				
				if(this.tiles[a].tileID == tileID){
					
					foundTile = this.tiles[a];
					break;
					
				}
				
			}
			
			return foundTile;
			
		}
		
		//	Find tile by cooordinates
		FindTileByCoords(row, col){
			
			let foundTile = null;
			
			for(let a = 0; a < this.tiles.length; a++){
				
				if(this.tiles[a].row == row && this.tiles[a].col == col){
					
					foundTile = this.tiles[a];
					break;
					
				}
				
			}
			
			return foundTile;
			
		}
		
		//	Gets all tiles by column number 
		GetTilesByColumn(col){
			
			let cols = [];
			
			for(let a = 0; a < this.tiles.length; a++){
				
				if(this.tiles[a].col == col){
					
					cols.push(this.tiles[a]);
					
				}
				
			}
			
			return cols;
			
		}
		
		//	Gets all the tiles by row number 
		GetTilesByRow(row){
			
			let rows = [];
			
			for(let a = 0; a < this.tiles.length; a++){
				
				if(this.tiles[a].row == row){
					
					rows.push(this.tiles[a]);
					
				}
				
			}
			
			return rows;
			
		}
		
		//	Gets all diagonal tiles north west to south east 
		GetTilesNWSE(){
			
			let nwse = [];
			
			let col = 1;
			
			//	row 
			for(let row = 1; row < 4; row++){
				
				col = row;

				let tile = this.FindTileByCoords(row, col);
				nwse.push(tile);
				
			}
			
			return nwse;
			
		}
		
		//	Gets all diagonal tiles north east to south west
		GetTilesNESW(){

			let nesw = [];
			
			let col = 4;
	
			for(let row = 1; row < 4; row++){
				
				col -= 1;
				
				let tile = this.FindTileByCoords(row, col);
				nesw.push(tile);
				
			}
			
			return nesw;
			
		}
		
		//	Update the tile 
		UpdateTile(tile){
			
			for(let a = 0; a < this.tiles.length; a++){
				
				if(tile.tileID == this.tiles[a].tileID){
					
					this.tiles[a] = tile;
					break;
					
				}
				
			}
			
		}
		
	}