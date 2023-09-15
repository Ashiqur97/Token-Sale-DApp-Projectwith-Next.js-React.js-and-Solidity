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
            console.log(TOKEN_CONTRACT);

            let tokenBalance;
            if(account){
                tokenBalance = await TOKEN_CONTRACT.balanceOf(account);
            } else {
                tokenBalance = 0;
            }

            const tokenName = await TOKEN_CONTRACT.name();
            const tokenSymbol = await TOKEN_CONTRACT.symbol();
            const tokenTotalSupply = await TOKEN_CONTRACT.totalSupply();
            const tokenStandard = await TOKEN_CONTRACT.standard();
            const tokenHolders = await TOKEN_CONTRACT._userId();
            const tokenOwnerOfContract = await TOKEN_CONTRACT.tokenOwnerOfContract();
            const tokenAddress = await TOKEN_CONTRACT.address;

            const nativeToken = {
                tokenAddress: tokenAddress,
                tokenName: tokenName,
                tokenSymbol: tokenSymbol,
                tokenOwnerOfContract: tokenOwnerOfContract,
                tokenStandard: tokenStandard,
                tokenTotalSupply: ethers.utils.formatEther(tokenTotalSupply.toString()),
                tokenBalance:ethers.utils.formatEther(tokenBalance.toString()),
                tokenHolders: tokenHolders.toNumber(),
            };

            setNativeToken(nativeToken);

            const getTokenHolder = await TOKEN_CONTRACT.getTokenHolder();
            setTokenHolders(getTokenHolder);

            if(account) {
                const getTokenHolderData = await TOKEN_CONTRACT.getTokenHolderData(
                    account
                );
                const currentHolder = {
                    tokenId: getTokenHolderData[0].toNumber(),
                    from: getTokenHolderData[1],
                    to: getTokenHolderData[2],
                    totalToken: ethers.utils.formatEther(getTokenHolderdata[3].toString()),
                    tokenHolder: getTokenHolderdata[4],
                };
    
                setCurrentHolder(currentHolder);
            }

            const TOKEN_SALE_CONTRACT = await connectingTOKEN_SALE_CONTRACT();
            const tokenPrice = await TOKEN_SALE_CONTRACT.tokenPrice();
            const tokenSold = await TOKEN_SALE_CONTRACT.tokensSold();
            const tokenSaleBalance = await TOKEN_CONTRACT.balanceOf(
                "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
            );

            const tokenSale = {
                tokenPrice: ethers.utils.formatEther(tokenPrice.toString()),
                tokenSold: tokenSold.toNumber(),
                tokenSaleBalance: ethers.utils.formatEther(tokenSaleBalance.toString()),
            };

            setTokenSale(tokenSale);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchInitialData();
    },[]);

    const buyToken = async(nToken) => {
        try {
            const amount = ethers.utils.parseUnits(nToken.toString(),"ether");
            const contract = await connectingTOKEN_SALE_CONTRACT();

            const buying = await contract.buyToken(nToken,{
                value:amount.toString(),
            });
            
            await buying.wait();
            console.log(buying);
            window.location.reload();

        } catch (error) {
            console.log(error)
        }
    };

    return (
        <StateContext.Provider value={{TOKEN_ICO}}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);