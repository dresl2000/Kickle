import { Injectable } from '@angular/core';
import {CHARDATA} from '../data/character-data';
import {CHARLOG} from '../data/character-log';

@Injectable()
export class CharacterDataService {
	
	getCharacterData() : any {					
		return CHARDATA;
	}	

	getNotes() : any {					
		return CHARLOG.Notes;
	}

	getAdventureLog() : any {					
		return CHARLOG.adventureLog;
	}			
}

			

