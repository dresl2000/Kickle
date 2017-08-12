describe('adventure-log', function() {
	
  fit('adventure-log should have logo', function() {
    browser.get('http://localhost:2525/#!/adventure-log');

	

	var imgElement = element(by.xpath('//img[@class="logo"]'));
	expect(imgElement.isPresent()).toBe(true);
	expect(imgElement.getAttribute("src")).toContain('images/Earthdawn-logo.png');
	
	//using different alternative methods	
	var method1 = browser.findElement(by.xpath('//div/div/img'));
	expect(method1.getAttribute("src")).toContain('images/Earthdawn-logo.png');
		
	var method2 = browser.findElement(by.xpath('//img[@class="logo"]'));
	expect(method2.getAttribute("src")).toContain('images/Earthdawn-logo.png');
	
	var method3 = browser.findElement(by.css('.logo'));
	expect(method3.getAttribute("src")).toContain('images/Earthdawn-logo.png');	
	
	

  });
});