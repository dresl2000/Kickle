import { Injectable } from '@angular/core';
import { CircleAdvancement } from '../shared/circleAdvancement'

@Injectable()
export class BuildingYourLegendService {
	
	
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
	
	public getCircleAdvancement(nextCircle: number) : CircleAdvancement{
		
		if(nextCircle < 2 || nextCircle > 15){
			throw new Error("Error: Invalid Circle");
		}
		
		let minNumberOfTalents: number  = nextCircle + 3;
		let minRank: number;
		let oneTalentFromPrevRank: number = nextCircle - 1;
		
		switch(true){
				case (nextCircle <= 11):
					minRank = nextCircle;	
					break;
				case (nextCircle == 12):
					minRank = 11;
					break;
				case (nextCircle == 13):
					minRank = 12;
					break;
				case (nextCircle == 14):
					minRank = 12;					
					break;
				case (nextCircle == 15):
					minRank = 13;			
					break;
		}
				
		return new CircleAdvancement(nextCircle,minNumberOfTalents, minRank, oneTalentFromPrevRank);
		
	}
	
	
	
}