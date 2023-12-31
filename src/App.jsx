import { useState } from 'react'
import './App.css'
import Day from './components/Day'
import Week from './components/Week'

function App() {
  const [count, setCount] = useState(0)

  let tempoArr = [" x 1200m @ Tempo"," x Mile @ Tempo", "Mile Tempo Run"]
  let v02Arr = [" x 800m @ Vo2Max", " x 2 min @ Vo2Max", "x 3 min @ Vo2Max", " x 1000m @ Vo2Max", " x 1200m @ Vo2Max"]
  let restArr = ["with 1 min rest", "with 2 min rest", "with 3 min rest"]

  let noDayOff = [.1,.14,.1,.14,.1,.25,.15]
  let oneDayOff = [.14,.14,.12,.16,.14,.28,0]
  let twoDaysOff = [.15, .2, 0, .15, .2, .3, 0]

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

  for (let i = 0; i < weeksOfPlan; i++){
    plan.push(
      <Week 
        weekNum = {i}
        totalWeeks = {weeksOfPlan}
        startDate = {currentDate}
        daysTillStart = {daysTillStart}
        startMileage = {startMileage}
        endMileage = {endMileage}
        weekPlan = {oneDayOff}
        key = {Date.now() * Math.random()}
        />
    )
  }

  return (
    <>
      <div>
        {plan}
      </div>
    </>
  )
}

export default App
