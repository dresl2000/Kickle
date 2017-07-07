
kickleApp.service('characterDataService', ['$log', function($log: any){
	
	 
	this.getCharacterData = function(){					
		return characterData;
	};	
		
	  	
	let characterData = {
		Player: {					
			Name: 'Dresl',
			Id : 1
		},
		Characters: [ 
		{
			Name: 'Kickle Cubible',
			Id: 1,
			Attributes: [
				{
					"Type":"DEX",
					"Value": 11,
					"Increased": 0
				},
				{
					"Type":"STR",
					"Value": 1,
					"Increased": 0
				},
				{
					"Type":"TOU",
					"Value": 8,
					"Increased": 0
				},
				{
					"Type":"PER",
					"Value": 21,
					"Increased": 2
				},
				{
					"Type":"WIL",
					"Value": 16,
					"Increased": 0
				},
				{
					"Type":"CHA",
					"Value": 18,
					"Increased": 0
				}	
			]
		}]
	};
		

}]);


