// conf.js
exports.config = {
  framework: 'jasmine2',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
allScriptsTimeout: 500000
}

jasmineNodeOpts: {
defaultTimeoutInterval: 500000
}
