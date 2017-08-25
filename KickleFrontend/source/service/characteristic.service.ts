import { Injectable } from '@angular/core';
import { CharacterDataService } from './character-data.service'
import { Characteristic } from '../shared/characteristic'
import {RULESDATA} from '../data/rules-data';

@Injectable()
export class CharacteristicService {
	
	private characteristicsTable : Characteristic[];
	
	constructor(){
		
		console.log('initializing characteristicService');
		
		this.characteristicsTable = new Array() as Array<Characteristic>;
				
		let rawData = RULESDATA.Characteristics;
		
		for (let raw of rawData) {
			this.characteristicsTable.push(Object.assign( new Characteristic(),raw));
		}
	}
	
	public getCharacteristicsTable() : Characteristic[] {
		return this.characteristicsTable;
	}
	
	public getCharacteristics(value: number) : Characteristic{
		return this.characteristicsTable.find(x => x.AttributeValue === value);
	};	
		
}

 
