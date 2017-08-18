module.exports = function(kickleApp) {

kickleApp.service('characteristicService', ['$log', function($log){
	
	
	let characteristicsTable : Characteristic[];
	
	class Characteristic {
		
		public SystemOfRules : string;
		public AttributeValue : number;
		public Step : number;
		public Defense : number;		
	}
	
	this.getCharacteristicsTable = function(){
		return characteristicsTable;
	}
	
	this.getCharacteristics = function(value: number){
		return characteristicsTable.find(x => x.AttributeValue === value);
	};
	
	function init() {
		$log.log('initializing characteristicService');
		
		characteristicsTable = new Array() as Array<Characteristic>;
		
		for (let raw of rawData) {
			characteristicsTable.push(Object.assign( new Characteristic(),raw));
		}
			
	};	
	 
	let rawData = [
		{
			"AttributeValue":1,
			"Step": 2,
			"Defense": 2
		},
		{
			"AttributeValue":2,
			"Step": 2,
			"Defense": 3
		},
		{
			"AttributeValue":3,
			"Step": 2,
			"Defense": 3
		},
		{
			"AttributeValue":4,
			"Step": 3,
			"Defense": 4
		},
		{
			"AttributeValue":5,
			"Step": 3,
			"Defense": 4
		},
		{
			"AttributeValue":6,
			"Step": 3,
			"Defense": 4
		},
		{
			"AttributeValue":7,
			"Step": 4,
			"Defense": 5
		},
		{
			"AttributeValue":8,
			"Step": 4,
			"Defense": 5
		},
		{
			"AttributeValue":9,
			"Step": 4,
			"Defense": 6
		},
		{
			"AttributeValue":10,
			"Step": 5,
			"Defense": 6
		},
				{
			"AttributeValue":11,
			"Step": 5,
			"Defense": 7
		},
		{
			"AttributeValue":12,
			"Step": 5,
			"Defense": 7
		},
		{
			"AttributeValue":13,
			"Step": 6,
			"Defense": 7
		},
		{
			"AttributeValue":14,
			"Step": 6,
			"Defense": 8
		},
		{
			"AttributeValue":15,
			"Step": 6,
			"Defense": 8
		},
				{
			"AttributeValue":16,
			"Step": 7,
			"Defense": 9
		},
		{
			"AttributeValue":17,
			"Step": 7,
			"Defense": 9
		},
		{
			"AttributeValue":18,
			"Step": 7,
			"Defense": 10
		},
		{
			"AttributeValue":19,
			"Step": 8,
			"Defense": 10
		},
		{
			"AttributeValue":20,
			"Step": 8,
			"Defense": 10
		},
				{
			"AttributeValue":21,
			"Step": 8,
			"Defense": 11
		},
		{
			"AttributeValue":22,
			"Step": 9,
			"Defense": 11
		},
		{
			"AttributeValue":23,
			"Step": 9,
			"Defense": 12
		},
		{
			"AttributeValue":24,
			"Step": 9,
			"Defense": 12
		},
		{
			"AttributeValue":25,
			"Step": 10,
			"Defense": 13
		},
				{
			"AttributeValue":26,
			"Step": 10,
			"Defense": 13
		},
		{
			"AttributeValue":27,
			"Step": 10,
			"Defense": 13
		},
		{
			"AttributeValue":28,
			"Step": 11,
			"Defense": 14
		},
		{
			"AttributeValue":29,
			"Step": 11,
			"Defense": 14
		},
		{
			"AttributeValue":30,
			"Step": 11,
			"Defense": 15
		},
	
	
	];

	init();	
}]);

}
 
