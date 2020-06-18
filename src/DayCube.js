import React from 'react'
import './DayCube.css'

function DayCube({text, showCircle}) {
  const circle = showCircle ? "_circle" : ""
  return (
    <div className="_cube">
      <div className={circle}>
        <div className="text-center">
          {text}
        </div>
      </div>
    </div>
  )
}

export default DayCube