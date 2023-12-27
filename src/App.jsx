import './styles/style.css'
import GeneralDetails from './components/GeneralDetails.jsx';
import User from './components/UserTemplate.js';
import { useState } from 'react'
function App() {
  const [userDetails, setUserDetails] = useState(User); 
  
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


  

  return (
  <>
    <form>
    <GeneralDetails 
      user = {userDetails}
      changeHandler = {handleChanges}
    />
    </form>

    <h1>Full Name: {userDetails.firstName} {userDetails.lastName}</h1>
    <h1>Address: {userDetails.address}</h1>
    <h1>Email: {userDetails.email}</h1>
    <h1>Phone numer: {userDetails.phone}</h1>
    <h1>Git: {userDetails.links.git}</h1>
    <h1>Linkedin: {userDetails.links.linkedin}</h1>
    <h1>SKILLS</h1>
    <h2>Programming Languages: {userDetails.skills.progLanguages.toString()}</h2>
    <h2>Web tools: {userDetails.skills.webtools.toString()}</h2>
    <h2>Operating Systems: {userDetails.skills.os.toString()}</h2>
    <h2>Databases: {userDetails.skills.db.toString()}</h2>
    <h2>Other Tools: {userDetails.skills.othertools.toString()}</h2>
  </>

  )


}

export default App
