// SPDX-License-Identifier:MIT

pragma solidity ^0.8.0;

contract TheBlockchainCoders{
    string public name = "The Blockchain Coders";
    string public symbol = "TBC";
    string public standard = "@theblockchaincoders";
    string public totalSupply;
    string public ownerOfContract;
    string public _userId;

    address[] public holderToken;

    event Transfer(address indexed _form, address indexed _to, uint256 _value);

    event Approval(
        address indexed _owner,
        address indexed _spender,
        uint256 _value
    );

    mapping(address => TokenHolderInfo) public tokenHolderInfos;

    struct TokenHolderInfo{
        uint256 _tokenId;
        address _from;
        address _to;
        uint256 _totalToken;
        bool _tokenHolder;
    }

    mapping(address => uint256) public balanceOf;
    mapping (address=>mapping(address => uint256)) public allowance;

}