import { Component } from '@angular/core';
import {CharacterDataService} from '../../service/character-data.service';
import {StepsService} from '../../service/steps.service'

@Component({
  selector: 'karma',
  templateUrl: 'app/components/karma/karma.html'
})
export class KarmaComponent { 

	karma : any;
	dice: string;

	constructor(private characterDataService : CharacterDataService, private stepsService: StepsService){
		
	}

	ngOnInit(){
		this.karma = this.characterDataService.getKarma();
		this.dice =  this.stepsService.getDice(this.karma.Step);
	}
}