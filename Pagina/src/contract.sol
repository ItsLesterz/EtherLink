// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.24;



contract loan{
    struct Payment{
        uint id;
        uint amount;
        string message;
        uint timestamp;
    }

    uint loan_amount;
    uint amount=0;
    uint interest;
    uint repayTime;
    uint repayed=0;
    address repayer; //Quien pide el prestamo
    address payable borrower;  //
    uint quote;
    uint id=0;

    Payment[] public paymentMap;

    constructor (uint _interest,uint _loan_amount, uint _timestamp,address _repayer,address payable  _borrower ) {

        loan_amount=_loan_amount;
        interest=_interest;
        repayTime=_timestamp;
        repayer=_repayer;
        borrower=_borrower;
        repay("Primer Repay");
    }

    function repay(string memory _msg) public payable {
        amount+=msg.value;
        repayed+=amount;
        (bool sent, bytes memory data) = borrower.call{value: msg.value}("");
        require(sent, "Failed to send Ether");
        //Debemos que asegurarnos que el deposito nos se salg de la fecha establecida
    }

    












}