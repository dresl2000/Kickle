import { Injectable } from '@angular/core';
import { CharacterDataService } from './character-data.service'
import { Talent } from '../shared/talent'

@Injectable()
export class TalentService {
	
	constructor(private characterDataService: CharacterDataService) { }
	
	public getTalents() : Talent[] {
				
		let talents : Talent[] = new Array() as Array<Talent>;	
				
		let talentsRaw = this.characterDataService.getTalents();
		
		for (let raw of talentsRaw) {
			let t : Talent = new Talent();
			
			t.Id = raw.Id;
			t.Name = raw.Name;
			t.Rank = raw.Rank;
			t.Attribute = raw.Attribute;
			
			talents.push(t);
		}		
		
		return talents;
	}
	
}