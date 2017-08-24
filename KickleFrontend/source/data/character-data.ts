export const CHARDATA : any = {
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
				"Value": 22,
				"Increased": 3
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
		],
		Talents : [
			{
				"Id": 1,
				"Name": "Fadenweben",
				"Rank": 4,
				"Attribute" : "PER",
				"Circle": 1
			},
			{
				"Id": 2,
				"Name": "Karmaritual",
				"Rank": 3,
				"Attribute" : "-",
				"Circle": 1
			},
			{
				"Id": 3,
				"Name": "Lesen/ Schreiben",
				"Rank": 3,
				"Attribute" : "PER",
				"Circle": 1
			},
			{
				"Id": 4,
				"Name": "Spruchzauberei",
				"Rank": 4,
				"Attribute" : "PER",
				"Circle": 1
			}		
		]
	}]
};