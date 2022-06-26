// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
  address public minter;
  //add minter changed event
  event MinterChanged(address indexed from, address to);

  constructor() public payable ERC20("Deposit Interest Token", "DIT") {
    minter = msg.sender;
  }

  function passMinterRole(address dbank) public returns (bool) {
  require(msg.sender == minter, "Error: Only owner can pass minter role");
  minter = dbank;

  emit MinterChanged(msg.sender, dbank);
  return true;
  
  }

  function mint(address account, uint256 amount) public {
		require(msg.sender == minter, "Error: msg sender is not minter");
    _mint(account, amount);
	}
}