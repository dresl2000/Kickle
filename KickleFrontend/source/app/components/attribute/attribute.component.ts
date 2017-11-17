import { Component, Input } from '@angular/core';
import {AttributeService} from '../../service/attribute.service';
import {StepsService} from '../../service/steps.service';
import {Attribute} from '../../shared/attribute';
import {DiceDirective} from '../../directives/dice/dice.directive';


@Component({
  selector: 'attribute',
  template: `<span class="cl s4med2sm4">{{Name}}</span>
            <span class="s1">&nbsp;{{attribute.IncreasedStr}}</span>
            <span class="s2med2sm1">{{attribute.Value}}</span>
            <span class="s2med2sm1">{{attribute.Step}}</span>
            <span class="s3" dice [step]="attribute.Step" [name]="Name" >{{attribute.Dice}}</span>`
})
export class AttributeComponent { 

	public attribute: Attribute;
    @Input() Name:string;
    @Input() Type: string;

	constructor(private attributeService: AttributeService, private stepsService: StepsService) { }
	
	ngOnInit(){
		this.attribute = this.attributeService.getAttribute(this.Type);			
	}
}