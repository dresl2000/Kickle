import { Component } from '@angular/core';
import {BuildingYourLegendService} from '../../../service/building-your-legend.service';




@Component({
  selector: 'talent-rank-cost-table',
  templateUrl: 'app/components/building-your-legend/talent-rank-cost-table/talent-rank-cost-table.html'
})
export class TalentRankCostTableComponent { 

	public costTable : number[][];
	
	constructor(private buildingYourLegendService: BuildingYourLegendService) { }
	
	ngOnInit(){
		this.costTable = [];
						
		for(var i: number = 0;i <= 14; i++)
		{
			this.costTable[i] = [];	
			this.costTable[i][0] = i + 1;
			
			for(var j: number = 1; j <= 4; j++)
			{					
				this.costTable[i][j] = this.buildingYourLegendService.getRankCostForCircle(i + 1, j * 4);
			}			
			
		}

	}

}