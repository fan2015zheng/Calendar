import React from 'react'
import './DayCube.css'

function DayCube({text, showCircle, bootstrapClass}) {
  const circle = showCircle ? "_circle" : ""
  return (
    <div className={`_cube ${bootstrapClass}`}>
      <div className={circle} >
        <div className="text-center">{text}</div>
      </div>
    </div>
  )
}

export default DayCube