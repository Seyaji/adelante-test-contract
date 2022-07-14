// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import './Storage.sol';

contract Test {

  AppStorage internal s;

  function hello() public pure returns(string memory) {
    return "Hello";
  }

  function returnSum(uint256 _a, uint256 _b) public pure returns(uint256) {
    return _a + _b;
  }

  function storeNumber(uint256 _number) public {
    s.numberStore = _number;
  }

  function getNumber() public view returns(uint256) {
    return s.numberStore;
  }

  function addBalance() public payable {
    s.storeBalance[msg.sender] += msg.value;
  }

  function getBalance() public view returns(uint256) {
    return s.storeBalance[msg.sender];
  }

  function withdrawBalance(uint256 amount) public payable {
    s.storeBalance[msg.sender] -= amount;
    payable(msg.sender).transfer(amount);
  }
}