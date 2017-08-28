module.exports = function(kickleApp) {
	
kickleApp.component('characterDescription', {
  bindings: {
    items: '='
  },
  templateUrl: 'app/components/characterDescription/character-description.html',
  controller: ['$log','characterDataService', characterDescriptionController]
});

 
function characterDescriptionController($log,characterDataService) {
	
	let vm = this;
	
	function init(){
		$log.log('initializing characterDescriptionController');
		let charData = characterDataService.getCharacterData();
		vm.playerName = charData.Player.Name;
		vm.name = charData.Characters[0].Name;
		vm.discipline = charData.Characters[0].Discipline.Name;
		vm.circle = charData.Characters[0].Discipline.Circle;
		vm.race = charData.Characters[0].Race.Name;
		vm.sex = charData.Characters[0].Sex.Name;
		vm.age = charData.Characters[0].Age;
		
		
	}
	
	
	init();

}

 
}