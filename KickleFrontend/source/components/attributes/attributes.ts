(function(){

kickleApp.component('attributes', {
  bindings: {
    items: '='
  },
  templateUrl: 'components/attributes/attributes.html',
  controller: ['$scope', '$log', attributesController]
});


function attributesController($log: any,$scope: any) {
	
		function init() {
		$log.log('initializing attributesController');
		 
		
	};
	

	
	
	init();	
}

 
})();