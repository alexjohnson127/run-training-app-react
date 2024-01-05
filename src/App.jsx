import { useState } from 'react'
import './App.css'
import Day from './components/Day'
import Week from './components/Week'
import UserInfo from './components/UserInfo'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  const [userData, setUserData] = useState(
    {
      raceDistance:"",
      startingMileage:30,
      endingMileage:40,
      numberOfWeeks:8,
      daysOffPerWeek:1,
      workouts: false,
      currentPr: "00:00:00",
      formSubmitted: false
    }
  )

  function handleChange(event){
    const {name, value} = event.target 

    setUserData(prev => {
      return {
        ...prev,
        [name]:value
      }
    })
  }

  function handleSubmit(event){
    event.preventDefault()
    setUserData(prev => {
      return {
        ...prev,
        formSubmitted: true
      }
    })
  }

  let tempoArr = [" x 1200m @ Tempo"," x Mile @ Tempo", "Mile Tempo Run"]
  let v02Arr = [" x 800m @ Vo2Max", " x 2 min @ Vo2Max", "x 3 min @ Vo2Max", " x 1000m @ Vo2Max", " x 1200m @ Vo2Max"]
  let restArr = ["with 1 min rest", "with 2 min rest", "with 3 min rest"]

  let noDayOff = [.1,.14,.1,.14,.1,.25,.15]
  let oneDayOff = [.14,.14,.12,.16,.14,.28,0]
  let twoDaysOff = [.15, .2, 0, .15, .2, .3, 0]
  let threeDaysOff = [.25, 0, .15, .2, 0, .4, 0]
  let chosenPlan = oneDayOff

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
  let daysTillStart = 0

  if (currentDate.getDay() > 1){
    daysTillStart = currentDate.getDay() - 1
  }
  else if(currentDate.getDay() < 1){
    daysTillStart = 1
  }

  
  let weeksOfPlan = 8
  let plan = []
  let startMileage = 40
  let endMileage = 60

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
        key = {Date.now() * Math.random()}
        />
    )
  }

  return (
    <>
      <div>
        <Navbar />
        <UserInfo 
          userData = {userData}
          handleChange = {handleChange}
          handleSubmit = {handleSubmit}
        />
        {userData.formSubmitted && <div>
          {plan}
        </div>}
        
      </div>
    </>
  )
}

export default App
