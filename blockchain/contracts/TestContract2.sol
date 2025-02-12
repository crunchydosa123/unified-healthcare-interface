// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract TestContract2 {
  string[] public items;

  function addItem(string memory _item) public{
    items.push(_item);
  }

  function getItems() public view returns(string[] memory){
    return items;
  }

  function getItemCount() public view returns(uint){
    return items.length;
  }
}
