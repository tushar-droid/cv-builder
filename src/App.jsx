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
      }
    }
  }


  
  // const [fname, setfname] = useState('Tushar');
  // const [lname, setlname] = useState('Tushar');
  // const handlefnameChange = (e) =>{
  //   setfname(e.target.value)
  // }
  // const handlelnameChange = (e) =>{
  //   setlname(e.target.value)
  // }

  return (
  <>
    <InputForm 
      firstName = {userDetails.firstName}
      lastName = {userDetails.lastName}
      changeHandler = {handleChanges}
    />

    <h1>Full Name: {userDetails.firstName} {userDetails.lastName}</h1>
  </>

  )


  
  // return ( 
  //   <>
  //   <InputForm 
  //   fname ={fname}
  //   handlefnameChange = {handlefnameChange}
  //   lname = {lname}
  //   handlelnameChange = {handlelnameChange} 
  //   />
  //   <h1>hello, {fname} {lname}</h1>
  //   </>
  // )
}

export default App
