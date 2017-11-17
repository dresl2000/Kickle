export class Attribute {
	
	public Type: string;	
	public Value : number;
	public Increased: number;
	public IncreasedStr : string;
	public Step : number;
	public Dice : string;
	
	constructor(type: string, increased: number, value: number, step: number, increasedStr: string, dice: string){			
		this.Type = type;
		this.Increased = increased;
		this.Value = value;	
		this.Step = step;
		this.IncreasedStr = increasedStr;
		this.Dice = dice;
	};
	
}