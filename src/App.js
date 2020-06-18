import React, {useState} from 'react'
import './App.css'
import YearPanel from './YearPanel'
import YearPicker from './YearPicker'

function App() {
  const d = new Date()
  let thisYear = d.getFullYear()
  const [year, setYear] = useState(thisYear)

  const nextYear = () => {
    setYear(year + 1)
  }
  const prevYear = () => {
    setYear(year - 1)
  }

  return (<React.Fragment>
    <div className="m-1">
      <YearPicker nextYear={nextYear} prevYear={prevYear} year={year}/>
    </div>
    <h2 className="text-center mb-3">Calendar year {year}</h2>
    <YearPanel year={year}/>
  </React.Fragment>)
}

export default App
