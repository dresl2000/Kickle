import { Component } from '@angular/core';
import {RulesService} from '../../service/rules.service';




@Component({
  selector: 'talent-rank-cost-table',
  templateUrl: 'app/components/talent-rank-cost-table/talent-rank-cost-table.html'
})
export class TalentRankCostTableComponent { 

	public costTable : number[][];
	
	constructor(private rulesService: RulesService) { }
	
	ngOnInit(){
		this.costTable = [];
						
		for(var i: number = 0;i <= 14; i++)
		{
			this.costTable[i] = [];	
			this.costTable[i][0] = i + 1;
			
			for(var j: number = 1; j <= 4; j++)
			{					
				this.costTable[i][j] = this.rulesService.getRankCostForCircle(i + 1, j * 4);
			}			
			
		}

	}

}