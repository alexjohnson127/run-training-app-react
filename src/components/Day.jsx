import { useState } from 'react'

function Day(props){
    return (
        <div className='day'>
            <h2>{props.dayOfWeek}</h2>
            <h3>{props.date}</h3>
            <p>{props.workout}</p>
        </div>
    )
}

export default Day