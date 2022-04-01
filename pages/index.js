import styles from "../styles/Home.module.css";
import Web3Modal from "web3modal";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { abi } from "../constants/abi";

// Syntax to use Web3 Modal library
let web3Modal;

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      rpc: { 42: process.env.NEXT_PUBLIC_RPC_URL }, // required
    },
  },
};

if (typeof window !== "undefined") {
  web3Modal = new Web3Modal({
    cacheProvider: false,
    providerOptions, // required
  });
}

export default function Home() {

  // state to represent whether a wallet is connected to the site
  const [isConnected, setIsConnected] = useState(false);
  // state to represent whether a user has a Metamask wallet
  const [hasMetamask, setHasMetamask] = useState(false);
  // represents whether the store number function was executed
  const [executed, setExecuted] = useState(false);
  // Sets the account that is connected to the site
  const [signer, setSigner] = useState(undefined);
  // Stores the value that the user inputs
  const [storedVal, setStoredVal] = useState(0);

  // uses the window vars to see if Metamack has been installed
  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setHasMetamask(true);
    }
  });

  // Connects the wallet to the site using web3Modal
  async function connect() {
    if (typeof window.ethereum !== "undefined") {
      try {
        const web3ModalProvider = await web3Modal.connect();
        setIsConnected(true);
        const provider = new ethers.providers.Web3Provider(web3ModalProvider);
        setSigner(provider.getSigner());
      } catch (e) {
        console.log(e);
      }
    } else {
      setIsConnected(false);
    }
  }

  // Executes the function by storing the contractAddress and signer
  // Gets the ABI (manually stored in the constants folder)
  async function execute() {
    if (typeof window.ethereum !== "undefined") {
      const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
      const contract = new ethers.Contract(contractAddress, abi, signer);
      try {
        await contract.store(storedVal);
        console.log("happening?", storedVal)
        setExecuted(true)
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Please install MetaMask");
    }
  }

  // Retrieves the stored value from the contract
  async function showStored() {
    if (typeof window.ethereum !== "undefined") {
      const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
      const contract = new ethers.Contract(contractAddress, abi, signer);
      try {
        let value = await contract.retrieve();
        value = value.toNumber();
        console.log(value)
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Please install MetaMask");
    }
  }


  return (
    <div className="mid">
      {hasMetamask ? (
        isConnected ? (
          <p className="mid">Connected!</p>
        ) : (
          <button className="mid" onClick={() => connect()}>Connect</button>
        )
      ) : (
        "Please install metamask"
      )}
      {isConnected ? 
        (
          <div className="mid">
            <form >
              <label>Enter Your Favorite Number:
                <input
                  type="text" 
                  onChange={(e) => setStoredVal(e.target.value)}
                />
              </label>
            </form>
            <button className="mid" onClick={() => execute()}>Execute</button> 
          </div>
        
        ) : (
        ""
        )
      }

      {executed ? 
        <div>
          <button className="mid" onClick={() => showStored()}>My Value</button> 
        </div>
        : 
        ""
      }

    </div>
  );
}