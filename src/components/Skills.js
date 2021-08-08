import {useState} from 'react'
import SkillForm from "./SkillForm"
import { FaRegTimesCircle } from "react-icons/fa"
import { GiSkills } from "react-icons/gi";

export default function Skills(props){
    const addSkill = props.addSkill
    const removeSkill = props.removeSkill
    const skillList = props.skills
    const [skill, setSkill] = useState("")

    function handleChange(e){
        setSkill(e.target.value)
    }

    function handleSubmitClick(e){
        addSkill(skill)
        setSkill("")
    }

    function handleRemoveClick(skill){
        removeSkill(skill)
    }

    return(
        <div className="contentBlock">
            <p className="mainField"><GiSkills style={{ verticalAlign: "text-bottom", fontSize: "25px" }} />Skills and Interests</p>
            <div className="skillContainer">
                {
                    skillList.map((skill, index) => {
                        return <p className="skillItem" key={index}>{skill} <FaRegTimesCircle onClick={()=>(handleRemoveClick(skill))}/> </p>
                    })
                }
            </div>
           <SkillForm skillValue={skill} handleChange={handleChange} submitSkill={handleSubmitClick}/>
        </div>
    )
}