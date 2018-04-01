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
	/*
	$scope.getTotalLegendPoints = function() {
		
		return characterDataService.getCharacterData().Characters[0].LegendPoints.Total;		
	};
	
	$scope.getCurrentLegendPoints = function() {
		
		return characterDataService.getCharacterData().Characters[0].LegendPoints.Current;		
	};	
	
	$scope.getLegendStatus = function() {
		
		return characterDataService.getCharacterData().Characters[0].LegendPoints.Status;		
	};	
*/
	public getWallet() : any{
		return CHARDATA.Characters[0].Wallet;
	};
	
	
	public getLanguages() : any{
		return CHARDATA.Characters[0].Languages;
	};	
	

}

			

