import { Injectable } from '@angular/core';
import {CHARDATA} from '../data/character-data';
import {CHARLOG} from '../data/character-log';

@Injectable()
export class CharacterDataService {
	
	public getCharacterData() : any {					
		return CHARDATA;
	}	

	public getAttributes() : any {					
		return CHARDATA.Characters[0].Attributes;
	}	

	public getTalents() : any {					
		return CHARDATA.Characters[0].Talents;
	}
	
	public getNotes() : any {					
		return CHARLOG.Notes;
	}

	public getAdventureLog() : any {					
		return CHARLOG.adventureLog;
	}			
}

			

