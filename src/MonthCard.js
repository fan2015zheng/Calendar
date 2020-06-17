import React from 'react'
import './MonthCard.css'
import DayCube from './DayCube'
import Utils from './Utils.js'

function MonthCard({year, month, bootstrapClass}) {
return (
  <div className={"_card " + bootstrapClass}>
    <table>
      <tbody>
        <MonthRow cubes={HeaderCubes} />

        {[1,2,3,4,5].map((row) => {
        const cubes = []
        for(let day=0; day<7; day++) {
          const cube =  Utils.CalculateCube(year, month, day, row)
          cubes.push(cube)
        }
        return <MonthRow cubes={cubes} key={row}/>
    })}
       </tbody>
    </table>
  </div>
)
}

function MonthRow({cubes}) {
  return (
    <tr>
      {cubes.map((cube) => {
        return (
          <td key={cube.key}>
            <DayCube text={cube.text} showCircle={cube.isToday} />
          </td>
        )
      })}
    </tr>
  )
}

export default MonthCard

const HeaderCubes = [
  {key:0, text:"Su"},
  {key:1, text:"Mo"},
  {key:2, text:"Tu"},
  {key:3, text:"We"},
  {key:4, text:"Th"},
  {key:5, text:"Fr"},
  {key:6, text:"Sa"},
]



