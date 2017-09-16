import {Component} from '@angular/core'
import {StepsService} from '../../service/steps.service';
import {Step} from '../../shared/step';

@Component({
	selector: 'steps-overview',
	templateUrl: 'app/components/steps-overview/steps-overview.html'
})
export class StepsOverviewComponent{
	
	private steps: Step[];
	
	constructor(private stepsService: StepsService){}
	
	ngOnInit(){
		
		this.steps = this.stepsService.getAllSteps(); 
	}
	
	
}