// Campaign Page Object

  var Campaignpage = function() {
  var addCampaign = element(by.css('[ng-click="addCampaign()"]'));
  var campaignName = element(by.model('campaign.name'));
  var campaignDesc = element(by.model('campaign.description'));
  var buttonSave = element(by.buttonText('Save'));

  this.clickAddCampaign = function() {
    addCampaign.click();
  };

  this.setCampaignName = function(name) {
    campaignName.sendKeys(name);
  };

  this.setCampaignDesc = function(desc) {
    campaignDesc.sendKeys(desc);
  };

  this.selectBySearch = function(key, value) {
    if (key==='Company'){
    	select2First('div#s2id_autogen5',value);
    }else if (key==='Manager'){
    	select2First('div#s2id_autogen7',value);
    }
  };

  this.clickButtonSave = function() {
    buttonSave.click();
  };


  this.getTitle = function() {
    return browser.getTitle();
  };

function select2First(select2Locator, opt_query){
    // the 'a' element inside the select2 will receive the 'mousedown' event
    var selector = select2Locator + ' a.select2-choice';
    // Locator for the select2 options
    var options = element.all(by.css('.select2-results-dept-0'));

    // select2 doesn't activate on click 
    // and protractor doesn't have a direct mousedown method on 'ElementFinder'.
    browser.driver.executeScript('$(arguments["0"]).mousedown();', (selector));

    if(opt_query){
        browser.driver.switchTo().activeElement().sendKeys(opt_query);
        // select2 can fetch options from over a network
        // so we confirm that all pending network requests are resolved after typing the query
        browser.driver.wait(function(){
            return browser.driver.executeScript('return $.active === 0;');
        }, 2000);
    }

    // makes sure all the options are rendered
    browser.driver.wait(function(){
        return options.count().then(function(count){
            return 0 < count;
        });
    }, 200000);

    options.first().click();
};


};

module.exports = Campaignpage;
