import { Injectable } from '@angular/core';
import { LegendPoints } from '../shared/legendPoints';

@Injectable()
export class LegendPointService {

    public getLegendPoints(character : any,adventureLog : any ) : LegendPoints{

        let total = adventureLog.reduce(function(prevVal, elem) {            
            return prevVal + elem.LegendPoints +  (isNaN(elem.BonusLegendPoints)? 0 : elem.BonusLegendPoints) ;
        }, 0);
        

        let current : number = 200;
        

        return new LegendPoints(current, total, this.getLegendStatus(total));
    }

    private getLegendStatus(total: number) : string{

        if(total < 10000){
            return "";
        }else if(total < 40000){
            return "I";
        }else if(total < 160000){
            return "II";
        }else if(total < 640000){
            return "III";
        }else if(total < 2560000){
            return "IV";
        }else{
            return "V";
        }


    }


}