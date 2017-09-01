import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
 
@Injectable()
export class DiceRollService {
    private subject = new Subject<any>();
 
    sendDiceRoll(message: string) {
        this.subject.next({ text: message });
    }
  
    getDiceRoll(): Observable<any> {
        return this.subject.asObservable();
    }
}
