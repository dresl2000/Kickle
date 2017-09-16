import { Injectable } from '@angular/core';
import {STEPSDATA} from '../data/steps-data';
import {Step} from '../shared/step';


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