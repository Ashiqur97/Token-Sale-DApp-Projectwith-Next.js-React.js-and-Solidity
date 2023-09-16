import React from "react";

import {useStateContext} from "../Context/index";
import {    
  About,
  Arrowup,
  Banner,
  Blog,
  Client,
  Contact,
  Distribution,
  Faq,
  Footer,
  Header,
  Loader,
  MobileApp,
  Service,
  Team,
  TimeLine,
  TokenSale,
}
   from "../Components/index"


const index = () => {
  const { 
    transferNativeToken,
    buyToken,
    connectedWallet,
    setAddress,
    TOKEN_ICO,
    currentHolder,
    tokenSale,
    tokenHolders,
    nativeToken,
    balance,
    address
  } = useStateContext();
  return(
    <div className="v_dark">
      <Header 
      address={address} 
      setAddress={setAddress} 
      connectedWallet={connectedWallet}
      />
      <Banner transferNativeToken={transferNativeToken} />
      <Service/>
      <About/>
      <TokenSale buyToken={buyToken} tokenSale={tokenSale}/>
      <Distribution />
      <MobileApp />
      <Team />
      <Faq />
      <Contact />
      <Footer />

    </div>
  )
}

export default index;