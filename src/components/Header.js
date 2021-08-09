import { MdDescription } from "react-icons/md";

export default function Header(props){
    const handleUpdate = props.handleUpdate
    const userName = props.description.fullname
    const aboutMySelf = props.description.about
    const profileImg = props.description.profileImg
    return(
        <div className="contentBlock">
            <p className="mainField"><MdDescription style={{ verticalAlign: "text-bottom", fontSize: "25px" }} />Introduction</p>
            <form action="submit" className="headerForm">
                <input className="inputField mainField userName" type="text" value={userName} name="fullname" placeholder="Full name" onChange={handleUpdate} />
                <textarea className="inputField userDescription" name="about" value={aboutMySelf} placeholder="About yourself" onChange={handleUpdate} maxLength="250"></textarea>
                <img src={profileImg} alt="" className="userImage" />
            </form>
        </div>

    )
}