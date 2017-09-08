import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { DiceRoll} from '../shared/diceRoll';
 
@Injectable()
export class DiceRollService {

    private subject = new Subject<any>();
 
    sendDiceRoll(diceRoll: DiceRoll) {
        this.subject.next(diceRoll);
    }
  
    getDiceRoll(): Observable<any> {
        return this.subject.asObservable();
    }
}
