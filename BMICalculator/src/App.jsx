import { useState } from 'react'
import './App.css'
import { InputRangeHeight, InputRangeWeight, BMIComponent } from './components'
import BMIContextProvider from './context/BMIContextProvider.jsx'

function App() {
  
  return (
    <>
      <BMIContextProvider>
        <div className='rangeContainer'>
          <InputRangeWeight
            minValue="30"
            maxValue="150"
            step="0.1"
          />
          <br/>
          <InputRangeHeight
            minValue="100"
            maxValue="220"
            step="1"
          />
          <BMIComponent
          />
        </div>
      </BMIContextProvider>
    </>
  )
}

export default App
