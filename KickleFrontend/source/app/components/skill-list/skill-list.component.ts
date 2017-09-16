import { Component } from '@angular/core';
import {TalentService} from '../../service/talent.service';
import {Skill} from '../../shared/skill';



@Component({
  selector: 'skill-list',
  templateUrl: 'app/components/skill-list/skill-list.html'
})
export class SkillListComponent { 

	skills: Skill[];

	constructor(private talentService: TalentService) { }
	
	ngOnInit(){
		this.skills = this.talentService.getSkills();			
	}

}