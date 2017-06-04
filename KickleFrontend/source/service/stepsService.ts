

kickleApp.service('stepsService', ['$log', function($log: any){
	
	
	class Step {
		public stepNumber: number;
		
		private dice : Die[];
		
		constructor(){
			dice = new Array() as Array<Die>;
			dice.push(new Die(2,6));
		};		
		
		toString() : String{
			
			let str : String = ''; 
			
			for (let die of dice) {
				
				if(str.length > 0){
					str += ' ' + die.toString();				
				}
				else{
					str = die.toString(); 	
				}				
			}
			
			return str;
		};
		
		roll(): number {
			let result : number = 0; 
			
			for (let die of dice) {								
				result += die.roll(); 							
			}
			
			return result;
		};
	}	
	
	class Die {
		
		public amount: number;
		public type: number;
				
		constructor(dieAmount: number, dieType: number ){
			this.amount = dieAmount;
			this.type = dieType;			
		};
		
		toString() : String{
			return (this.amount > 1 ? this.amount : '') + 'w' + this.type;
		};
		
		roll(): number{
			return 1;
		};
	}

	this.getDice = function(step: number): String{
		return '123';
	};
	 
	this.rollStep = function(step: number): number{
		return 3;
	};
	
	function init() {
		$log.log('initializing stepsService');
		
		let s1 = new Step();
		
		$log.log('step1: ' + s1.toString());
		$log.log('rolling step1: ' + s1.roll());
		
	};	
	
	init();
	
}]);

 
