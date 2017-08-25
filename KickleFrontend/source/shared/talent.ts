export class Talent {	
	public Id: number;
	public Name: string;
	public Rank: number;
	public Attribute: string;
	public Circle: number;
	public AttributeStep: number;
	
    get TotalStep(): number {
        return this.Rank + this.AttributeStep;
    }	
	
	public Dice: string;	
}