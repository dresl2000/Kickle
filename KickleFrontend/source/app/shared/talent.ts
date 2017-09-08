export class Talent {


	constructor(id : number, name: string, rank: number, circle: number, attribute?: string,  attributeStep?: number, dice?: string){
		this.Id = id;
		this.Name = name;
		this.Rank = rank;
		this.Circle = circle;
		this.Attribute = attribute;
		this.AttributeStep = attributeStep;
		this.Dice = dice;
	}
	
	public readonly Id: number;
	public readonly Name: string;
	public readonly Rank: number;
	public readonly Attribute: string;
	public readonly Circle: number;
	public readonly AttributeStep: number;
	
    get TotalStep(): number {
        return this.Rank + this.AttributeStep;
    }	
	
	public readonly Dice: string;	
}