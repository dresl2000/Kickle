describe('attributesService Tests', function() {
	
	var characteristicService;
	
	beforeEach(function() {	  
		module('kickleApp');
	});		
	
	beforeEach(inject(function (_characteristicService_) {
		characteristicService = _characteristicService_;
	}));		
	
	it('should have characteristicService be defined', function () { 
		expect(characteristicService).toBeDefined();
	});		

	it('should have 30 table entries', function () {   
		expect(characteristicService.getCharacteristicsTable().length).toBe(30);
	});		

	it('should have values for attribute value 1', function () {		 
		expect(characteristicService.getCharacteristics(1).Step).toBe(2);
		expect(characteristicService.getCharacteristics(1).Defense).toBe(2);
	});	
	
	it('should have values for attribute value 8', function () {		 
		expect(characteristicService.getCharacteristics(8).Step).toBe(4);
		expect(characteristicService.getCharacteristics(8).Defense).toBe(5);
	});		

	it('should have values for attribute value 14', function () {		 
		expect(characteristicService.getCharacteristics(14).Step).toBe(6);
		expect(characteristicService.getCharacteristics(14).Defense).toBe(8);
	});		

	it('should have values for attribute value 21', function () {		 
		expect(characteristicService.getCharacteristics(21).Step).toBe(8);
		expect(characteristicService.getCharacteristics(21).Defense).toBe(11);
	});		
	
	it('should have values for attribute value 27', function () {		 
		expect(characteristicService.getCharacteristics(27).Step).toBe(10);
		expect(characteristicService.getCharacteristics(27).Defense).toBe(13);
	});		
	
});