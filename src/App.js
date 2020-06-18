import React from 'react'
import './App.css'
import YearPanel from './YearPanel'
import YearPicker from './YearPicker'

function App() {
  const d = new Date()
  let year = d.getFullYear();
  return (<React.Fragment>
    <h2 className="text-center">Calendar</h2>
    <div className="mb-2">
      <YearPicker />
    </div>
    <YearPanel year={year}/>
  </React.Fragment>)
}

export default App
