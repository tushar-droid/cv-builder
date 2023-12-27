import '../styles/inputFormStyles.css';


function InputForm (props) {
    const fname= props.user.firstName;
    const lname = props.user.lastName;
    const address = props.user.address;
    const email = props.user.email;
    const phone = props.user.phone;
    const gitLink = props.user.links.git;
    const linkedinLink = props.user.links.linkedin;


    const handlerFunction = props.changeHandler;
    
    return (
        <form >
            <label htmlFor="firstName">First Name: </label>
            <input type="text" id='firstName' value={fname} onChange={handlerFunction}/><br/>
            <label htmlFor="lastName" > Last Name: </label>
            <input type="text" id='lastName' value={lname} onChange={handlerFunction}/><br />
            <label htmlFor="address" > Address: </label> 
            <input type="text" id='address' value={address} onChange={handlerFunction}/><br />
            <label htmlFor="email" > Email: </label> 
            <input type="email" id='email' value={email} onChange={handlerFunction}/><br />       
            <label htmlFor="phone" > Phone Number: </label> 
            <input type="tel" id='phone' value={phone} onChange={handlerFunction}/><br />       
            <label htmlFor="gitLink" > Github Link: </label>
            <input type="text" id='gitlink' value={gitLink} onChange={handlerFunction}/><br />
            <label htmlFor="linkedinlink" > Linkedin Link: </label>
            <input type="text" id='linkedlink' value={linkedinLink} onChange={handlerFunction}/><br />
        </form>
    )



    // const {fname, handlefnameChange, lname,handlelnameChange } = props;
    // return (
    //     <form >
    //         <label htmlFor="fname">First Name: </label>
    //         <input type="text" value={fname} id='fname' onChange={handlefnameChange} /> <br/>
    //         <label htmlFor="lname">Last Name: </label>
    //         <input type="text" value={lname} id='lname' onChange={handlelnameChange} /> <br/>            
    //     </form>
        
    // )
}


export default InputForm;