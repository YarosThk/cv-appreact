import { MdSchool } from "react-icons/md"

export default function OverviewEducation(props) {
    const educationData = props.educationData
    return (
        <div className="contentBlock">
            <p className="mainField"><MdSchool style={{ verticalAlign: "text-bottom", fontSize: "25px" }} />Education</p>
            {educationData.map(ed =>{
                return(
                    <div key={ed.id} className="educationFormOverview">
                        <h1 className="mainField schoolName"> {ed.school}</h1>
                        <ul className="additionalData">
                            <li>{ed.degree}</li>
                            <li>{ed.subject}</li>
                            <li>{ed.city}</li>
                        </ul>
                        <span className="timePeriod">{ed.from} - {ed.to}</span>
                    </div>
                )
            })}
        </div>
    )
}