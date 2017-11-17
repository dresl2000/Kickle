import { Component } from '@angular/core';
import {BuildingYourLegendService} from '../../../service/building-your-legend.service';
import { CircleAdvancement } from '../../../shared/circleAdvancement'



@Component({
  selector: 'circle-advancement-table',
  templateUrl: 'app/components/building-your-legend/circle-advancement-table/circle-advancement-table.html'
})
export class CircleAdvancementTableComponent { 

	public advancementTable : CircleAdvancement[];
	
	constructor(private buildingYourLegendService: BuildingYourLegendService) { }
	
	ngOnInit(){
		this.advancementTable = [];
															
		for(var i: number = 0;i <= 13; i++)
		{		
			this.advancementTable[i] = this.buildingYourLegendService.getCircleAdvancement(i + 2);						
		}

	}

}