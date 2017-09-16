import {Die} from '../shared/die';

export class Step {
	
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