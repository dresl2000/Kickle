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
		  <li *ngFor="let dr of diceRolls | async">
			{{dr.Name}}: {{dr.Result}}
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
	
	ngOnInit(){
		this.diceRolls = [];
		
	}
	
	constructor(private diceRollService : DiceRollService){
	
		this.subscription = this.diceRollService.getDiceRoll().subscribe(diceRoll => { console.log( diceRoll.Name);this.diceRolls.push(this.diceRoll); this.diceRoll = diceRoll; });
	
	}
	
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }	
	
	
}