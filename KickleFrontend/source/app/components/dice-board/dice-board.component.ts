import { Component, OnDestroy, Input  } from '@angular/core';
import {Subscription  } from 'rxjs/Rx';
import {DiceRollService} from '../../service/dice-roll.service';
import { DiceRoll} from '../../shared/diceRoll';

@Component({
  selector: 'dice-board',
  template: `		
	<span *ngIf="diceRoll">{{diceRoll.Name}} ({{diceRoll.Dice}}): {{diceRoll.Result}} <span><br/>	
	
	<span *ngIf="displayHistory">
		<h1>History</h1>
		<ul>
		  <li *ngFor="let dr of diceRolls">
			{{dr.Name}} ({{dr.Dice}}): {{dr.Result}}
		  </li>
		</ul>		
		
	</span>
	
    `
})
export class DiceBoardComponent { 

	@Input() displayHistory: boolean;

	subscription: Subscription;
	private diceRoll : DiceRoll;
	public diceRolls : DiceRoll[];
	
		
	constructor(private diceRollService : DiceRollService){
	
		this.diceRolls = [];
		this.subscription = this.diceRollService.getDiceRoll().subscribe(diceRoll => this.actOnDiceRoll(diceRoll));		
	
	}
	
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }	
	
	actOnDiceRoll(diceRoll: DiceRoll)
	{
		console.log( diceRoll.Name + ' array length:' + this.diceRolls.length);
		this.diceRoll = diceRoll;
		this.diceRolls.push(new DiceRoll(diceRoll.Name, diceRoll.Step, diceRoll.Dice, diceRoll.Result)); 
		
	}
	
}