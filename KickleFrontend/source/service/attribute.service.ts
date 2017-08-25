import { Injectable } from '@angular/core';
import { CharacteristicService } from './characteristic.service'
import { CharacterDataService } from './character-data.service'
import { Attribute } from '../shared/attribute'

@Injectable()
export class AttributeService {
	
	private attributes : Attribute[];
	
	constructor(characteristicService : CharacteristicService , characterDataService : CharacterDataService){
		
		console.log('initializing attributesService');
		
		this.attributes = new Array() as Array<Attribute>;			
		
		var attributesRaw = characterDataService.getAttributes();
		
		for (let raw of attributesRaw) 
		{
			let step : number = characteristicService.getCharacteristics(raw.Value).Step;
			this.attributes.push(new Attribute(raw.Type, raw.Increased, raw.Value, step));
		}				
	}
									
	public getAttribute(type: string): Attribute {					
		return this.attributes.find(x => x.Type == type);
	}		
}