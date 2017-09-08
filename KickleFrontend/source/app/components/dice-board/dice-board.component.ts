import { Component, OnDestroy  } from '@angular/core';
import {Subscription  } from 'rxjs/Rx';
import {DiceRollService} from '../../service/dice-roll.service';
import { DiceRoll} from '../../shared/diceRoll';

@Component({
  selector: 'dice-board',
  template: `		
	<span *ngIf="diceRoll">{{diceRoll.Name}} ({{diceRoll.Dice}}): {{diceRoll.Result}} <span><br/>	
     <ul>
      <li *ngFor="let dr of diceRolls | async">
		{{dr.Name}}: {{dr.Result}}
      </li>
    </ul>`
})
export class DiceBoardComponent { 

	subscription: Subscription;
	private diceRoll : DiceRoll;
	
	constructor(private diceRollService : DiceRollService){
	
		this.subscription = this.diceRollService.getDiceRoll().subscribe(diceRoll => { console.log( diceRoll.Name);this.diceRoll = diceRoll; });
	
	}
	//this.diceRollService.sendDiceRoll(`rolling ${this.name} (${this.stepsService.getDice(this.step)}) ->  ${this.stepsService.rollStep(this.step)}`);
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }	
	
	public diceRolls : DiceRoll[];
}