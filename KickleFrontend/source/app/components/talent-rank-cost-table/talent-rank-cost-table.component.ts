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
			this.costTable[i][i] = i + 1;
		}
		
		for(var i: number = 1; i <= 4; i++)
		{
					
			//for(
		}
		
		let cost = this.rulesService.getRankCostForCircle(15,15);
		console.log("cost:" + cost);
	}

}