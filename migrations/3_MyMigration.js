const Test = artifacts.require("SimplePaymentChannel");

module.exports = function (deployer) {
  deployer.deploy(Test, "0x59990106c6a0ef5c2f88f8b07f686c636fc2195e" , "0xf0b5aa2ee44c65ad4660d70483357b7d7a67c24d" ); //truffle adresy 

  //truffle adresy sme pomocou MNEMONICU sync-li so ganachom

  //deployer.deploy(Test, "0xC517554Db4272211152bE1Ad5b9AF3315F442EF6" , "0x7A87633539e635cC5a0c008347c4cf32Aa4Ffd39" ); //ganache adresy 
  //deploy() -> 1 Test [meno kontraktu] , 2 "0x5.." [Konštruktor, prvý argument] 3 "0xf0" [Konštruktor, druhý argument] ..
};
