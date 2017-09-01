import { Component, OnDestroy  } from '@angular/core';
import {Subscription  } from 'rxjs/Rx';
import {DiceRollService} from '../../service/dice-roll.service';


@Component({
  selector: 'dice-board',
  template: `<span>Dice Board</span>		
     <ul>
      <li *ngFor="let item of items | async">

      </li>
    </ul>`
})
export class DiceBoardComponent { 

	subscription: Subscription;
	
	constructor(private diceRollService : DiceRollService){
	
		this.subscription = this.diceRollService.getDiceRoll().subscribe(message => { console.log( message); });
	
	}
	
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }	
	
	public items;
}