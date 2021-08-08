import Navbar from './Navbar';
import Header from './Header';
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'
import OverviewHeader from './overview/OverviewHeader'
import OverviewEducation from './overview/OverviewEducation';
import OverviewExperience from './overview/OverviewExperience';
import OverviewSkills from './overview/OverviewSkills';
import {useState} from "react";
import profilePic from "../styles/dp.jpeg"
import { v1 as uuidv1 } from 'uuid';

function App() {
  const [description, setDescription] = useState({
    fullname : "Full Name",
    about : "About yourself",
    profileImg: profilePic
  })

  const [education, setEducation] = useState([])

  const [experience, setExperience] = useState([])

  const [skills, setSkills] = useState([])

  const [preview, setPreview] = useState(false)

  function togglePreview(e){
    e.preventDefault()
    if(preview){
      setPreview(false)
    }else{
      setPreview(true)
    }
  }
  function updateDescription(e){
    const elementToChange = e.target.name;
    const value = e.target.value;
    setDescription({
      ...description,
      [elementToChange] : value
    })
  }

  function addEducationForm(){
    setEducation([...education, 
      { id: uuidv1(),
      school: "",
      degree: "",
      subject: "",
      city: "",
      from: "",
      to: "" }]
    )
  }

  function updateEducation(id, toChange, newValue){
    setEducation(
      education.map(ed => { return ed.id === id ? {...ed, [toChange] : newValue} : ed})
    )
  }

  function deleteEducation(educationId) {
    setEducation([...education].filter(ed => ed.id !== educationId))
  }

  function addExperienceForm(){
    setExperience([...experience,
      {
      id: uuidv1(),
      position: "",
      company: "",
      from: "",
      to: ""}
    ]) 
  }

  function updateExperience(id, toChange, newValue){
    console.log(id, toChange, newValue)
    setExperience(
      experience.map(exp => {return exp.id === id ? { ...exp, [toChange]: newValue } : exp })
    )
  }

  function deleteExperience(experienceId) {
    setExperience([...experience].filter(exp => exp.id !== experienceId))
  }

  function addSkill(skillToAdd){
    setSkills(skills.concat(skillToAdd))
  }

  function removeSkill(skillToRemove){
    setSkills(skills.filter(skill => skill !== skillToRemove))
  }

  if(!preview){
    return (
      <div className="app">
        <Navbar togglePreview = {togglePreview}/>
        <Header description = {description} handleUpdate={updateDescription} />
        <Education addEducationForm={addEducationForm} deleteEducation={deleteEducation} updateEducation={updateEducation} education = {education}/>
        <Experience addExperienceForm={addExperienceForm} deleteExperience={deleteExperience} updateExperience={updateExperience} experience = {experience}/>
        <Skills addSkill={addSkill} removeSkill={removeSkill} skills={skills}/>
      </div>
    );
  }else{
    return (
      <div className="app">
        <Navbar togglePreview={togglePreview}/>
        <OverviewHeader description={description} />
        <OverviewEducation educationData={education}/>
        <OverviewExperience experienceData={experience} />
        <OverviewSkills skills={skills} />
      </div>
    );
  }
}

export default App;
