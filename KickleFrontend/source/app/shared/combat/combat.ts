export class Combat {

    private _round : number;
    private _hasEnded : boolean;
    
    constructor(){
        this._round = 0;
        this._hasEnded = false;
    }

    get isActive(): boolean {
        return this._round > 0 && this._hasEnded === false;
    }	

    get Round(): number{
        return this._round;
    };    

    get HasEnded(): boolean{
        return this._hasEnded;
    }

    public end(): void{
        if(!this.isActive){
            return;
        }
        
        this._hasEnded = true;
    }

    public nextRound(): void{
        if(this._hasEnded){
            return;
        }

        this._round ++;
    }
}