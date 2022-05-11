// contracts/GameItem.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract PictureLicense is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    
    constructor() ERC721("PictureLicense", "LCS") {}

    function awardLicense(address newOwnerAdress, string memory tokenURI)
        public payable
        returns (uint256)
    {
        if(_tokenIds.current() < 2){ //ak je tokenov menej ako 2, tak možme vytvarať nove tokeny (NFT)
        require(msg.value >= 1 ether); //zaplatenie 1 etherea
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _safeMint(newOwnerAdress, newItemId); //slúži ako transfer, ak už tokenID existuje, tak nevytvorí nový token(nepridá dalšiu licenciu tomu kto ju už ma)
        _setTokenURI(newItemId, tokenURI);
        

        return newItemId;
        }
        else{ 
            return 0;}
    }

    function getTokenIds() view external returns(Counters.Counter memory) {

        return _tokenIds;
    }
    function getBalance(address newOwnerAdress) view external returns(uint256) {

        uint256 balance = balanceOf(newOwnerAdress);
        return balance;
    }
    
    address payable[] recipients;
    function sendEther(address payable recipient) external {
        recipient.transfer(1 ether);
        //1 ether zo smart contractu na adresu recipienta
    }

}