import React from "react";

import {useStateContext} from "../Context/index";

const index = () => {
  const {TOKEN_ICO,transferNativeToken} = useStateContext();
  return(
    <div>
      <h1>{TOKEN_ICO}</h1>
      <button onClick={() => transferNativeToken()}>TRANSFER</button>
    </div>
  )
}

export default index;