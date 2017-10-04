export class DiceRoll {


	constructor(name: string, step: number, dice: string, result: number, timeStamp: Date){
		this.Name = name;
		this.Step = step;
		this.Dice = dice;
		this.Result = result;
		this.TimeStamp = timeStamp;
	}
	
	public readonly Name: string;
	public readonly Step: number;
	public readonly Dice: string;
	public readonly Result: number;
	public readonly TimeStamp: Date;
	
}