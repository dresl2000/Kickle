(function(){

kickleApp.component('attributeList', {
  bindings: {
    items: '='
  },
  templateUrl: 'components/attribute-list/attribute-list.html',
  controller: ['$log','attributesService', attributeListController]
});

 
function attributeListController($log: any,attributesService: any) {
	
	vm = this;
	

	function init() {
		$log.log('initializing attribute-listController');
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