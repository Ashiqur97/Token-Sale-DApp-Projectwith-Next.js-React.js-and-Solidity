import React,{useState,useEffect,createContext,useContext} from 'react'
import { ethers } from 'ethers'

import {
    CheckIfWalletConnected,
    connectedWallet,
    connectingTOKENCONTRACT,
    getBalance,
    connectingTOKEN_SALE_CONTRACT
} from "../Utils/index";

const StateContext = createContext();

export const StateContextProvider = ({children}) => {
    const TOKEN_ICO = "TOKEN SALL DAPP";

    const [address,setAddress] = useState("");
    const [balance,setBalance] = useState("");
    const [nativeToken,setNativeToken] = useState("");
    const [tokenHolders,setTokenHolders] = useState([]);
    const [tokenSale,setTokenSale] = useState("");
    const [currentHolder,setCurrentHolder] = useState("");

    const fetchInitialData = async () => {
        try {
            const account = await CheckIfWalletConnected();

            const balance = await getBalance();
            setBalance(ethers.utils.formatEther(balance.toString()));
            setAddress(account);

            const TOKEN_CONTRACT = await connectingTOKENCONTRACT();

            let tokenbalance;
            if(account){
                tokenbalance = await TOKEN_CONTRACT.balanceOf(account);
            } else {
                tokenbalance = 0;
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <StateContext.Provider value={{TOKEN_ICO}}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);