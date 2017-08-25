import { Injectable } from '@angular/core';
import { CharacterDataService } from './character-data.service'
import { Talent } from '../shared/talent'
import {AttributeService} from './attribute.service'
import {StepsService} from './steps.service'


@Injectable()
export class TalentService {
	
	constructor(private characterDataService: CharacterDataService, private attributeService: AttributeService, private stepsService: StepsService) { }
	
	public getTalents() : Talent[] {
				
		let talents : Talent[] = new Array() as Array<Talent>;	
				
		let talentsRaw = this.characterDataService.getTalents();
		
		for (let r of talentsRaw) {
			
			if(r.Attribute == '-'){
				talents.push(new Talent(r.Id, r.Name, r.Rank, r.Circle));	
				continue;
			}
			
			let attr = this.attributeService.getAttribute(r.Attribute);			
			let dice = this.stepsService.getDice(attr.Step + r.Rank);
						
			talents.push(new Talent(r.Id, r.Name, r.Rank, r.Circle, r.Attribute, attr.Step, dice ));
		}		
		
		return talents;
	}
	
}