import { useState, useContext} from "react";
import BMIContext from "../context/BMIContext";

function InputRangeHeight({
  minValue,
  maxValue,
  step,
}){

  const [heightValue, setValue] = useState(minValue)
  const {setHeight} = useContext(BMIContext)

  return(
    <div>
      <div className='label'>
          Height: {heightValue}cm
      </div>
      <div className='range'>
        <div className='value'>
          {minValue}
        </div>
        <div>
          <input type="range"
          min = {minValue}
          max = {maxValue}
          step = {step}
          value={heightValue}
          onChange={(e) => {
            setValue(e.target.value)
            setHeight(heightValue)
          }}
          />
        </div>
        <div className='value'>
          {maxValue}
        </div>
      </div>
    </div>
  )
}

export default InputRangeHeight;