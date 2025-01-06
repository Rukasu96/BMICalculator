import React from "react";
import { useContext, useMemo } from "react";
import BMIContext from "../context/BMIContext";

function BMIComponent(){

  const {height} = useContext(BMIContext)
  const {weight} = useContext(BMIContext)

  const calculation = useMemo(() => BMICalculation(weight, height), [weight, height])

  return(
    <div>
      BMI: {calculation}
    </div>
  )
}

const BMICalculation = (weight, height) => {
  const BMI = Math.round((weight / Math.pow((height/100), 2)) * 10) / 10
  const BMIFinal = BMI.toFixed(1)

  return BMIFinal
}

export default BMIComponent;