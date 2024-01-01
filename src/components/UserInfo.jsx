
function UserInfo(props){

    function handleSubmit(event){
        event.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
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
            <input 
                type="number"
                value={props.userData.startingMileage}
                onChange={props.handleChange}
                name="startingMileage"
                placeholder="Current Weekly Mileage"
            />
            <input 
                type="number" 
                value={props.userData.endingMileage}
                onChange={props.handleChange}
                name="endingMileage"
                placeholder="Goal Weekly Mileage"
            />
            <input 
                type="number" 
                value={props.userData.numberOfWeeks}
                name="numberOfWeeks"
                onChange={props.handleChange}
                placeholder="Length of Plan (Weeks)"
            />
            <input 
                type="number" 
                value={props.userData.daysOffPerWeek}
                name="daysOffPerWeek"
                onChange={props.handleChange}
                placeholder="Days Off Per Week"
                min="0"
                max="2"
            />

        </form>
    )
}

export default UserInfo