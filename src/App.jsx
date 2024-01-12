import './styles/style.css'
import { useState } from 'react'
import GeneralDetails from './components/GeneralDetails.jsx';
import WorkDetails from './components/WorkDetails.jsx';
import ProjectDetails from './components/ProjectDetails.jsx';
import User from './components/UserTemplate.js';
import EducationDetails from './components/EducationDetails.jsx';
import ResumeMaker from './components/ResumeMaker.jsx';
import addIcon from './assets/addIcon.png';

function App() {
  const [userDetails, setUserDetails] = useState(User); 
  const [currPage, setcurrPage] = useState(0);
  const handleChanges = (e) =>{
    const changeId = e.target.id;
    switch (changeId){
      case 'firstName': {
        const newFName = e.target.value;
        const updatedUserDetails = {...userDetails, firstName: newFName}
        setUserDetails(updatedUserDetails)
        break;
      }
      case 'lastName': {
        const newLName = e.target.value;
        const updatedUserDetails = {...userDetails, lastName: newLName}
        setUserDetails(updatedUserDetails)
        break;
      }
      case 'address': {
        const newAddress = e.target.value;
        const updatedUserDetails = {...userDetails, address: newAddress}
        setUserDetails(updatedUserDetails)
        break;
      }
      case 'email': {
        const newEmail = e.target.value;
        const updatedUserDetails = {...userDetails, email: newEmail}
        setUserDetails(updatedUserDetails)
        break;
      }
      case 'phone': {
        const newPhone = e.target.value;
        const updatedUserDetails = {...userDetails, phone: newPhone}
        setUserDetails(updatedUserDetails)
        break;
      }
      case 'gitlink': {
        const newGit = e.target.value;
        const updatedUserDetails = {...userDetails};
        updatedUserDetails.links.git = newGit;
        setUserDetails(updatedUserDetails)
        break;
      }
      case 'linkedlink': {
        const newLinkedin = e.target.value;
        const updatedUserDetails = {...userDetails};
        updatedUserDetails.links.linkedin = newLinkedin;
        setUserDetails(updatedUserDetails)
        break;
      }
      case 'portfoliolink': {
        const newPortfolio = e.target.value;
        const updatedUserDetails = {...userDetails};
        updatedUserDetails.links.portfolio = newPortfolio;
        setUserDetails(updatedUserDetails)
        break;
      }
      case 'proglanguages': {
        const newlanguagesString = e.target.value;
        const languageArray = newlanguagesString.split(",")
        const updatedUserDetails = {...userDetails};
        updatedUserDetails.skills.progLanguages = languageArray;
        setUserDetails(updatedUserDetails)
        break;
      }
      case 'webtools': {
        const newlwebtoolsString = e.target.value;
        const webtoolsArray = newlwebtoolsString.split(",")
        const updatedUserDetails = {...userDetails};
        updatedUserDetails.skills.webtools = webtoolsArray;
        setUserDetails(updatedUserDetails)
        break;
      }
      case 'operatingsystems': {
        const newOsString = e.target.value;
        const newOsArray = newOsString.split(",")
        const updatedUserDetails = {...userDetails};
        updatedUserDetails.skills.os = newOsArray;
        setUserDetails(updatedUserDetails)
        break;
      }
      case 'databases': {
        const newDbsString = e.target.value;
        const newDbsArray = newDbsString.split(",")
        const updatedUserDetails = {...userDetails};
        updatedUserDetails.skills.db = newDbsArray;
        setUserDetails(updatedUserDetails)
        break;
      }
      case 'othertools': {
        const newtoolsString = e.target.value;
        const newtoolsArray = newtoolsString.split(",")
        const updatedUserDetails = {...userDetails};
        updatedUserDetails.skills.othertools = newtoolsArray;
        setUserDetails(updatedUserDetails)
        break;
      }
    }
  }

  const handleWorkChanges = (e, jobId) =>{
    const changeId = e.target.id;
    const targetIndex= userDetails.work.indexOf(userDetails.work.find(x => x.id === jobId));       
    if(e.target.className ==='deleteWork'){
      const updatedUserDetails = {...userDetails};
      updatedUserDetails.work.splice(targetIndex, 1);
      setUserDetails(updatedUserDetails);
      return
    }
    switch (changeId) {
      case 'position':{
        const newPosition = e.target.value;        
        const updatedUserDetails = {...userDetails};
        updatedUserDetails.work[targetIndex].position = newPosition;
        setUserDetails(updatedUserDetails)
        break;
      }
      case 'company':{
        const newCompany = e.target.value;        
        const updatedUserDetails = {...userDetails};
        updatedUserDetails.work[targetIndex].company = newCompany;
        setUserDetails(updatedUserDetails)
        break;
      }
      case 'startDate':{
        const newStart = e.target.value;        
        const updatedUserDetails = {...userDetails};
        updatedUserDetails.work[targetIndex].startDate = newStart;
        setUserDetails(updatedUserDetails)
        break;
      }
      case 'endDate':{
        const newEnd = e.target.value;        
        const updatedUserDetails = {...userDetails};
        updatedUserDetails.work[targetIndex].endDate = newEnd;
        setUserDetails(updatedUserDetails)
        break;
      }
      case 'duties':{
        const newDutiesString = e.target.value;                      
        const updatedUserDetails = {...userDetails};
        updatedUserDetails.work[targetIndex].duties = newDutiesString;
        setUserDetails(updatedUserDetails)
        break;
      }
      default:
        break;
    }
  }

  const addNewWork = (e) =>{
    e.preventDefault();
    const UniqId = Date.now();
    const updateUserDetails = {...userDetails};
    const newWork ={
      id:UniqId,
      position: 'some random position',
      company: '',
      startDate: '',
      endDate: '',
      duties:'',
    }
    updateUserDetails.work.push(newWork);
    setUserDetails(updateUserDetails);
  }

  const handleProjectChanges = (e, projectId) =>{
    const changeId = e.target.id;
    const targetIndex= userDetails.projects.indexOf(userDetails.projects.find(x => x.id === projectId));       
    if(e.target.className ==='delete-project'){
      const updatedUserDetails = {...userDetails};
      updatedUserDetails.projects.splice(targetIndex, 1);
      setUserDetails(updatedUserDetails);
      return
    }
    const newData = e.target.value;        
    const newUserDetails = {...userDetails};
    switch (changeId) {
      case 'project-name':{
        newUserDetails.projects[targetIndex].projectName = newData;
        setUserDetails(newUserDetails)
        break;
      }
      case 'tech-stack':{
        const newDataArray = newData.split(",")
        newUserDetails.projects[targetIndex].technologies = newDataArray;        
        setUserDetails(newUserDetails)
        break;
      }
      case 'project-details':{
        newUserDetails.projects[targetIndex].projectDetails = newData;
        setUserDetails(newUserDetails)
        break;
      }
      default:
        break;
    }
    

  }

  const addNewProject = (e) =>{
    e.preventDefault();
    const UniqId = Date.now();
    const updateUserDetails = {...userDetails};
    const newProject ={
      id:UniqId,
      projectName:'',
      technologies: [],
      projectDetails: ''
    }
    updateUserDetails.projects.push(newProject);
    setUserDetails(updateUserDetails);
  }

  const handleEducationChages = (e, studyId) =>{
    const changeId = e.target.id;
    const targetIndex= userDetails.education.indexOf(userDetails.education.find(x => x.id === studyId));       
    if(e.target.className ==='delete-education'){
      const updatedUserDetails = {...userDetails};
      updatedUserDetails.education.splice(targetIndex, 1);
      setUserDetails(updatedUserDetails);
      return
    }

    const newData = e.target.value;        
    const newUserDetails = {...userDetails};

    switch (changeId) {
      case 'institute-name':{
        newUserDetails.education[targetIndex].instituteName = newData;
        setUserDetails(newUserDetails)
        break;
      }   
      case 'location':{
        newUserDetails.education[targetIndex].location = newData;
        setUserDetails(newUserDetails)
        break;
      }     
      case 'course':{
        newUserDetails.education[targetIndex].course = newData;
        setUserDetails(newUserDetails)
        break;
      }  
      case 'graduation-date':{
        newUserDetails.education[targetIndex].graduationDate = newData;
        setUserDetails(newUserDetails)
        break;
      }  
      case 'gpa':{
        newUserDetails.education[targetIndex].gpa = newData;
        setUserDetails(newUserDetails)
        break;
      }  
      case 'study-details':{
        newUserDetails.education[targetIndex].details = newData;
        setUserDetails(newUserDetails)
        break;
      }  
      
      default:
        break;
    }


  }

  const addNewStudy = (e) =>{
    e.preventDefault();
    const UniqId = Date.now();
    const updateUserDetails = {...userDetails};
    const newStudy={
      id:UniqId,
      instituteName: '',
      location: '',
      course: '',
      graduationDate: '',
      gpa: '',
      details: ''
    }
    updateUserDetails.education.push(newStudy);
    setUserDetails(updateUserDetails);
  }



  
  function nextPageButton (){
    if(currPage === 3)
      setcurrPage(0)
    else setcurrPage(currPage + 1);

    const cont = document.querySelector('.form-container');
    cont.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }

  function prevPageButton (){
    if(currPage === 0)
      setcurrPage(3)
    else setcurrPage(currPage - 1);
    const cont = document.querySelector('.form-container');
    cont.scrollTo({
      top:0,
      behavior:"smooth"
    })

  }


  return (
  <>
    <div className="form-container">
      {currPage === 0 && <h1 className='heading'>General Details</h1>}
      {currPage === 1 && <h1 className='heading'>Work Experience</h1>}
      {currPage === 2 && <h1 className='heading'>Projects</h1>}
      {currPage === 3 && <h1 className='heading'>Education</h1>}
      <form onSubmit={(e) => e.preventDefault()}>
      {currPage === 0 && (
        <GeneralDetails 
          user = {userDetails}
          changeHandler = {handleChanges}
        />
      )}
      {currPage === 1 && (
        <>
          <WorkDetails
            user = {userDetails.work}
            changeHandler = {handleWorkChanges}
            />
            <button className='AddNewWork' onClick={addNewWork} type="button">
              <img src={addIcon} style={{height:30}} />
            </button>
        </>
      )}
      {currPage === 2 && (
        <>
        <ProjectDetails
          user = {userDetails.projects}
          changeHandler = {handleProjectChanges}
        />
          <button className='AddNewProject' onClick={addNewProject} type="button">
            <img src={addIcon} style={{height:30}} />
          </button>        
        {/* <button className='AddNewProject' onClick={addNewProject} type="button" >Add New</button>         */}
        </>
      )}
      {currPage === 3 && (
        <>
        <EducationDetails
          user = {userDetails.education}
          changeHandler = {handleEducationChages}
        />
        <button className='AddNewEducation' onClick={addNewStudy} type="button">
          <img src={addIcon} style={{height:30}} />
        </button>         
        {/* <button className='AddNewEducation' onClick={addNewStudy} type="button">Add New</button> */}
        </>
      )}

      </form>
      <div className="navigation-btns">
        <button className="prev-page-btn" onClick={prevPageButton}>&#8678;</button>
        <button className="next-page-btn" onClick={nextPageButton}>&#8680;</button>
      </div>
    </div>  

    <div className="resume-container">
      <ResumeMaker 
        user = {userDetails}
      />
      
      
    </div>
  </>

  )


}

export default App
