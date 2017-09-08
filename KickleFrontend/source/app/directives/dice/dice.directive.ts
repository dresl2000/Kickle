import { Input, Directive, HostListener, ElementRef, Output, EventEmitter} from '@angular/core';
import {StepsService} from '../../service/steps.service';
import {DiceRollService} from '../../service/dice-roll.service';
import {DiceRoll} from '../../shared/diceRoll';

import 'rxjs/Rx';

@Directive({
    selector: '[dice]'
})
export class DiceDirective { 
	
	@Input('step') step: number;
	@Input('name') name: string;
		
	constructor(private el: ElementRef, private stepsService: StepsService, private diceRollService : DiceRollService ) { 		
	}
	
	@HostListener('click') onClick() {
		this.highlight('yellow');
		
		if(isNaN(this.step))
		{
			return;
		}
		console.log(`rolling ${this.name} (${this.stepsService.getDice(this.step)}) ->  ${this.stepsService.rollStep(this.step)}`);		
		this.diceRollService.sendDiceRoll(new DiceRoll(this.name,this.step,this.stepsService.getDice(this.step), this.stepsService.rollStep(this.step) ));
	}

	@HostListener('mouseenter') onMouseEnter() {
		this.highlight('#990000');
	}
 
	@HostListener('mouseleave') onMouseLeave() {
		this.highlight(null);
	}
 
	private highlight(color: string) {
		this.el.nativeElement.style.backgroundColor  = color;
	}
	
}