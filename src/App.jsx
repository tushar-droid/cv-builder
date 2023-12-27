import './styles/style.css'
import InputForm from './components/inputForm.jsx';
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
    }
  }


  

  return (
  <>
    <InputForm 
      user = {userDetails}
      changeHandler = {handleChanges}
    />

    <h1>Full Name: {userDetails.firstName} {userDetails.lastName}</h1>
    <h1>Address: {userDetails.address}</h1>
    <h1>Email: {userDetails.email}</h1>
    <h1>Phone numer: {userDetails.phone}</h1>
    <h1>Git: {userDetails.links.git}</h1>
    <h1>Linkedin: {userDetails.links.linkedin}</h1>

  </>

  )


}

export default App
