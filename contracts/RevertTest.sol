//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.7;

error MY_CUSTOM_ERROR ();

contract RevertTest {

    function revert1() public payable {
        revert("Reverted 1");
    }

    function revert2() public payable {
        revert("Reverted 2");
    }

    function revert3() public payable {
        revert("Reverted 3");
    }

    function revert4() public payable {
        revert("Reverted 4");
    }

    function revert5() public payable {
        revert MY_CUSTOM_ERROR();
    }
}