export default function ExperienceForm(props) {
    const experienceData = props.experienceData
    const deleteExperience = props.deleteExperience
    const updateExperience = props.updateExperience

    function handleChange(e) {
        const elementToChange = e.target.name;
        const value = e.target.value;
        const targetId = props.experienceData.id

        updateExperience(targetId, elementToChange, value)
    }

    function handleDeleteClick(e) {
        e.preventDefault()
        deleteExperience(props.experienceData.id)
    }

    return (
        <form action="submit" className="experienceForm">
            <input className="inputField mainField" type="text" name="position" placeholder="Position" value={experienceData.position} onChange={handleChange} required={true} />
            <input className="inputField" type="text" name="company" placeholder="Company" value={experienceData.company} onChange={handleChange} required={true} />
            <input className="inputField" type="text" name="from" placeholder="From" value={experienceData.from} onChange={handleChange} required={true} />
            <input className="inputField" type="text" name="to" placeholder="To" value={experienceData.to} onChange={handleChange} required={true} />
            <button onClick={handleDeleteClick} className="addFormButton">Delete</button>
        </form>
    )
}