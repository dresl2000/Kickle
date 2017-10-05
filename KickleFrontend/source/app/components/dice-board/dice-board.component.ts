import { Component, OnDestroy, Input  } from '@angular/core';
import {Subscription  } from 'rxjs/Rx';
import {DiceRollService} from '../../service/dice-roll.service';
import { DiceRoll} from '../../shared/diceRoll';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'dice-board',
  template: `		
	<span *ngIf="diceRoll">{{diceRoll.Name}} ({{diceRoll.Dice}}): {{diceRoll.Result}} <span><br/>	
	
	<span *ngIf="displayHistory">
		<h1>History</h1>
		<ul>
		  <li *ngFor="let dr of diceRolls">
			[{{dr.TimeStamp |  date:'hh:mm:ss'}}] {{dr.Name}} ({{dr.Dice}}): {{dr.Result}} 
		  </li>
		</ul>		
		
	</span>
	
    `,
	styles: ['ul, li {list-style-type: none;}']
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
		this.diceRolls.push(new DiceRoll(diceRoll.Name, diceRoll.Step, diceRoll.Dice, diceRoll.Result, new Date())); 
		this.diceRolls.sort((n1,n2) => 
			{
			
				if (n1.TimeStamp.getTime() < n2.TimeStamp.getTime()) {
					return 1;
				}

				if (n1.TimeStamp.getTime() > n2.TimeStamp.getTime()) {
					return -1;
				}

				return 0;
			});
			
	}
	
}