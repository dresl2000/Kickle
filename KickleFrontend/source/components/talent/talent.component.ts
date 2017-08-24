import { Component, Input } from '@angular/core';
import {Talent} from '../../shared/talent';

@Component({
  selector: 'talent',
  template: `<span class="s4sm12 cl">{{talent.Name}}</span>
			<span class="s2sm3">{{talent.Rank}}</span>
			<span class="s2sm3">{{talent.AttributeStep}}</span>
			<span class="s2sm3">{{talent.TotalStep}}</span>
			<span class="s2sm3">{{talent.Dice}}</span>`
})
export class TalentComponent { 
	@Input() talent: Talent;
}

