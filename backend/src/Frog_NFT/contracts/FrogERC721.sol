// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "node_modules/@openzeppelin/contracts/utils/Strings.sol";

// deploy to 0x594890f2fE1CbD220756f3a7f98406365858058d
contract FrogNFT is ERC721Enumerable, Ownable {
    using Strings for uint256;

    bool public _revealed = false;

    // Constants
    uint256 public mintPrice = 0.01 ether;
    uint256 public maxMint = 5;

    string baseURI; // like tokenURI except tokenId
    string public notRevealedUri; // for tokenURI before reveal
    string public baseExtension = ".json";

    // tokenId => tokenURI
    mapping(uint256 => string) private _tokenURIs;

    // _initBaseURI: ipfs://QmZkq8NTaQN8DYP7cNZQn925L1isMv8gJxMwbXZE338gkZ
    // _initNotRevealedUri: ipfs://QmZkq8NTaQN8DYP7cNZQn925L1isMv8gJxMwbXZE338gkZ/unpack.json
    constructor(
        string memory _initBaseURI,
        string memory _initNotRevealedUri
    ) ERC721("Frog NFT", "FROG") {
        baseURI = _initBaseURI;
        notRevealedUri = _initNotRevealedUri;
    }

    function mint(uint256 mintAmount) public payable {
        require(mintAmount * mintPrice <= msg.value, "Not enough money");
        require(
            mintAmount <= maxMint,
            "Cannot mint that much tokens at a time"
        );

        _mint(mintAmount);
    }

    function _mint(uint256 mintAmount) private {
        for (uint256 i = 0; i < mintAmount; i++) {
            uint256 tokenId = totalSupply();
            _safeMint(msg.sender, tokenId);
        }
    }

    function tokenURI(
        uint256 tokenId
    ) public view virtual override returns (string memory) {
        require(_exists(tokenId), "Invalid token id");

        string memory base = _baseURI();

        // we only have 5 special tokenURI, which means when tokenId = 5, the tokenURI is the same as tokenId = 0
        // In other words, if tokenId > 4, we need to use tokenId % 5 to get the correct tokenURI
        if (!_revealed) {
            return notRevealedUri;
        } else if (tokenId <= 4) {
            return
                string(
                    abi.encodePacked(base, tokenId.toString(), baseExtension)
                );
        } else {
            return
                string(
                    abi.encodePacked(
                        base,
                        (tokenId % 5).toString(),
                        baseExtension
                    )
                );
        }
    }

    // internal function
    function _baseURI() internal view virtual override returns (string memory) {
        return baseURI;
    }

    //only owner
    function switchReveal() public onlyOwner {
        _revealed = !_revealed;
    }

    function setMintPrice(uint256 _mintPrice) public onlyOwner {
        mintPrice = _mintPrice;
    }

    function setNotRevealedURI(string memory _notRevealedURI) public onlyOwner {
        notRevealedUri = _notRevealedURI;
    }

    function setBaseURI(string memory _newBaseURI) public onlyOwner {
        baseURI = _newBaseURI;
    }

    function setBaseExtension(
        string memory _newBaseExtension
    ) public onlyOwner {
        baseExtension = _newBaseExtension;
    }

    function setMaxMint(uint256 _maxMint) public onlyOwner {
        maxMint = _maxMint;
    }

    // for owner to withdraw profit
    function withdraw(address to) public onlyOwner {
        uint256 balance = address(this).balance;
        payable(to).transfer(balance);
    }
}
