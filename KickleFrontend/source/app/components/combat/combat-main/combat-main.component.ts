import { Component, ElementRef } from '@angular/core';
import { Action } from '../../../shared/combat/action'
import {StepsService} from '../../../service/steps.service';
import { SimpleAction } from '../../../shared/combat/simpleAction';
import { Combat } from '../../../shared/combat/combat';
import {DiceRollService} from '../../../service/dice-roll.service';
import {DiceRoll} from '../../../shared/diceRoll';

@Component({
  selector: 'combat-main',
  templateUrl: 'app/components/combat/combat-main/combat-main.html'
})
export class CombatMainComponent { 

	IniActionList : Action[] = [];
	selectedIniAction : Action;

	IniRoll : DiceRoll;

	AttackActionList : Action[] = [];
	selectedAttackAction : Action;

	DamageActionList : Action[] = [];
	selectedDamageAction : Action;

	damage : number;
	damageInput : number;	
	combat : Combat;

	constructor(private el: ElementRef, private stepsService: StepsService, private diceRollService : DiceRollService ) { 

	}
	
	ngOnInit(){
		console.log('initialzing combat...');

		this.combat = new Combat();

		this.damage = 11;

		var saIni1 = new SimpleAction(1,"Geschicklichkeit",5,"w8");
		this.IniActionList.push(new Action(saIni1));
		this.selectedIniAction = this.IniActionList[0];

		var saAttack1 = new SimpleAction(1,"Spruchzauberei",15,"w20 w6");
		this.AttackActionList.push(new Action(saAttack1));

		var saAttack2 = new SimpleAction(1,"Fadenweben",15,"w20 w6");
		this.AttackActionList.push(new Action(saAttack2));

		this.selectedAttackAction = this.AttackActionList[0];		

		//console.log( this.IniActionList.filter(x => x.Id == 1)[0].Name);
	}

	beginCombat(){
		console.log('Combat begins');
		this.combat = new Combat();
		
	}

	endCombat(){
		console.log('Combat ended!');
		this.combat.end();
	}

	rollIni(){

		if(!this.selectedIniAction){
			return;
		}

		if(isNaN(this.selectedIniAction.Step))
		{
			return;
		}

		if(this.combat.HasEnded){
			this.beginCombat();
		}
		
		console.log(`rolling ini: ${this.selectedIniAction.Name}`);		
		this.IniRoll = new DiceRoll("Initiative",this.selectedIniAction.Step,this.selectedIniAction.Dice, this.stepsService.rollStep(this.selectedIniAction.Step), new Date() );

		this.diceRollService.sendDiceRoll(this.IniRoll);

		this.combat.nextRound();
	}

	rollAttack(){
		console.log(`rolling attack: ${this.selectedAttackAction.Name}`);		
	}


	takeDamage(){
		this.modifyDamage(function(a,b){return a + b;});
	}

	reduceDamage(){
		this.modifyDamage(function(a,b){return a - b;});
	}

	modifyDamage(calc){

		if(!this.damageInput || isNaN(this.damageInput))
		{
			this.damageInput = null;
			return;
		}

		let currentDamage : number = parseInt(this.damage.toString().trim());		
		let input : number = parseInt(this.damageInput.toString().trim());		

		this.damageInput = null;

		this.damage = calc(currentDamage, input);
	}

}