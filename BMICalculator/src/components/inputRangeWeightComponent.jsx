import { useState, useContext, useMemo} from "react";
import BMIContext from "../context/BMIContext";

function InputRangeWeight({
  minValue,
  maxValue,
  step,
}){

  const [weightValue, setValue] = useState(minValue)
  const {setWeight} = useContext(BMIContext)

  const weightMemo = useMemo(() => setWeight(weightValue),[weightValue])
  
  return(
    <div>
      <div className='label'>
          Weight: {weightValue}kg
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
          value={weightValue}
          onChange={(e) => {
            setValue(e.target.value)
            weightMemo
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

export default InputRangeWeight;