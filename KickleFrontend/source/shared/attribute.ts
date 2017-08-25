export class Attribute {
	
	public Type: string;	
	public Value : number;
	public Increased: number;
	public Step : number;
	
	constructor(type: string, increased: number, value: number, step: number){			
		this.Type = type;
		this.Increased = increased;
		this.Value = value;	
		this.Step = step;
	};
	
}