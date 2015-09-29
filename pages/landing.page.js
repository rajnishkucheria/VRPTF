// Landing Page Object

  var Landingpage = function() {
  var tabCampaign = element(by.repeater('pane in panes').row(2))

  this.clickCampaign = function() {
    tabCampaign.click();
  };

  this.getTitle = function() {
    return browser.getTitle();
  };
};

module.exports = Landingpage;
