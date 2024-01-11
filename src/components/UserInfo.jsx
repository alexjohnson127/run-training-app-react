
function UserInfo(props){

    return (
        <form onSubmit={props.handleSubmit}>
            <label htmlFor="raceDistance">Select Race Distance:</label>
            <select 
                id="raceDistance"
                value={props.userData.raceDistance}
                onChange={props.handleChange}
                name="raceDistance"
            >
                <option value="">-- Choose --</option>
                <option value="5k">5k</option>
                <option value="10k">10k</option>
                <option value="15k">15k</option>
                <option value="Half-Marathon">Half-Marathon</option>
                <option value="Marathon">Marathon</option>
            </select>
            <label htmlFor="startingMileage">Starting Mileage:</label>
            <input 
                type="number"
                value={props.userData.startingMileage}
                onChange={props.handleChange}
                name="startingMileage"
                placeholder="Current Weekly Mileage"
                id="startingMileage"
            />
            <label htmlFor="endingMileage">Goal Mileage:</label>
            <input 
                type="number" 
                id="endingMileage"
                value={props.userData.endingMileage}
                onChange={props.handleChange}
                name="endingMileage"
                placeholder="Goal Weekly Mileage"
            />
            <label htmlFor="numberOfWeeks">Number of Weeks:</label>
            <input 
                type="number" 
                value={props.userData.numberOfWeeks}
                name="numberOfWeeks"
                onChange={props.handleChange}
                placeholder="Length of Plan (Weeks)"
                id="numberOfWeeks"
            />
            <label htmlFor="daysOffPerWeek">Days off per week:</label>
            <input 
                type="number" 
                value={props.userData.daysOffPerWeek}
                name="daysOffPerWeek"
                onChange={props.handleChange}
                placeholder="Days Off Per Week"
                min="0"
                max="3"
                id="daysOffPerWeek"
            />
            <br></br>
            <button id="submit">Submit</button>

        </form>
    )
}

export default UserInfo