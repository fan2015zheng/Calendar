
export default class Utils {
   static CalculateCube = CalculateCube
}

function CalculateCube (year, month, day, row) {
  return {
    key: year+"|"+month+"|"+day+"|"+row,
    text: getDate(year, month, day, row),
    isToday: isToday(year, month, day, row)
  }
}

function isToday(year, month, day, row)
{
  let d = new Date();
  let yearToday = d.getFullYear()
  let monthToday = d.getMonth()
  let dayToday = d.getDay()
  let dateToday = d.getDate()
  return (
    year === yearToday && 
    month === monthToday &&
    day === dayToday &&   // only needed to reduce calls to getDate()
    getDate(year, month, day, row) === dateToday
  )

}

function getDate(year, month, day, row)
{
  var date = day + 1 + (row - 1) * 7 - firstDayOfMonth(year, month)
  if (date <= 0 || date > daysInMonth(year, month))
  {
    date = ""
  }
  return date
}

function firstDayOfMonth(year, month) 
{
   var d = new Date(year, month, 1)
   return d.getDay()
}

function daysInFeburary(year)
{
    var d = new Date(year, 1, 29)
    var month = d.getMonth()
    if (month === 2)
    {
        return 29
    }
    return 28
}

function daysInMonth(year, month){
    var array = [31, daysInFeburary(year),31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return array[month];
}