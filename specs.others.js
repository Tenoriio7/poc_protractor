var helper = require('./helpers/helper')

browser.ignoreSynchronization = true;

describe ('Other sites', function(){
  it ('should navigate through the site pages by relative url', function(){
    browser.get('carreiras')
    var author = $('.carreiras-header-titulo');
    expect(author.getText()).toContain('Carreiras')
  });
  it ('should search', function(){
    var search_icon =  $('.header-busca'),
        search_input  = $ ('#header-barraBusca-campoBusca');
        search_icon.click();
        search_input.sendKeys('protractor');
        search_input.sendKeys(protractor.Key.ENTER);

  });

  it ('first test',function (){
    helper.verifyElementPresenceById('.header-areaAluno');
  });

});
