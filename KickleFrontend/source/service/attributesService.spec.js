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
	});		 
	 
	
});