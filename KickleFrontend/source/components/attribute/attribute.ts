(function(){

kickleApp.component('attribute', {
    bindings: {
      from: '<',
      msg: '<'
    },
    controller: ['$log','attributesService','stepsService', attributeController],
	bindings: {
			name: '@',
			type: '@'
            },	
    template: [
		'<span class="cl s4med2sm4">{{$ctrl.name}}</span>',
		'<span class="s1">&nbsp;{{$ctrl.getIncreased($ctrl.type)}}</span>',
		'<span class="s2med2sm1">{{$ctrl.getValue($ctrl.type)}}</span>',
		'<span class="s2med2sm1">{{$ctrl.getStep($ctrl.type)}}</span>',
		'<span class="s3">{{$ctrl.getDice($ctrl.type)}}</span>'
    ].join('')
  });


	function attributeController($log: any,attributesService: any,stepsService: any) {
		
		let vm = this;
		
		vm.getValue = function(type: String) {
			return attributesService.getAttribute(type).Value;		
		};

		vm.getIncreased = function(type: String) {
			let incr = attributesService.getAttribute(type).Increased;		
			$log.log(incr);
			let returnValue = '';
			
			for(let i = 0; i < incr;i++)
			{
				returnValue += 'I';
			}
			$log.log(returnValue);
			return returnValue;
			
		};
		
		vm.getStep = function(type: String) {
			return attributesService.getAttribute(type).Step;		
		};	
		
		vm.getDice = function(type: String) {
			let step = attributesService.getAttribute(type).Step;		
			return stepsService.getDice(step);
		};	
		
	}

 
})();