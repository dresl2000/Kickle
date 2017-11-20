import { Component } from '@angular/core';
import {AttributeService} from '../../../service/attribute.service';
import {StepsService} from '../../../service/steps.service';
import {Attribute} from '../../../shared/attribute';
import {DiceDirective} from '../../../directives/dice/dice.directive';


@Component({
  selector: 'combat-main',
  templateUrl: 'app/components/combat/combat-main/combat-main.html'
})
export class CombatMainComponent { 


	constructor(private attributeService: AttributeService, private stepsService: StepsService) { }
	
	ngOnInit(){
		console.log('initialzing combat...')
	}
}