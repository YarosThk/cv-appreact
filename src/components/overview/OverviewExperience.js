import { MdWork } from "react-icons/md"


export default function OverviewExperience(props) {
    const experienceData = props.experienceData
    return (
        <div className="contentBlock">
            <p className="mainField"><MdWork style={{ verticalAlign: "text-bottom", fontSize: "25px" }} />Experience</p>
            {experienceData.map(exp => {
                return (
                    <div key={exp.id} className="educationFormOverview">
                        <h1 className="mainField schoolName"> {exp.position}</h1>
                        <ul className="additionalData">
                            <li>{exp.company}</li>
                        </ul>
                        <span className="timePeriod">{exp.from} - {exp.to}</span>
                    </div>
                )
            })}
        </div>
    )
}