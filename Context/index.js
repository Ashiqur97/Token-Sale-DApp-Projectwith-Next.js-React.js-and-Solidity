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
    return (
        <StateContext.Provider value={{TOKEN_ICO}}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);