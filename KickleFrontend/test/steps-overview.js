describe('steps overview', function() {
	
  it('should get steps', function() {
    browser.get('http://localhost:2525/#!/steps');


    var todoList = element.all(by.repeater('i in getSteps()'));
    expect(todoList.count()).toEqual(100);
    expect(todoList.get(2).getText()).toEqual('w4');	
	expect(todoList.get(13).getText()).toEqual('w20 w4');
	expect(todoList.get(79).getText()).toEqual('4w20 3w10 3w8 w4');
		


  });
});