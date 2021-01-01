const JurStatus = artifacts.require("JurStatus");

module.exports = function(deployer) {
  deployer.deploy(JurStatus);
};
