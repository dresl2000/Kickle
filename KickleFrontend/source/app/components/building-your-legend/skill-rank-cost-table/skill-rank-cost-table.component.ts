import { Component } from '@angular/core';
import {BuildingYourLegendService} from '../../../service/building-your-legend.service';




@Component({
  selector: 'skill-rank-cost-table',
  templateUrl: 'app/components/building-your-legend/skill-rank-cost-table/skill-rank-cost-table.html'
})
export class SkillRankCostTableComponent { 

	public costTable : number[][];
	
	constructor(private buildingYourLegendService: BuildingYourLegendService) { }
	
	ngOnInit(){
		this.costTable = [];
						
		for(var i: number = 0;i <= 9; i++)
		{
			this.costTable[i] = [];	
			this.costTable[i][0] = i + 1;
			
			this.costTable[i][1] = this.buildingYourLegendService.getSkillCost(i + 1);
						
		}

	}

}