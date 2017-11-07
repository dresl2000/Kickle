import { Injectable } from '@angular/core';


@Injectable()
export class RulesService {
	
	
	public getRankCostForCircle(rank: number, circle: number): number {	

		if(circle <= 4)
			return this.getCost(rank);
		else if(circle <= 8)
			return this.getCost(rank + 1);
		else if(circle <= 12)
			return this.getCost(rank + 2);		
		else 
			return this.getCost(rank + 3);				
	}		
	
	public getAttributeCost(rank: number) : number {		
		return this.getCost(rank + 4);
	}

	public getSkillCost(rank: number) : number {		
		
		if(rank >= 7)	
			return this.getCost(rank + 3);
		else if(rank >= 4)
			return this.getCost(rank + 2);
		else
			return this.getCost(rank + 1);
	}
	
	private getCost(rank: number) : number {
	
		if(rank == 1)
			return 100;
		
		if(rank == 2)
			return this.getCost(rank - 1) + this.getCost(rank -1);
	
		return this.getCost(rank - 1) + this.getCost(rank - 2);		
	}
	
	
}