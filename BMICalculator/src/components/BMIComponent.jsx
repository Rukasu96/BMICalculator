import React from "react";
import { useContext } from "react";
import BMIContext from "../context/BMIContext";

function BMIComponent(){

  const {height} = useContext(BMIContext)
  const {weight} = useContext(BMIContext)

  return(
    <div>
      BMI: {height * weight}
    </div>
  )
}

export default BMIComponent;