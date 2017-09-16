export class Die {
	
	public amount: number;
	public type: number;
	public modifier : number;
			
	constructor(dieAmount: number, dieType: number, modifier: number = 0 ){
		this.amount = dieAmount;
		this.type = dieType;
		this.modifier = modifier;
	};
	
	toString() : string{
		return (this.amount > 1 ? this.amount : '') + 'w' + this.type + (this.modifier != 0 ?  this.modifier : '');
	};
	
	roll(): number{
		let result : number = 0; 
		
		
		for (let i : number = 1;i <= this.amount;i++) {								
			let rolled = (Math.floor(Math.random() * this.type) + 1) + this.modifier;
			console.log(this.type + 'd rolled:'+ rolled);
			result += rolled;
			if(rolled == this.type)
			{
				console.log('Bonus roll!');	
				i--;
			}
		}
		
		return result;
	};
}