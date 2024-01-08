import './styles/style.css'
import { useState } from 'react'
import GeneralDetails from './components/GeneralDetails.jsx';
import WorkDetails from './components/WorkDetails.jsx';
import ProjectDetails from './components/ProjectDetails.jsx';
import User from './components/UserTemplate.js';
import EducationDetails from './components/EducationDetails.jsx';
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
        console.log(newDutiesString[newDutiesString.length -1 ])        // To be Removed 
        const newDutiesArray = newDutiesString.split('\n');
        console.log(newDutiesArray);
        const updatedUserDetails = {...userDetails};
        updatedUserDetails.work[targetIndex].duties = newDutiesArray;
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
      duties:[]
    }
    updateUserDetails.work.push(newWork);
    setUserDetails(updateUserDetails);
  }




  function nextPageButton (){
    if(currPage === 3)
      setcurrPage(0)
    else setcurrPage(currPage + 1);
  }

  function prevPageButton (){
    if(currPage === 0)
      setcurrPage(3)
    else setcurrPage(currPage - 1);
  }


  return (
  <>
    <div className="form-container">
      <form>
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
            <button className='AddNewWork' onClick={addNewWork}>Add New</button>
        </>
      )}
      {currPage === 2 && (
        <ProjectDetails/>
      )}
      {currPage === 3 && (
        <EducationDetails/>
      )}

      </form>
      <div className="navigation-btns">
        <button className="prev-page-btn" onClick={prevPageButton}>Previous Page</button>
        <button className="next-page-btn" onClick={nextPageButton}>Next Page</button>
      </div>
    </div>  

    <div className="resume-container">
      <h1>Full Name: {userDetails.firstName} {userDetails.lastName}</h1>
      <h1>Address: {userDetails.address}</h1>
      <h1>Email: {userDetails.email}</h1>
      <h1>Phone numer: {userDetails.phone}</h1>
      <h1>Git: {userDetails.links.git}</h1>
      <h1>Linkedin: {userDetails.links.linkedin}</h1>
      <h1>Portfolio: {userDetails.links.portfolio}</h1>
      <h1>SKILLS</h1>
      <h2>Programming Languages: {userDetails.skills.progLanguages.toString()}</h2>
      <h2>Web tools: {userDetails.skills.webtools.toString()}</h2>
      <h2>Operating Systems: {userDetails.skills.os.toString()}</h2>
      <h2>Databases: {userDetails.skills.db.toString()}</h2>
      <h2>Other Tools: {userDetails.skills.othertools.toString()}</h2>
      <h1>Work Experience</h1>
      <ul>
        {userDetails.work.map((wk) =>
          <li key={wk.id}>
            <h2>Company: {wk.company}</h2>
            <h2>Position: {wk.position}</h2> 
            <h3>Start date: {wk.startDate}</h3>
            <h3>End Date: {wk.endDate}</h3>
            <h3 style={{ whiteSpace: 'pre-line' }}>
              Duties: {wk.duties}                  
            </h3>
          </li>
        )}
      </ul>
    </div>
  </>

  )


}

export default App
