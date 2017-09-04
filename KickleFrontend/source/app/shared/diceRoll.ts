export class DiceRoll {


	constructor(name: string, step: number, dice: string, result: number){
		this.Name = name;
		this.Step = step;
		this.Dice = dice;
		this.Result = result;
	}
	
	public readonly Name: string;
	public readonly Step: number;
	public readonly Dice: string;
	public readonly Result: number;

}