export default function EducationForm(props){
    const educationData = props.educationData
    const deleteEducation = props.deleteEducation
    const updateEducation = props.updateEducation

    function handleChange(e){
        const elementToChange = e.target.name;
        const value = e.target.value;
        const targetId = props.educationData.id

        updateEducation(targetId, elementToChange, value)
    }

    function handleDeleteClick(e){
        e.preventDefault()
        deleteEducation(props.educationData.id)
    }

    return (
        <form action="submit" className="educationForm">
            <input className="inputField mainField" type="text" name="school" placeholder="School name" value={educationData.school} onChange={handleChange} required={true} />
            <input className="inputField" type="text" name="degree" placeholder="Degree" value={educationData.degree} onChange={handleChange} required={true} />
            <input className="inputField" type="text" name="subject" placeholder="Subject" value={educationData.subject} onChange={handleChange} required={true} />
            <input className="inputField" type="text" name="city" placeholder="City" value={educationData.city} onChange={handleChange} required={true} />
            <input className="inputField" type="text" name="from" placeholder="From" value={educationData.from} onChange={handleChange} required={true} />
            <input className="inputField" type="text" name="to" placeholder="To" value={educationData.to} onChange={handleChange} required={true} />
            <button onClick={handleDeleteClick} className="btn btn-outline-danger btn-sm">Delete</button> {/*can be component?*/}
        </form>
    )
}