import { Component } from '@angular/core';
import {BuildingYourLegendService} from '../../../service/building-your-legend.service';




@Component({
  selector: 'attribute-rank-cost-table',
  templateUrl: 'app/components/building-your-legend/attribute-rank-cost-table/attribute-rank-cost-table.html'
})
export class AttributeRankCostTableComponent { 

	public costTable : number[][];
	
	constructor(private buildingYourLegendService: BuildingYourLegendService) { }
	
	ngOnInit(){
		this.costTable = [];
						
		for(var i: number = 0;i <= 4; i++)
		{
			this.costTable[i] = [];	
			this.costTable[i][0] = i + 1;
			
			this.costTable[i][1] = this.buildingYourLegendService.getAttributeCost(i + 1);
						
		}

	}

}