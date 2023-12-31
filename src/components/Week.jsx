import { useState } from "react";
import Day from "./Day";

function Week(props){
    const DAYMS = 3600*24*1000
    let daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    let monthsOfYear = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    let workoutArr = []
    let weekNumber = props.weekNum
    for (let i = 0; i < 7; i++){
        let tempDate = new Date(Date.now() + props.daysTillStart * DAYMS + (weekNumber * 7 * 3600 * 24 * 1000) + i * DAYMS)
        let months = tempDate.getMonth()
        let dayOfMonth = tempDate.getDate()

        workoutArr.push(
            <Day
                dayOfWeek={daysOfWeek[(i + 1) % 7]}
                date={monthsOfYear[months] + " " + dayOfMonth}
                workout="12 miles easy"
                key={Date.now()*Math.random()}
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