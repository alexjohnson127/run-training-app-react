import { useState,  useEffect } from "react";
import Day from "./Day";

function Week(props){
    const DAYMS = 3600*24*1000 //number of miliseconds in a day
    let daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    let monthsOfYear = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    let workoutArr = []
    let weekNumber = props.weekNum
    let weeklyDistance = 0
    let currentWeekMileage = props.startMileage + (props.endMileage - props.startMileage) * (props.weekNum / (props.totalWeeks - 1))
    let tempoIntervalArr = [
        " x 800m @ Tempo", 
        " x 1200m @ Tempo",
        " x Mile @ Tempo w/ 60-90 seconds rest", 
        " x 2 Mile @ Tempo w/ 2-3 minutes rest"
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
    for (let i = 0; i < 7; i++){
        let tempDate = new Date(Date.now() + props.daysTillStart * DAYMS + (weekNumber * 7 * DAYMS) + i * DAYMS)
        let months = tempDate.getMonth()
        let dayOfMonth = tempDate.getDate()
        let dailyDistance = Math.round(props.weekPlan[i] * currentWeekMileage)
        let workoutDisplayed = dailyDistance + " miles"
        if (props.workoutOption && i == 1){
            workoutDisplayed = "4" + tempoIntervalArr[Math.floor((weekNumber / props.totalWeeks)*4)]
        }
        else {
            workoutDisplayed = dailyDistance + " miles"
        }
        let year = tempDate.getFullYear()
        //props.updateDailyInfo(dayOfMonth, dailyDistance, daysOfWeek[(i+1) % 7])

        weeklyDistance += dailyDistance

        workoutArr.push(
            <Day
                dayOfWeek={daysOfWeek[(i + 1) % 7]}
                date={monthsOfYear[months] + " " + dayOfMonth}
                workout={workoutDisplayed}
                totalWeeklyDistance={weeklyDistance}
                workoutOption = {props.workoutOption}
                key={months * 100000 + dayOfMonth * 1000 + year}
            />
        )
    }
    
    return(
        <div className="week">
            {workoutArr}
        </div>  
    )
}

export default Week