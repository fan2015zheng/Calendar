import React from 'react'
import './YearPicker.css'

function YearPicker() {
  const d = new Date()
  let year = d.getFullYear();
  let preYear = year - 1
  let nextYear = year + 1
  return(<React.Fragment>
    <div className="text-center">
      <button className="btn">&laquo; {preYear}</button> 
      &nbsp;
      <button className="btn btn-info">2020</button> 
      &nbsp;
      <button className="btn">{nextYear} &raquo;</button>
    </div>
  </React.Fragment>)
}

export default YearPicker