const Test = artifacts.require("Helloworld");

module.exports = function (deployer) {
  deployer.deploy(Test);
};