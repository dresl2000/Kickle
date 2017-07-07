describe('characterDataService Tests', function() {
	
	var characterDataService;
	
	beforeEach(function() {	  
		module('kickleApp');
	});		
	
	beforeEach(inject(function (_characterDataService_) {
		characterDataService = _characterDataService_;
	}));		
	  
	it('should have characterDataService be defined', function () { 
		expect(characterDataService).toBeDefined();
	});			
	     
  
	 
	
});