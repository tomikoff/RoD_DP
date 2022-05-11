// SPDX-License-Identifier: MIT

// 
/* 
 by Tomáš Štrba 2022

 this contract is free to use for all,
 it is showcasing the transparency/realness what will happen with your donations (fully donated to organizations)
*/

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RoDsc is ERC721URIStorage, Ownable {
  using Strings for uint256;
  using Counters for Counters.Counter;

 Counters.Counter private _tokenIds;

  uint256 public minCost = 0.0001 ether; //min. cena, cena bude dobrovolná
  uint256 public maxNFTs = 350; //počet NFT v kolekcii
  uint256 public maxMintAmountPerTx = 10; //maximum počet NFT z adresy

  address public org1 = 0x6869B06df899808cbb20e8D3231A554d4D45F956;
  uint public  org1eth = 0.00 wei;
  address public org2 = 0xf85b166C5Cf2E513104643B4C100F4D2116CA080;
  uint public org2eth = 0.00 wei;
  address public org3 = 0x0f9640c0915D4b5Ef8c38f632B62C7718F2D4089;
  uint public org3eth = 0.00 wei;
  address public org4 = 0xe13BADF08279a20550cF69483C5f498eF24efD54;
  uint public org4eth = 0.00 wei;

  constructor() ERC721("Revenge of Dogos", "RoD") {
    //setHiddenMetadataUri("ipfs://__CID__/hidden.json"); // treba zmeniť 
  }

  
// public
  function mint(uint donationAmount,uint256 orgPick,string memory tokenURI) public payable returns (uint256) { //možno dorobiť address recipienta
    //uint256 supply = totalSupply();
    //require(!paused); //nesmie byť kontrakt pauznuty
    if(_tokenIds.current() < 350){ //ak je tokenov menej ako 350, tak možme vytvarať nove tokeny (NFT)
      require(_tokenIds.current() < maxNFTs); //počet aktualne mintnutych NFT musi byť menší ako počet kolekcie

      require(msg.value >= minCost); //platba minCost za NFT , msg value musi ist zo stranky

      if(orgPick == 1)
      {
        //org1eth = org1eth + donationAmount;
        org1eth = setOrg1(donationAmount);
      }else if(orgPick == 2){
        //org2eth = org2eth + donationAmount;
        org2eth = setOrg2(donationAmount);
      }else if(orgPick == 3){
        //org3eth = org3eth + donationAmount;
        org3eth = setOrg3(donationAmount);
      }else if(orgPick == 4){
        //org4eth = org4eth + donationAmount;
        setOrg4(donationAmount);
      }


      _tokenIds.increment(); //+1 nft
      uint256 newItemId = _tokenIds.current(); // konkretne nove NFT uložime do premennej
      _mint(msg.sender, newItemId); //mintnutie NFT na adresu msg sender, čo je adresa kupujuceho //sem tiež recipient namiesto msg.sender
      _setTokenURI(newItemId, tokenURI); //pridame našemu NFT tokenURI-> ipfs pinata link na metadata nasho NFT, medzi ktorymi najdeme aj link na img

      return newItemId;

      /*
      if (msg.sender != owner()) {
          if(whitelisted[msg.sender] != true) {
            require(msg.value >= cost * _mintAmount);
          }
      }

      for (uint256 i = 1; i <= _mintAmount; i++) {
        _safeMint(_to, supply + i);
      }*/
    }
    else{
      return 0;
    }
  }

    /*
    // Poslanie 5 % z celkovych eth z adresy kontraktu na adresu v payable
    // =============================================================================
    (bool hs, ) = payable(0x943590A42C27D08e3744202c4Ae5eD55c2dE240D).call{value: address(this).balance * 5 / 100}("");
    require(hs);
    // =============================================================================

    // vyplatenie ownerovi kontraktu celu sumu ,čo je na adrese kontraktu
    // =============================================================================
    (bool os, ) = payable(owner()).call{value: address(this).balance}("");
    require(os);
    // =============================================================================*/
  
function withdraw2() public onlyOwner {
    // vyplatenie ownerovi kontraktu celu sumu ,čo je na adrese kontraktu
    // =============================================================================
    (bool os, ) = payable(org1).call{value: address(this).balance - org2eth - org3eth - org4eth}("");
    require(os);
    //setNullOrg1(); //treba vynulovať peniaze, lebo sme ich už vratili

    (bool hs, ) = payable(org2).call{value:  address(this).balance  - org3eth - org4eth}("");
    require(hs);
    
    
    (bool orgs3, ) = payable(org3).call{value: address(this).balance  - org4eth}("");
    require(orgs3);

    (bool orgs4, ) = payable(org4).call{value:  address(this).balance}("");
    require(orgs4);

    setNullOrgs();
    // =============================================================================*/
  }


function emergencyWithdraw() public onlyOwner {
    // vyplatenie ownerovi kontraktu celu sumu ,čo je na adrese kontraktu
    // =============================================================================
    (bool os, ) = payable(owner()).call{value: address(this).balance}("");
    require(os);
    // =============================================================================*/
  }
  function setCost(uint256 _newCost) public onlyOwner  {
      minCost = _newCost;
    }
    function setOrg1(uint _newCost) public returns (uint) {
      org1eth =  org1eth + (1 wei * _newCost);
      return org1eth;
    }
  function setOrg2(uint _newCost) public  returns (uint) {
      org2eth =  org2eth + (1 wei * _newCost);
      return org2eth;
    }
    function setOrg3(uint _newCost) public  returns (uint) {
      org3eth =  org3eth + (1 wei * _newCost);
      return org3eth;
    }
    function setOrg4(uint _newCost) public  {
      org4eth += 1 wei * _newCost;
    }
  
  function setNullOrgs() public{
    org1eth = 0 wei;org2eth = 0 wei;org3eth = 0 wei;org4eth = 0 wei;
  }
  function setMaxMintAmountPerTx(uint256 _maxMintAmountPerTx) public onlyOwner {
      maxMintAmountPerTx = _maxMintAmountPerTx;
    }

  //asi nebudeme potrebovat - whitelistuje userov, ktory mozu mintovat
  /*
  function whitelistUser(address _user) public onlyOwner {
    whitelisted[_user] = true;
  }
 
  function removeWhitelistUser(address _user) public onlyOwner {
    whitelisted[_user] = false;
  }
  */

  function walletOfOwner(address _owner)
    public
    view
    returns (uint256[] memory)
  {
    uint256 ownerTokenCount = balanceOf(_owner);
    uint256[] memory ownedTokenIds = new uint256[](ownerTokenCount);
    uint256 currentTokenId = 1;
    uint256 ownedTokenIndex = 0;

    while (ownedTokenIndex < ownerTokenCount && currentTokenId <= maxNFTs) {
      address currentTokenOwner = ownerOf(currentTokenId);

      if (currentTokenOwner == _owner) {
        ownedTokenIds[ownedTokenIndex] = currentTokenId;

        ownedTokenIndex++;
      }

      currentTokenId++;
    }

    return ownedTokenIds;
  }
}