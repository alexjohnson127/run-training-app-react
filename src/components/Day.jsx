import { useState } from 'react'

function Day(props){

    

    return (
        <div className='day'>
            <h2>{props.dayOfWeek}</h2>
            <div className='underline'></div>
            <h3>{props.date}</h3>
            <p>{props.workout}</p>
            {(props.dayOfWeek == "Sunday") && <h4>Total: {props.totalWeeklyDistance} Miles</h4>}
        </div>
    )
}

export default Day