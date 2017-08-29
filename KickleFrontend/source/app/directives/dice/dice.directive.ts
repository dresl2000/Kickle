import { Input, Directive, HostListener, ElementRef} from '@angular/core';
import {StepsService} from '../../service/steps.service';

@Directive({
    selector: '[dice]',
	stylesUrl: ['app/directives/dice/dice.directive.css']
})
export class DiceDirective { 
	
	@Input('step') step: number;
	@Input('name') name: string;
	
	constructor(private el: ElementRef, private stepsService: StepsService ) { 		
	}
	
	@HostListener('click') onClick() {
		this.highlight('yellow');
		
		if(isNaN(this.step))
		{
			return;
		}
		console.log(`rolling ${this.name} (${this.stepsService.getDice(this.step)}) ->  ${this.stepsService.rollStep(this.step)}`);
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