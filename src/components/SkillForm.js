import { IoIosAdd } from "react-icons/io";

export default function SkillForm(props) {
    const skill = props.skillValue
    const handleChange = props.handleChange
    const submitSkill = props.submitSkill
    return (
        <form className="" action="submit">
            <input type="text" placeholder="Skill" value={skill} onChange={handleChange}/>
            <IoIosAdd style={{verticalAlign:"middle", fontSize:"20px"}} onClick={submitSkill}/>
        </form>
    )
}