import { Injectable } from '@angular/core';
import {CHARDATA} from '../data/character-data';
import {CHARLOG} from '../data/character-log';
import { LegendPointService } from './legend-point.service'
import { LegendPoints } from '../shared/legendPoints';

@Injectable()
export class CharacterDataService {
	
	
    constructor(private legendPointService : LegendPointService){
			
	}

	public getCharacterData() : any {					
		return CHARDATA;
	}	

	public getAttributes() : any {							
		return CHARDATA.Characters[0].Attributes;
	}	

	public getTalents() : any {					
		return CHARDATA.Characters[0].Talents;
	}

	public getSkills() : any {					
		return CHARDATA.Characters[0].Skills;
	}	
	
	public getKarma() : any {					
		return CHARDATA.Characters[0].Karma;
	}
	
	public getNotes() : any {					
		return CHARLOG.Notes;
	}

	public getAdventureLog() : any {					
		return CHARLOG.adventureLog;
	}
	
	public getEquipment() : any{
		return CHARDATA.Characters[0].Equipment;
	};
	
	public getLegendPoints() : LegendPoints {		
		return this.legendPointService.getLegendPoints(CHARDATA.Characters[0],CHARLOG.adventureLog);		
	};
	
	
	public getWallet() : any{
		return CHARDATA.Characters[0].Wallet;
	};
	
	
	public getLanguages() : any{
		return CHARDATA.Characters[0].Languages;
	};	
	

}

			

