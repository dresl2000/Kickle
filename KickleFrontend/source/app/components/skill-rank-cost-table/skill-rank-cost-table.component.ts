import { Component } from '@angular/core';
import {RulesService} from '../../service/rules.service';




@Component({
  selector: 'skill-rank-cost-table',
  templateUrl: 'app/components/skill-rank-cost-table/skill-rank-cost-table.html'
})
export class SkillRankCostTableComponent { 

	public costTable : number[][];
	
	constructor(private rulesService: RulesService) { }
	
	ngOnInit(){
		this.costTable = [];
						
		for(var i: number = 0;i <= 9; i++)
		{
			this.costTable[i] = [];	
			this.costTable[i][0] = i + 1;
			
			this.costTable[i][1] = this.rulesService.getSkillCost(i + 1);
						
		}

	}

}