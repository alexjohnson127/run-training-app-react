import { useState } from 'react'
import './App.css'
import Day from './components/Day'
import Week from './components/Week'
import UserInfo from './components/UserInfo'
import Navbar from './components/Navbar'

function App() {
  
  const DAYMS = 3600*24*1000 //number of miliseconds in a day
  const daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
  const monthsOfYear = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

  let noDayOff = [.1,.14,.1,.14,.1,.25,.15]
  let oneDayOff = [.14,.14,.12,.16,.14,.28,0]
  let twoDaysOff = [.15, .2, 0, .15, .2, .3, 0]
  let threeDaysOff = [.25, 0, .15, .2, 0, .4, 0]
  let chosenPlan = oneDayOff

  let tempoIntervalArr = [
    {name:" x 800m @ Tempo",
    distance: .5},
    {name: " x 1200m @ Tempo",
    distance: .75},
    {name: " x Mile @ Tempo w/ 60-90 seconds rest", 
    distance: 1},
    {name: " x 2 Mile @ Tempo w/ 2-3 minutes rest",
    distance: 2}
  ]
  let vo2Arr = [
    " x 800m @ Vo2Max w/ 2 minutes rest", 
    " x 1000m @ Vo2Max w/ 3 minutes rest", 
    " x 1200m @ Vo2Max w/ 4 minutes rest", 
    " x mile @ Vo2Max w/ 4 minutes rest"
  ]
  let straightWorkArr = [
    " mile tempo", 
    " mile progression", 
    " mile steady run"
  ]
  let repArr = [
    " x 100m @ Rep Pace w/ 100m jog",
    " x 200m @ Rep Pace w/ 200m jog",
    " x 300m @ Rep Pace w/ 300m jog",
    " x 400m @ Rep Pace w/ 400m jog"
  ]
  let restArr = ["1 min rest", "2 min rest", "3 min rest"]

  const [editData, setEditData] = useState(true)
  const [dailyInfo, setDailyInfo] = useState([])

  const [userData, setUserData] = useState(
    {
      raceDistance:"",
      startingMileage:30,
      endingMileage:40,
      numberOfWeeks:8,
      daysOffPerWeek:1,
      workoutOption: false,
      currentPr: "00:00:00",
      formSubmitted: false,
      //dayOff: "",
      //daysOff: [false, false, false, false, false, false, false]
    }
  )

  

  function handleChange(event){
    const {name, value} = event.target 
    let totalWorkoutArr = []
    //updating users preferences in userData state
    setUserData(prev => {
      return {
        ...prev,
        [name]: value 
      }
    })
    /** 
    let currentDate = new Date()
    let daysTillStart = 0
    if (currentDate.getDay() > 1){
      daysTillStart = 8 - currentDate.getDay() 
    }
    else if(currentDate.getDay() < 1){
      daysTillStart = 1
    }

    switch(userData.daysOffPerWeek){
      case '0': 
        chosenPlan = noDayOff
        break
      case '1':
        chosenPlan = oneDayOff
        break
      case '2':
        chosenPlan = twoDaysOff
        break
      case '3':
        chosenPlan = threeDaysOff
        break
      default:
        chosenPlan = oneDayOff
    }
    //building array with each days workout info
    for(let i = 0; i < userData.numberOfWeeks; i++){
      let weeklyDistance = 0
      let currentWeekMileage = startMileage + (endMileage - startMileage) * (i / userData.numberOfWeeks)
      for(let j=0; j < 7; j++){
        let tempDate = new Date(Date.now() + daysTillStart * DAYMS + (i * 7 * DAYMS) + j * DAYMS)
        let months = tempDate.getMonth()
        let dayOfMonth = tempDate.getDate()
        let dailyDistance = Math.round(chosenPlan[i] * currentWeekMileage)
        weeklyDistance += dailyDistance
        if(userData.workoutOption && (i == 1)){
          totalWorkoutArr.push({
            display: "1 mile warmup \n" + { dailyDistance } - 2 / tempoIntervalArr[Math.floor((weekNumber / props.totalWeeks) * 4)].distance + "\n1 Mile Cooldown",
            date: {String(dayOfMonth)}
          }
        
      }
    }

    setDailyInfo(totalWorkoutArr)
    */
  }

  function toggleEdit(){
    setEditData(prev => !prev)
  }

  function handleSubmit(event){
    event.preventDefault()
    setEditData(prev => !prev)
    setUserData(prev => {
      return {
        ...prev,
        formSubmitted: true
      }
    })
  }
  //let tempoArr = [" x 1200m @ Tempo"," x Mile @ Tempo", "Mile Tempo Run"]
  //let v02Arr = [" x 800m @ Vo2Max", " x 2 min @ Vo2Max", "x 3 min @ Vo2Max", " x 1000m @ Vo2Max", " x 1200m @ Vo2Max"]
  //let restArr = ["with 1 min rest", "with 2 min rest", "with 3 min rest"]

  

  switch(userData.daysOffPerWeek){
    case '0': 
      chosenPlan = noDayOff
      break
    case '1':
      chosenPlan = oneDayOff
      break
    case '2':
      chosenPlan = twoDaysOff
      break
    case '3':
      chosenPlan = threeDaysOff
      break
    default:
      chosenPlan = oneDayOff
  }
  console.log(userData)

  let currentDate = new Date()
  console.log(currentDate.getDay())
  let daysTillStart = 0

  if (currentDate.getDay() > 1){
    daysTillStart = 8 - currentDate.getDay() 
  }
  else if(currentDate.getDay() < 1){
    daysTillStart = 1
  }

  let plan = []
  
  for (let i = 0; i < Number(userData.numberOfWeeks); i++){
    plan.push(
      <Week 
        weekNum = {i}
        totalWeeks = {Number(userData.numberOfWeeks)}
        startDate = {currentDate}
        daysTillStart = {daysTillStart}
        startMileage = {Number(userData.startingMileage)}
        endMileage = {Number(userData.endingMileage)}
        weekPlan = {chosenPlan}
        updateDailyInfo = {setDailyInfo}
        workoutOption = {Boolean(userData.workoutOption)}
        workoutPlan = {dailyInfo}
        key = {Date.now() * Math.random()}
        />
    )
  }
  //console.log(dailyInfo)

  return (
    <>
      <div className='main-app'>
        <Navbar />
        <div className='spacer-div'></div>
        {userData.formSubmitted && <button onClick={toggleEdit}>Edit Entries</button>}
        {editData && <UserInfo 
          userData = {userData}
          handleChange = {handleChange}
          handleSubmit = {handleSubmit}
        />}
        
        {userData.formSubmitted && <div className='plan-wrapper'>
          {plan}
        </div>}
        
      </div>
    </>
  )
}

export default App
