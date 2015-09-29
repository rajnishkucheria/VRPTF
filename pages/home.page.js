// Home Page Object

  var Homepage = function() {
  var txtPass = element(by.model('user.password'));
  var txtName = element(by.model('user.id'));
  var buttonLogin = element(by.buttonText('Sign in'));

  this.get = function() {
    browser.get('https://beta.deltamktgresearch.com/app/#/dash-report');
  };

  this.setLoginName = function(name) {
    txtName.sendKeys(name);
  };

  this.setPassword = function(pass) {
    txtPass.sendKeys(pass);
  };

  this.login = function() {
    buttonLogin.click();
  };

  this.getTitle = function() {
    return browser.getTitle();
  };
};

module.exports = Homepage;
