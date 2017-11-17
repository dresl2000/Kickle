import { Injectable } from '@angular/core';
import { CharacteristicService } from './characteristic.service'
import { CharacterDataService } from './character-data.service'
import { StepsService } from './steps.service'
import { Attribute } from '../shared/attribute'

@Injectable()
export class AttributeService {
	
	private attributes : Attribute[];
	
	constructor(characteristicService : CharacteristicService , characterDataService : CharacterDataService, stepsService: StepsService){
		
		console.log('initializing attributesService');
		
		this.attributes = new Array() as Array<Attribute>;			
		
		var attributesRaw = characterDataService.getAttributes();
		
		for (let raw of attributesRaw) 
		{
			let step : number = characteristicService.getCharacteristics(raw.Value).Step;
			let increasedStr : string = this.getIncreased(raw.Increased);
			let diceStr : string = stepsService.getDice(step);
			this.attributes.push(new Attribute(raw.Type, raw.Increased, raw.Value, step, increasedStr, diceStr));
		}				
	}
									
	public getAttribute(type: string): Attribute {					
		return this.attributes.find(x => x.Type == type);
	}
	
    private getIncreased = function(incr: number) {

        let returnValue = '';
        
        for(let i = 0; i < incr;i++)
        {
            returnValue += 'I';
        }
        
        return returnValue;			
    };        	

}