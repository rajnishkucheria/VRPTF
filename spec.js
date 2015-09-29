// spec.js

var Homepage = require('/home/rajnish/protractor/pages/home.page.js');
var Landingpage = require('/home/rajnish/protractor/pages/landing.page.js');
var Campaignpage = require('/home/rajnish/protractor/pages/campaign.page.js');

describe('Supervisor', function() {
	it('should login successfully', function() {
  		var homepage = new Homepage();
  		homepage.get();
  		homepage.setLoginName('superpro');
  		homepage.setPassword('nexsales'); 
  		homepage.login();
  		expect(homepage.getTitle()).toEqual('Dashboard | Linkstreak by Nexsales');
  	},5000000);
});

describe('User', function() {
	it('Campaign Navigation  Successful', function() {
		var landingpage = new Landingpage();
		landingpage.clickCampaign();
		expect(landingpage.getTitle()).toEqual('Campaigns | Linkstreak by Nexsales');
	});

},5000000);

describe('Supervisor', function() {
	it('Campaign Creation Successful', function() {
		var campaignpage = new Campaignpage();
		campaignpage.clickAddCampaign();
		campaignpage.setCampaignName('Protractor Beta Test');
		campaignpage.setCampaignDesc('Protractor Beta Test Description');
		campaignpage.selectBySearch('Company', 'GE');
		campaignpage.selectBySearch('Manager', 'superpro');
		campaignpage.clickButtonSave();
		expect(browser.getTitle()).toEqual('Campaign | Protractor Beta Test | Linkstreak by Nexsales');
	},500000);

});
