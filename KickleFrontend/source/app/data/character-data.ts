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
		Karma: {
			Max: 60,
			Current: 15,
			Cost: 5,
			TotalBought: 0,
			Step: 6
		},
		LegendPoints : {
			Current : 4200,
			Total: 15200,
			Status: "I"
		},		
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
			},
			{
				"Id": 5,
				"Name": "Zauberbücher verstehen",
				"Rank": 2,
				"Attribute" : "PER",
				"Circle": 1
			},
			{
				"Id": 6,
				"Name": "Zaubermatrix",
				"Rank": 2,
				"Attribute" : "-",
				"Circle": 1
			},
			{
				"Id": 7,
				"Name": "Zaubermatrix",
				"Rank": 2,
				"Attribute" : "-",
				"Circle": 1
			},
			{
				"Id": 8,
				"Name": "Magische Maske",
				"Rank": 3,
				"Attribute" : "PER",
				"Circle": 2
			},
			{
				"Id": 9,
				"Name": "Unempfindlichkeit (4/3)",
				"Rank": 3,
				"Attribute" : "-",
				"Circle": 2
			},
			{
				"Id": 10,
				"Name": "Zaubermatrix",
				"Rank": 3,
				"Attribute" : "-",
				"Circle": 2
			},
			{
				"Id": 11,
				"Name": "Fremdsprachen",
				"Rank": 2,
				"Attribute" : "PER",
				"Circle": 3
			},
			{
				"Id": 12,
				"Name": "Totstellen",
				"Rank": 4,
				"Attribute" : "CHA",
				"Circle": 3
			}
			
		],
		Skills : [
		{
			"Id": 1,
			"Name": "Musizieren",
			"Rank": 2,
			"Attribute" : "CHA",
			"IsSkill": true
		},
		{
			"Id": 2,
			"Name": "Konversation",
			"Rank": 1,
			"Attribute" : "CHA",
			"IsSkill": true
		},
		Equipment: [
			"Reisekleidung (kostspielig)",
			"Abenteuerpaket",
			"Querflöte",
			"Trompete",
			"Windling Harfe",
			"Rasseln, Pfeife",
			"Tinte, Reisetagebuch"
		],
		Wallet : {
			"Gold":0,
			"Silver": 3,
			"Copper": 17
		},
		Languages: [
			{
				Name: "Windling (lesen/ schreiben)",
				Note: "Muttersprache"
			},
			{
				Name: "Troll (lesen/ schreiben)",
				Note: "Zweitsprache - anstelle von Zwergisch"
			}
		]					
	}]
};