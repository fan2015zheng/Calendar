import React from 'react'
import './YearPicker.css'

function YearPicker() {
  const d = new Date()
  let year = d.getFullYear();
  let preYear = year - 1
  let nextYear = year + 1
  return(<React.Fragment>
    <div className="text-center">
      <a href="#" className="btn">&laquo; {preYear}</a> 
      &nbsp;
      <a href="#" className="btn btn-info">2020</a> 
      &nbsp;
      <a href="#" className="btn">{nextYear} &raquo;</a>
    </div>
  </React.Fragment>)
}

export default YearPicker