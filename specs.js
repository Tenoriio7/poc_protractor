browser.ignoreSynchronization = true;
var helper = require('.helpers/helper')
describe ('Logos', function() {
  xit('should have the blog logo', function() { //xit faz com que ignore o teste
   browser.get('https://stackoverflow.com');
   helper.verifyElementPresenceById('h_search-input')
  });
  it ('should navigate to the first blog post',function (){
    var ask = $('.btn-outlined');
    var signup = $('.val-textemphasis');
    browser.get('https://stackoverflow.com/').then(function(){
      expect(ask.isDisplayed()).toBeTruthy();
      ask.click();
      browser.manage().timeouts().pageLoadTimeout(10000)
      expect(signup.isDisplayed()).toBeTruthy();
      signup.click();
      expect(signup.getText()).toContain
      ('You must be logged in to ask a question on Stack Overflow')
    });
  });
  xit ('should have the website logo' , function(){
     browser.get('https://www.submarino.com.br/')
     helper.verifyElementPresenceById('h_search-input')
  });
});
