module.exports = function(kickleApp) {

kickleApp.service('attributesService', ['$log','characteristicService','characterDataService', function($log: any, characteristicService, characterDataService){
	
	let attributes : Attribute[];
				
		
	class Attribute {
		
		public Type: string;	
		public Value : number;
		public Increased: number;
		public Step : number;
		
		constructor(raw: any){		
		
			this.Type = raw.Type;
			this.Increased = raw.Increased;
			this.Value = raw.Value;
		
			this.Step = characteristicService.getCharacteristics(this.Value).Step;
		};
		
	}
	 
	this.getAttribute = function(type: string): Attribute{					
		return attributes.find(x => x.Type == type);
	};	
		
	  
	function init() {
		$log.log('initializing attributesService');
		
		attributes = new Array() as Array<Attribute>;			
		
		for (let raw of characterDataService.getCharacterData().Characters[0].Attributes) {
			attributes.push(new Attribute(raw));
		}
		
	};	
	 		
	init();
}]);

 
}