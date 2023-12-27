import '../styles/inputFormStyles.css';


function InputForm (props) {
    const fname= props.firstName;
    const lname = props.lastName;
    const handlerFunction = props.changeHandler;
    
    return (
        <form >
            <label htmlFor="firstName">First Name: </label>
            <input type="text" id='firstName' value={fname} onChange={handlerFunction}/><br/>
            <label htmlFor="lastName" > Last Name: </label>
            <input type="text" id='lastName' value={lname} onChange={handlerFunction}/>
            
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