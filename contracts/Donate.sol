//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Donate {
    address public owner;
    mapping(address => uint256) public donateUsers;
    event addDonate(address _from, uint256 _value);
    event Response(bool success, bytes data);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    modifier notZero() {
        require(msg.value > 0, "Value should more than zero");
        _;
    }

    modifier balanceNotZero() {
        require(address(this).balance > 0, "Contract balance zero");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function donate() public payable notZero{
        donateUsers[msg.sender] = msg.value;
        emit addDonate(msg.sender, msg.value);
    }

    function withdrawDonations(address _to) public payable onlyOwner balanceNotZero{
        (bool success, bytes memory data) = _to.call{value:  address(this).balance}("");
        emit Response(success, data);
    }

    function getBalance() public view returns(uint256){
        return address(this).balance;
    }
}
