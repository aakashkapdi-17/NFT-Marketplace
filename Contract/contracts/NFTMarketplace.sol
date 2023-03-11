
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "../node_modules/@openzeppelin/contracts/utils/Counters.sol";

contract NFTMarketplace is ERC721, ERC721Enumerable, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    uint256 public listingFees= 100;

    struct Item{
        uint256 tokenId;
        string name;
        string description;
        string cid;
        uint256 buyprice;
        uint256 price;
        bool isListed;
    }

    mapping(uint256=>Item) idItemMap;

    constructor() ERC721("NftToken", "NFTk") {}

    function safeMint(address to) public returns(uint256) {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        return tokenId;
    }

    // The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(address from, address to, uint256 tokenId, uint256 batchSize)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    
    function createItem() public{
        uint256  tokenId=safeMint(msg.sender);
        Item memory newItem=Item(tokenId,"a","a","a",0,0,false);
        idItemMap[tokenId]=newItem;
    }

    function listItem(uint256 tokenId)public payable {
        require(ownerOf(tokenId)==msg.sender,"You are not the owner of this NFT");
        require(msg.value==listingFees,"Error in paying Listing Fees");
        idItemMap[tokenId].price=1;
        idItemMap[tokenId].isListed=true;
    }

    function transfer(uint256 tokenId) public payable{
        require(idItemMap[tokenId].isListed,"NFT not listed");
        require(msg.value==idItemMap[tokenId].price,"Price of NFT not correct");
        idItemMap[tokenId].buyprice=idItemMap[tokenId].price;
        (bool sent,) = payable(ownerOf(tokenId)).call{value: msg.value}("");
        require(sent, "Failed to send Ether");
        _transfer(ownerOf(tokenId),msg.sender,tokenId);

    }

    function deListItem(uint256 tokenId) public{
        require(ownerOf(tokenId)==msg.sender || (owner()==msg.sender) ,"You are not the owner of this NFT");
        require(idItemMap[tokenId].isListed,"NFT not listed");
        idItemMap[tokenId].price=0;
        idItemMap[tokenId].isListed=false;
    }

    function updateListingFees(uint256 _newListingFees) public onlyOwner {
        listingFees=_newListingFees;
    }

    function drainContract()public onlyOwner{
        (bool sent, ) = payable(owner()).call{value: address(this).balance}("");
        require(sent, "Failed to send Ether");
    }

  //  Get all NFT's of Owner
    function getAllItems(address _ownerAddr)public view returns(uint256[] memory) {
       uint[] memory nft = new uint[](balanceOf(_ownerAddr));
        for(uint256 i=0;i<balanceOf(_ownerAddr);i++){
            uint256 tokenId=tokenOfOwnerByIndex(_ownerAddr,i);
            nft[i]=tokenId;
        }
        return nft;
    }
}
