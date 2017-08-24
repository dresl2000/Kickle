import { Component } from '@angular/core';
import {TalentService} from '../../service/talent.service';
import {Talent} from '../../shared/talent';
import {TalentComponent} from '../talent/talent.component';


@Component({
  selector: 'talent-list',
  templateUrl: 'components/talent-list/talent-list.html'
})
export class TalentListComponent { 

	talents: Talent[];

	constructor(private talentService: TalentService) { }
	
	ngOnInit(){
		this.talents = this.talentService.getTalents();			
	}

}