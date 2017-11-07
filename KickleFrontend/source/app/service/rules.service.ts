import { Injectable } from '@angular/core';


@Injectable()
export class RulesService {
	
	
	public getRankCostForCircle(rank: number, circle: number): number {	

		if(circle <= 4)
			return this.getRankCost(rank);
		else if(circle <= 8)
			return this.getRankCost(rank + 1);
		else if(circle <= 12)
			return this.getRankCost(rank + 2);		
		else 
			return this.getRankCost(rank + 3);				
	}		
	
	public getAttributeCost(rank: number) : number {		
		return this.getRankCost(rank + 4);
	}
	
	private getRankCost(rank: number) : number {
	
		if(rank == 1)
			return 100;
		
		if(rank == 2)
			return this.getRankCost(rank - 1) + this.getRankCost(rank -1);
	
		return this.getRankCost(rank - 1) + this.getRankCost(rank - 2);		
	}
	
	
}