import { Injectable } from '@angular/core';
import {STEPSDATA} from '../data/steps-data';

@Injectable()
export class StepsService {
	
	private steps : Step[];
	
	getDice(step: number): string{
		return this.steps[step-1].toString();
	};
	 
	rollStep(step: number): number{
		return this.steps[step-1].roll();
	};
	
	getAllSteps() : Step[]{
		return this.steps;
	};
	
	constructor() {
		console.log('initializing stepsService');
		
		this.steps = new Array() as Array<Step>;
								
		for (let rawStep of STEPSDATA) {
			this.steps.push(new Step(rawStep));
		}									
	};		
}


class Step {
	public stepNumber: number;
	
	private dice : Die[];
	
	constructor(input: string){
								
		var inputArray = input.split(' ');			
		this.stepNumber = Number(inputArray.splice(0,1));			
		this.dice = new Array() as Array<Die>;
		
		for (let diceString of inputArray) {			
			let splitStr = diceString.split('w');
			let diceNumber :number = splitStr[0].length > 0 ? Number(splitStr[0]) : 1
			
			let dieType : number = Number(splitStr[1].split('-')[0]);
			let modifier :number = splitStr[1].split('-').length == 1 ? 0 : - splitStr[1].split('-')[1];
			
			this.dice.push(new Die(diceNumber,dieType, modifier));
		}
					
	};		
	
	toString() : string{
		
		let str :string = ''; 
		
		for (let die of this.dice) {
			
			if(str.length > 0){
				str += ' ' + die.toString();				
			}
			else{
				str = die.toString(); 	
			}				
		}
		
		return str;
	};
	
	roll(): number {
		let result : number = 0; 
		
		for (let die of this.dice) {								
			result += die.roll(); 							
		}
		
		return result;
	};
}	

class Die {
	
	public amount: number;
	public type: number;
	public modifier : number;
			
	constructor(dieAmount: number, dieType: number, modifier: number = 0 ){
		this.amount = dieAmount;
		this.type = dieType;
		this.modifier = modifier;
	};
	
	toString() : string{
		return (this.amount > 1 ? this.amount : '') + 'w' + this.type + (this.modifier != 0 ?  this.modifier : '');
	};
	
	roll(): number{
		let result : number = 0; 
		
		
		for (let i : number = 1;i <= this.amount;i++) {								
			let rolled = (Math.floor(Math.random() * this.type) + 1) + this.modifier;
			console.log(this.type + 'd rolled:'+ rolled);
			result += rolled;
			if(rolled == this.type)
			{
				console.log('Bonus roll!');	
				i--;
			}
		}
		
		return result;
	};
}