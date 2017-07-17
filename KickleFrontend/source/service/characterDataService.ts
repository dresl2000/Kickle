
kickleApp.service('characterDataService', ['$log', function($log: any){
	
	 
	this.getCharacterData = function(){					
		return characterData;
	};	

	this.getAdventureLog = function(){					
		return adventureLogData.adventureLog;
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
			]
		}]
	};
	
	let adventureLogData = {
		playerId: 1,
		characterId: 1,
		adventureLog: [
			{
				Id: 1,
				Date: '3-16-2017',
				Title: 'Reise in die Zukunft',
				LegendPoints: 1600,
				Text: 
				['Der durchtriebene König Aures (Troll!) hat unsere geduldige und warmherzige Delegation gefangen genommen und weigert sich den fairen und grosszügigen Preis für unsere Schutzrunen zu zahlen.',
				'Therra kann dies nicht länger hinnehmen! Wir können uns nicht länger auf der Nase herumtanzen lassen. Es ist traurig, wie die Grosszügigkeit unserer grossen Nation so schamlos ausgenutzt wird. Nun liegt es an mir, dem grossen Kickle Cubicle, den bösen König zu stoppen und für Frieden und Gerechtigkeit in Barsaive zu sorgen.',
				'Die Trolle werden die Verhandlungen schon wieder aufnehmen, sobald ich die Wasserversorgung mit der Stasisfalle gestoppt habe.',
				'Dämonen! Ich habe Beisser gesichtet!',
				'Ein Beisser hat ich verfolgt, mir blieb nichts anderes übrig, als die Stasisfalle zu zünden, um mich darin zu verstecken. Als nächstes war ich umringt von verrückten Barsaivern.'
				]
			},
			{
				Id: 2,
				Date: '4-13-2017',
				Title: 'Die Bauernrevolte beenden',
				LegendPoints: 2000,
				Text: 
				['Die schändlichen Bauern planen einen Aufstand! Wir müssen ihn niederschlagen!'
				]
			},
			{
				Id: 3,
				Date: '5-16-2017',
				Title: 'Diplomatisches Gemetzel an der Wassersäule',
				LegendPoints: 2300,
				Text: 
				['text text text'
				]
			},
			{
				Id: 4,
				Date: '6-5-2017',
				Title: 'Wieder nicht ins Archiv geschafft',
				LegendPoints: 2500,
				Text: 
				['text text text'
				]
			},
						{
				Id: 5,
				Date: '7-13-2017',
				Title: 'Aslani muss brennen!',
				LegendPoints: 2800,
				Text: 
				['text text text'
				]
			},
		]
	};

}]);

			

