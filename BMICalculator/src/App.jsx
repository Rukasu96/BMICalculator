import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
    <div className='rangeContainer'>
      <div className='label'>
          Weight: 50kg
      </div>
      <div className='range'>
        <div className='value'>
          30
        </div>
        <div>
          <input type="range"
          min = "30"
          max = "150"
          step = "0.1"
          />
        </div>
        <div className='value'>
          150
        </div>
      </div>
      <br />
      <div className='label'>
          Height: 150cm
      </div>
      <div className='range'>
        <div className='value'>
          100
        </div>
        <div>
          <input type="range"
          min = "100"
          max = "220"
          step = "1"
          />
        </div>
        <div className='value'>
          220
        </div>
      </div>
      <div>
      BMI: ---
      </div>
    </div>
    </>
  )
}

export default App
