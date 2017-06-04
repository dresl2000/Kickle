

kickleApp.service('stepsService', ['$log', function($log: any){
	
	let steps : Step[];
	
	class Step {
		public stepNumber: number;
		
		private dice : Die[];
		
		constructor(input: string){
									
			var inputArray = input.split(' ');
			
			stepNumber = Number(inputArray.splice(0,1));
			$log.log('stepNumber:' + stepNumber);
			
			dice = new Array() as Array<Die>;
			
			for (let diceString of inputArray) {			
				let splitStr = diceString.split('w');
				let diceNumber = splitStr[0].length > 0 ? splitStr[0] : 1
				dice.push(new Die(diceNumber,splitStr[1]));
			}
						
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
			let result : number = 0; 
			
			for (let i : number = 1;i <= this.amount;i++) {								
				let rolled = Math.floor(Math.random() * this.type) + 1 ;
				$log.log(this.type + 'd rolled:'+ rolled);
				result += rolled;
				if(rolled == this.type)
				{
					$log.log('Bonus roll!');	
					i--;
				}
			}
			
			return result;
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
		
		steps = new Array() as Array<Step>;
				
		for (let rawStep of rawSteps) {
			$log.log(rawStep);
			steps.push(new Step(rawStep));
		}
		
		$log.log('step: ' + steps[0].toString());
		$log.log('rolling step: ' + steps[0].roll());
		
		
		
		//$log.log('step1: ' + steps[50].toString());
		//$log.log('rolling step1: ' + steps[50].roll());
		
		
	};	
	
	let rawSteps = ['3 w4','4 w6','5 w8','6 w10','7 w12','8 2w6','9 w8 w6','10 w10 w6','11 w10 w8','12 2w10','13 w12 w10','14 w20 w4','15 w20 w6','16 w20 w8','17 w20 w10','18 w20 w12','19 w20 2w6','20 w20 w8 w6','21 w20 w10 w6','22 w20 w10 w8','23 w20 2w10','24 w20 w12 w10','25 w20 w10 w8 w4','26 w20 w10 w8 w6','27 w20 w10 2w8','28 w20 2w10 w8','29 w20 w12 w10 w8','30 w20 w10 w8 2w6','31 w20 w10 2w8 w6','32 w20 2w10 w8 w6','33 w20 2w10 2w8','34 w20 3w10 w8','35 w20 w12 2w10 w8','36 2w20 w10 w8 w4','37 2w20 w10 w8 w6','38 2w20 w10 2w8','39 2w20 2w10 w8','40 2w20 w12 w10 w8','41 2w20 w10 w8 2w6','42 2w20 w10 2w8 w6','43 2w20 2w10 w8 w6','44 2w20 2w10 2w8','45 2w20 3w10 w8','46 2w20 w12 2w10 w8','47 2w20 2w10 2w8 w4','48 2w20 2w10 2w8 w6','49 2w20 2w10 3w8','50 2w20 3w10 2w8','51 2w20 w12 2w10 2w8','52 2w20 2w10 2w8 2w6','53 2w20 2w10 3w8 w6','54 2w20 3w10 2w8 w6','55 2w20 3w10 3w8','56 2w20 4w10 2w8','57 2w20 w12 3w10 2w8','58 3w20 2w10 2w8 w4','59 3w20 2w10 2w8 w6','60 3w20 2w10 3w8','61 3w20 3w10 2w8','62 3w20 w12 2w10 2w8','63 3w20 2w10 2w8 2w6','64 3w20 2w10 3w8 w6','65 3w20 3w10 2w8 w6','66 3w20 3w10 3w8','67 3w20 4w10 2w8','68 3w20 w12 3w10 2w8','69 3w20 3w10 3w8 w4','70 3w20 3w10 3w8 w6','71 3w20 3w10 4w8','72 3w20 4w10 3w8','73 3w20 w12 3w10 3w8','74 3w20 3w10 3w8 2w6','75 3w20 3w10 4w8 w6','76 3w20 4w10 3w8 w6','77 3w20 4w10 4w8','78 3w20 5w10 3w8','79 3w20 w12 4w10 3w8','80 4w20 3w10 3w8 w4','81 4w20 3w10 3w8 w6','82 4w20 3w10 4w8','83 4w20 4w10 3w8','84 4w20 w12 3w10 3w8','85 4w20 3w10 3w8 2w6','86 4w20 3w10 4w8 w6','87 4w20 4w10 3w8 w6','88 4w20 4w10 4w8 ','89 4w20 5w10 3w8','90 4w20 w12 4w10 3w8','91 4w20 4w10 4w8 w4','92 4w20 4w10 4w8 w6','93 4w20 4w10 5w8','94 4w20 5w10 5w8','95 4w20 w12 4w10 4w8','96 4w20 4w10 4w8 2w6','97 4w20 4w10 5w8 w6','98 4w20 5w10 4w8 w6','99 4w20 5w10 5w8','100 4w20 6w10 4w8'];

	init();	
}]);

 
