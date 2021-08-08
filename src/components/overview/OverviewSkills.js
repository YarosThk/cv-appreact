import { GiSkills } from "react-icons/gi";

export default function OverviewSkills(props) {
    const skillList = props.skills
    return (
        <div className="contentBlock">
            <p className="mainField"><GiSkills style={{ verticalAlign: "text-bottom", fontSize: "25px" }} />Skills and Interests</p>
            <div className="skillContainer">
                {
                    skillList.map((skill, index) => {
                        return <p className="skillItem" key={index}>{skill}</p>
                    })
                }
            </div>
        </div>
    )
}