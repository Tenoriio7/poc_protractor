
//var cloudTestingHelper = require('./helpers/cloud.testing.helper')
  exports.config = {
   seleniumAddress: 'http://localhost:4444/wd/hub',
  //seleniumAddress: 'http://saucelabs.com:80/wd/hub',
   specs: ['specs.others.js'],
   baseUrl: 'https://www.alura.com.br/',

  onPrepare: function(){
    var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
    // add jasmine spec reporter
      jasmine.getEnv().addReporter(new SpecReporter({
        displayFailureSummary:true,
        displayFailedSpec:true,
        displaySuiteNumber:true,
        displaySpecDuration:true
      }));

  },


}
