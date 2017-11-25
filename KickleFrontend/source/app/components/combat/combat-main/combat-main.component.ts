import { Component } from '@angular/core';
import { Action } from '../../../shared/combat/action'
import {StepsService} from '../../../service/steps.service';
import { SimpleAction } from '../../../shared/combat/simpleAction';


@Component({
  selector: 'combat-main',
  templateUrl: 'app/components/combat/combat-main/combat-main.html'
})
export class CombatMainComponent { 

	IniActionList : Action[] = [];
	selectedIniAction : Action;

	constructor(private stepsService: StepsService) { }
	
	ngOnInit(){
		console.log('initialzing combat...');

		var sa1 = new SimpleAction(1,"Geschicklichkeit",6,"w10");
		var sa2 = new SimpleAction(1,"Lufttanz",14,"w20 w4");
		var sa3 = new SimpleAction(1,"Lufttanz + Tigersprung",18,"w20 w10");

		this.IniActionList.push(new Action(sa1));
		this.IniActionList.push(new Action(sa2));
		this.IniActionList.push(new Action(sa3));
	
		//console.log( this.IniActionList.filter(x => x.Id == 1)[0].Name);


	}

	beginCombat(event){
		console.log('Let the battle begin!');
		console.log(event);
	}

	rollIni(){
		console.log('rollin Ini: ' +  this.selectedIniAction.Name);
	}

}