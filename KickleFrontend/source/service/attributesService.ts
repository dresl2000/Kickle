

kickleApp.service('attributesService', ['$log', function($log: any){
	
	let attributes : Attribute[];
				

		
	class Attribute {
		
		public Type: string;
		public Value : number;
		public Increased: number;
		public Step : number;
	}
	
	this.getAttribute = function(type: string): Attribute{
		return attributes.find(x => x.Type == type);
	};	
	  
	function init() {
		$log.log('initializing attributesService');
		
		attributes = new Array() as Array<Attribute>;
		
		for (let raw of rawData) {
			attributes.push(Object.assign( new Attribute(),raw));
		}
		
	};	
	 
	let rawData = [
		{
			"Type":"DEX",
			"Value": 11,
			"Increased": 0
		},
		{
			"Type":"STR",
			"Value": 1,
			"Increased": 0
		}	
	];
		
	init();
}]);

 
