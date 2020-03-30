
	//	Tile  
	//	represents a tile
	class Tile {
		
		constructor(tileID, row, col){
			
			this.tileID = tileID;
			
			//	The positions that this tile is on 
			this.row = row;
			this.col = col;
			
			//	The side that the tile is on 
			//	0 = neutral
			//	1 = nought 
			//	2 = cross 
			this.side = 0;			
			
		}
		
		//	Changes a side.
		ChangeSide(side){
			
			if(this.side == 0){
				this.side = side;
			}
			
		}
		
	}