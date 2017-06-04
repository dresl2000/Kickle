

kickleApp.service('stepsService', ['$log', function($log: any){
	
	class Step {
		public stepNumber: number;
		
		var dice: Die[]
		
		toString() : String{
			
		};
		
		roll(): number {
			
		};
	}	
	
	class Die {
		
		public type: number;
		public amount: number;
		
		constructor(dieType: number, dieAmount: number){
			this.type = dieType;
			this.amount = dieAmount;
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
	
}]);

 
