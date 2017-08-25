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
		
		for (let raw of talentsRaw) {
			let t : Talent = new Talent();
								
			t.Id = raw.Id;
			t.Name = raw.Name;
			t.Rank = raw.Rank;
			t.Attribute = raw.Attribute;
			
			if(t.Attribute == '-'){
				talents.push(t);	
				continue;
			}
			
			let attr = this.attributeService.getAttribute(raw.Attribute);			
			t.AttributeStep = attr.Step;
			t.Dice = this.stepsService.getDice(t.AttributeStep + t.Rank);
						
			talents.push(t);
		}		
		
		return talents;
	}
	
}