describe('navigation', function() {
	
  it('should be able to navigate to steps', function() {
    browser.get('http://localhost:2525/#!/');
	
	element(by.id('nav-main')).click();
	element(by.id('nav-steps')).click();
	
	expect(browser.getCurrentUrl()).toEqual('http://localhost:2525/#!/steps');

  });
  
  it('should be able to navigate to adventure-log', function() {
    browser.get('http://localhost:2525/#!/');
	
	element(by.id('nav-main')).click();
	element(by.id('nav-adventure-log')).click();
	
	expect(browser.getCurrentUrl()).toContain('/#!/adventure-log');

  });  
  
});