import { Input, Directive, HostListener, ElementRef} from '@angular/core';

@Directive({
    selector: '[dice]'
})
export class DiceDirective { 
	
	@Input('step') step: number;

	constructor(private el: ElementRef) { 		
	}

	
	@HostListener('click') onClick() {
		this.highlight('yellow');
		console.log('rolling: ' + this.step );
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
