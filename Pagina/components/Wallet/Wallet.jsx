import Web3 from "web3";

import { BrowserProvider } from "ethers";
import { EAS, SchemaEncoder } from "@ethereum-attestation-service/eas-sdk";

const handleConnectWallet = () => {
  const web3 = new Web3(window.ethereum);

  if (typeof window.ethereum !== "undefined") {
    window.ethereum
      .enable()
      .then(function (accounts) {
        console.log("MetaMask enabled!");
      })
      .catch(function (error) {
        console.error("Error enabling MetaMask:", error);
      });
  } else {
    console.error("MetaMask no está instalado.");
  }

  if (window.ethereum) {
    web3.eth
      .getAccounts()
      .then(function (accounts) {
        console.log("Accounts:", accounts);
      })
      .catch(function (error) {
        console.error("Error getting accounts:", error);
      });
  } else {
    console.error("MetaMask is not installed.");
  }
};
