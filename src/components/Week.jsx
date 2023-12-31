import { useState } from "react";
import Day from "./Day";

function Week(props){
    const DAYMS = 3600*24*1000 //number of miliseconds in a day
    let daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    let monthsOfYear = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    let workoutArr = []
    let weekNumber = props.weekNum
    let currentWeekMileage = props.startMileage + (props.endMileage - props.startMileage) * (props.weekNum / (props.totalWeeks - 1))
    
    for (let i = 0; i < 7; i++){
        let tempDate = new Date(Date.now() + props.daysTillStart * DAYMS + (weekNumber * 7 * DAYMS) + i * DAYMS)
        let months = tempDate.getMonth()
        let dayOfMonth = tempDate.getDate()
        let dailyDistance = Math.round(props.weekPlan[i] * currentWeekMileage)
        let year = tempDate.getFullYear()

        workoutArr.push(
            <Day
                dayOfWeek={daysOfWeek[(i + 1) % 7]}
                date={monthsOfYear[months] + " " + dayOfMonth}
                workout={dailyDistance + " miles"}
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