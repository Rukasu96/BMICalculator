import React from "react";
import BMIContext from "./BMIContext.js";
import { useState } from "react";

const BMIContextProvider = () => {
  const [weight, setWeight] = useState("0")
  const [height, setHeight] = useState("0")

  return(
    <BMIContext.Provider value={{weight, setWeight, height, setHeight}}>
    </BMIContext.Provider>
  )
}

export default BMIContextProvider