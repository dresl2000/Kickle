describe('StepsService Tests', function() {
	
	var stepsService;
	
	beforeEach(function() {	  
		module('kickleApp');
	});	
	
	beforeEach(inject(function (_stepsService_) {
		stepsService = _stepsService_;
	}));	
	
	it('should have stepsService be defined', function () {
		expect(stepsService).toBeDefined();
	});	
 
	it('should have 100 steps', function () {
		var allSteps = stepsService.getAllSteps();
		expect(allSteps.length).toBe(100);
	});		
			
	it('should return step 1', function () {
		var step = stepsService.getDice(1);
		expect(step).toBe('w4-2');
	});	
	
	it('should return step 2', function () {
		var step = stepsService.getDice(2);
		expect(step).toBe('w4-1');
	});	
	
	it('should return step 3', function () {
		var step = stepsService.getDice(3);
		expect(step).toBe('w4');
	});	

	it('rolling step 3 should return no less than 1', function () {
		var result = stepsService.rollStep(3);
		expect(result).not.toBeLessThan(1);
	});		
	
	it('should return step 6', function () {
		var step = stepsService.getDice(6);
		expect(step).toBe('w10');
	});	

	it('should return step 15', function () {
		var step = stepsService.getDice(14);
		expect(step).toBe('w20 w4');
	});	

	it('rolling step 15 should return no less than 2', function () {
		var result = stepsService.rollStep(15);
		expect(result).not.toBeLessThan(2);
	});		
	
	it('should return step 20', function () {
		var step = stepsService.getDice(20);
		expect(step).toBe('w20 w8 w6');
	});	
	
	it('should return step 33', function () {
		var step = stepsService.getDice(33);
		expect(step).toBe('w20 2w10 2w8');
	});		

	it('should return step 100', function () {
		var step = stepsService.getDice(100);
		expect(step).toBe('4w20 6w10 4w8');
	});	
	
	it('rolling step 100 should return no less than 14', function () {
		var result = stepsService.rollStep(100);
		expect(result).not.toBeLessThan(14);
	});		
  
});