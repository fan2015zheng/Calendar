import React from 'react'
import './YearPicker.css'

function YearPicker({year, nextYear, prevYear}) {
  return(<React.Fragment>
    <div className="text-center">
      <button onClick={prevYear} className="btn">&laquo; {year - 1}</button> 
      &nbsp;
      <button className="btn btn-info">{year}</button> 
      &nbsp;
      <button onClick={nextYear} className="btn">{year + 1} &raquo;</button>
    </div>
  </React.Fragment>)
}

export default YearPicker