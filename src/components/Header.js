import { MdDescription } from "react-icons/md";

export default function Header(props){
    const handleUpdate = props.handleUpdate
    const profileImg = props.description.profileImg
    return(
        <div className="contentBlock">
            <p className="mainField"><MdDescription style={{ verticalAlign: "text-bottom", fontSize: "25px" }} />Introduction</p>
            <form action="submit" className="headerForm">
                <input className="inputField mainField userName" type="text" name="fullname" placeholder="Full name" onChange = {handleUpdate} />
                <textarea className="inputField userDescription" name="about" cols="30" rows="10" placeholder="About yourself" onChange={handleUpdate}></textarea>
                <img src={profileImg} alt="" className="userImage" />
            </form>
        </div>

    )
}