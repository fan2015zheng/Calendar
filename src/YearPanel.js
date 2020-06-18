import React from 'react'
import './YearPanel.css'
import MonthCard from './MonthCard'

function YearPanel({year}) {
  return (<React.Fragment>
    <h2 className="text-center">{`Calendar ${year}`}</h2>
    <div className="container">
      <div className="row">
        <div className={[
          "col-sm-10 offset-sm-1", 
          "col-lg-8 offset-lg-2",
          "col-xl-6 offset-xl-3",
          "d-flex justify-content-center"
          ].join(" ")}>
          <div className="container">
            <div className="row">
              {
                [0,1,2,3,4,5,6,7,8,9,10,11].map((m) => {
                  return (
                    <MonthCard 
                      bootstrapClass={[
                        "col-sm-6",
                        "col-md-4",
                        "d-flex justify-content-center"
                      ].join(" ")} 
                      year={year} month={m} key={m} />
                  )
                })
              } 
            </div>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>)
}

export default YearPanel