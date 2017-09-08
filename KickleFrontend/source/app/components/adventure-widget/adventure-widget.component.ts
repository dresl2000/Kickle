import { Component } from '@angular/core';
import {CharacterDataService} from '../../service/character-data.service';


@Component({
  selector: 'adventure-widget',
  templateUrl: 'app/components/adventure-widget/adventure-widget.html'
  
})
export class AdventureWidgetComponent { 

	adventureLog: any;

	constructor(private characterDataService: CharacterDataService) {
	}
	
	ngOnInit(){		
	
		let logs = this.characterDataService.getAdventureLog();
		
		logs = logs.sort( (n1, n2) => { return Date.parse(n1.Date) < Date.parse(n2.Date); });
		
		this.adventureLog = logs;
	}

}