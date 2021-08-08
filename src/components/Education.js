import EducationForm from "./EducationForm"
import { MdSchool } from "react-icons/md"

export default function Education(props){
    const educationForms = props.education
    const addEducationForm = props.addEducationForm

    return(
        <div className="contentBlock">
            <p className="mainField"><MdSchool style={{ verticalAlign: "text-bottom", fontSize: "25px" }} />Education</p>
            {
                educationForms.map((data) =>{
                    return <EducationForm key={data.id} educationData={data} deleteEducation={props.deleteEducation} updateEducation={props.updateEducation}/>
                })
            }
            <button onClick={addEducationForm} className="addFormButton">Add Education</button> {/*can be component?*/}
        </div>
    )
}