import { Component } from '@angular/core';
import { Action } from '../../../shared/combat/action'


import {AttributeService} from '../../../service/attribute.service';
import {StepsService} from '../../../service/steps.service';
import {Attribute} from '../../../shared/attribute';
import {DiceDirective} from '../../../directives/dice/dice.directive';


@Component({
  selector: 'combat-main',
  templateUrl: 'app/components/combat/combat-main/combat-main.html'
})
export class CombatMainComponent { 

	IniActionList : Action[] = [];

	constructor(private attributeService: AttributeService, private stepsService: StepsService) { }
	
	ngOnInit(){
		console.log('initialzing combat...');

		this.IniActionList.push(new Action(1,"Geschicklichkeit",null));
		this.IniActionList.push(new Action(2,"Lufttanz",null));
		this.IniActionList.push(new Action(3,"Lufttanz + Tigersprung",null));

		
		debugger;
		console.log( this.IniActionList.filter(x => x.Id == 1)[0].Name);


	}

	beginCombat(event){
		console.log('Let the battle begin!');
		console.log(event);
	}


}