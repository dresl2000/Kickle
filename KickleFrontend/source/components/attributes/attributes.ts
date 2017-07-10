(function(){

kickleApp.component('attributes', {
  bindings: {
    items: '='
  },
  templateUrl: 'components/attributes/attributes.html',
  controller: ['$log','attributesService', attributesController]
});


function attributesController($log: any,attributesService: any) {
	
	vm = this;
	

	function init() {
		$log.log('initializing attributesController');
		vm.myName = 'gg';	 
		
	};
	
	vm.getValue = function(type: String) {
		return attributesService.getAttribute(type).Value;		
	};

	vm.getIncreased = function(type: String) {
		return attributesService.getAttribute(type).Increased;		
	};
	
	vm.getStep = function(type: String) {
		return attributesService.getAttribute(type).Step;		
	};	
	
	vm.getDice = function(type: String) {
		return attributesService.getAttribute(type).Step;		
	};	
	
	init();	
}

 
})();