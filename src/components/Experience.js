import ExperienceForm from "./ExperienceForm"
import { MdWork } from "react-icons/md"

export default function Experience(props) {
    const experienceForms = props.experience
    const addExperienceForm = props.addExperienceForm
    const deleteExperience = props.deleteExperience
    const updateExperience = props.updateExperience

    return (
        <div className="contentBlock">
            <p className="mainField"><MdWork style={{ verticalAlign: "text-bottom", fontSize: "25px" }} />Experience</p>
            {
                experienceForms.map((data) => {
                    return <ExperienceForm key={data.id} experienceData={data} deleteExperience={deleteExperience} updateExperience={updateExperience} />
                })
            }
            <button onClick={addExperienceForm} className="btn btn-outline-info btn-sm">Add Experience</button>
        </div>
    )
}