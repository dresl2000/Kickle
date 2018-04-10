import {BaseAction} from './combat/baseAction';

export class Skill implements BaseAction {


	constructor(id : number, name: string, rank: number, initialValue: number, attribute: string,  attributeStep: number, dice: string){
		this.Id = id;
		this.Name = name;
		this.Rank = rank;
		this.Attribute = attribute;
		this.AttributeStep = attributeStep;
		this.InitalValue = initialValue;
	}
	
	public readonly Id: number;
	public readonly Name: string;
	public readonly Rank: number;
	public readonly Attribute: string;
	public readonly AttributeStep: number;
	public readonly InitalValue : number;
	
    get TotalStep(): number {
        return this.Rank + this.AttributeStep;
    }	
	
	public readonly Dice: string;	
}