import { MdDescription } from "react-icons/md";

export default function OverviewHeader(props){
    const fullName = props.description.fullname
    const userDescription = props.description.about
    const profileImg = props.description.profileImg

    return(
        <div className="contentBlock">
            <p className="mainField title"><MdDescription style={{ verticalAlign: "text-bottom", fontSize: "25px" }} />Introduction</p>
            <div className="headerForm">
                <h1 className="mainField userName">{fullName}</h1>
                <p className="userDescription"> {userDescription} </p>
                <img src={profileImg} alt="" className="userImage" />
            </div>
        </div>
    )
}