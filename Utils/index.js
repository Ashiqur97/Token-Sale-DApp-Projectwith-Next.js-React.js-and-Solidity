import {ethers} from "ethers";
import Web3Modal from "web3modal";

import { TOKEN_ADDRESS,TOKEN_ABI,TOKEN_SALE_ABI,TOKEN_SALE_ADDRESS } from "../Context/constants";


export const CheckIfWalletConnected = async() => {
    try {
        if(!window.ethereum) return console.log("Installing MetaMask");

        const accounts = await window.ethereum.request({
            method: "eth_accounts",
        })

        const firstAccount = accounts[0];
        return firstAccount;

    } catch(error) {
        console.log(error)
    }
};

export const connectedWallet = async() => {
    try {
        if(!window.ethereum) return console.log("Installing MetaMask");

        const accounts = await window.ethereum.request({
            method: "eth_accounts",
        })

        const firstAccount = accounts[0];
        window.location.reload();
        return firstAccount;
        
    } catch(error) {
        console.log(error)
    }
}