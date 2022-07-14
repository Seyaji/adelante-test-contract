// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

struct AppStorage {
  uint256 numberStore;
  uint256[] storeNumbers;
  mapping(address => uint256) storeBalance;
}