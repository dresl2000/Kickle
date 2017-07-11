(function(){

kickleApp.component('attribute', {
    bindings: {
      from: '<',
      msg: '<'
    },
    controller: ['$log','attributesService', attributeController],
	bindings: {
			name: '@',
			type: '@'
            },	
    template: [
		'<span class="cl s4med2sm4">{{$ctrl.name}}</span>',
		'<span class="s1">&nbsp;</span>',
		'<span class="s2med2sm1">11</span>',
		'<span class="s2med2sm1">5</span>',
		'<span class="s3">w8</span>'
    ].join('')
  });


	function attributeController($log: any,attributesService: any, name, type) {
		
		let vm = this;
		

		
		
		function init() {
			$log.log('initializing attributeController for:' + vm.name);
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