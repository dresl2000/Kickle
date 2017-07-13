
kickleApp.service('characterDataService', ['$log', function($log: any){
	
	 
	this.getCharacterData = function(){					
		return characterData;
	};	
		 
	  	
	let characterData = {
		Player: {			
			Id : 1,
			Name: 'Dresl'
		},
		Characters: [ 
		{
			Id: 1,
			Name: 'Kickle Cubicle',
			Discipline: { Id:0, Name:'Illustionist', Circle: 3},
			Race: {Id: 0, Name: 'Windling'},
			Sex: {Id: 1, Name: 'männlich'},
			Age: 36,
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


