import React,{useState,useEffect,createContext,useContext} from 'react'
import {ethers} from "ethers";

import {
    CheckIfWalletConnected,
    connectWallet,
    connectingTOKENCONTRACT,
    getBalance,
    connectingTOKENCONTRACT 
} from "../Utils/index.js";

const StateContext = createContext();

export const StateContextProvider = ({children}) => {
    const TOKEN_ICO = "TOKEN SALL DAPP";

    return <StateContextProvider value={{TOKEN_ICO}}>
        {children}
    </StateContextProvider>
}
