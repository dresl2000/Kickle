import { Component } from '@angular/core';
import {RulesService} from '../../service/rules.service';




@Component({
  selector: 'attribute-rank-cost-table',
  templateUrl: 'app/components/attribute-rank-cost-table/attribute-rank-cost-table.html'
})
export class AttributeRankCostTableComponent { 

	public costTable : number[][];
	
	constructor(private rulesService: RulesService) { }
	
	ngOnInit(){
		this.costTable = [];
						
		for(var i: number = 0;i <= 4; i++)
		{
			this.costTable[i] = [];	
			this.costTable[i][0] = i + 1;
			
			this.costTable[i][1] = this.rulesService.getAttributeCost(i + 1);
						
		}

	}

}