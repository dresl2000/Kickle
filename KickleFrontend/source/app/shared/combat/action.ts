export class Action {

	constructor(baseAction: BaseAction )
	{
		this.BaseAction = baseAction;

	}

	public get Id(): string{
		return this.BaseAction.constructor.name + '-' + this.BaseAction.Id;		
	}

	public get Name(): string {
		return this.BaseAction.Name;
	}

	public get Step() : number{
		return this.BaseAction.TotalStep;
	}

	public get Dice() : string {
		return this.BaseAction.Dice;
	}


	private BaseAction : BaseAction;

}