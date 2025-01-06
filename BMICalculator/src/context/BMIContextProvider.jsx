import React from "react";
import BMIContext from "./BMIContext.js";
import { useState } from "react";

const BMIContextProvider = ({children}) => {
  const [weight, setWeight] = useState("30")
  const [height, setHeight] = useState("100")

  return(
    <BMIContext.Provider value={{weight, setWeight, height, setHeight}}>
      {children}
    </BMIContext.Provider>
  )
}

export default BMIContextProvider