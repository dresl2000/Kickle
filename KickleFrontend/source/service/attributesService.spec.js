describe('attributesService Tests', function() {
	
	var attributesService;
	
	beforeEach(function() {	  
		module('kickleApp');
	});		
	
	beforeEach(inject(function (_attributesService_) {
		attributesService = _attributesService_;
	}));		
	 
	it('should have attributesService be defined', function () { 
		expect(attributesService).toBeDefined();
	});			
	     
	it('should have DEX defined', function () {   
		let attribute = attributesService.getAttribute('DEX');		
		
		expect(attribute.Value).toBe(11); 		
		expect(attribute.Increased).toBe(0); 
		expect(attribute.Step).toBe(5); 
	});		 
	 
	it('should have WIL defined', function () {   
		let attribute = attributesService.getAttribute('WIL');		
		
		expect(attribute.Value).toBe(16); 		
		expect(attribute.Increased).toBe(0); 
		expect(attribute.Step).toBe(7); 
	});			 
	 
	it('should have CHA defined', function () {   
		let attribute = attributesService.getAttribute('CHA');		
		 
		expect(attribute.Value).toBe(18); 		
		expect(attribute.Increased).toBe(0); 
		expect(attribute.Step).toBe(7); 
	});		

	 
});