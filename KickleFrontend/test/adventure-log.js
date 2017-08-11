describe('adventure-log', function() {
	
  fit('adventure-log should have logo', function() {
    browser.get('http://localhost:2525/#!/adventure-log');


	var imgElement = element(by.css('.logo'));
	expect(imgElement.isPresent()).toBe(true);
	
	

	//imgElement.src.toEqual('images/Earthdawn-logo.png');
    //var img = element(by.css('[class="logo"]'));
    //expect(img.getAttribute('src').toEqual("images/Earthdawn-logo.png"));
		


  });
});