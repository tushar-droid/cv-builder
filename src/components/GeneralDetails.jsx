

function GeneralDetails (props) {
    const fname= props.user.firstName;
    const lname = props.user.lastName;
    const address = props.user.address;
    const email = props.user.email;
    const phone = props.user.phone;
    const gitLink = props.user.links.git;
    const linkedinLink = props.user.links.linkedin;
    const progLanguages = props.user.skills.progLanguages;
    const webTools = props.user.skills.webtools;
    const operatingSystem = props.user.skills.os;
    const databases = props.user.skills.db;
    const othertools = props.user.skills.othertools;



    const handlerFunction = props.changeHandler;

    
    return (
        <>
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
            <label htmlFor="proglanguages" > Programming Languagaes </label>
            <input type="text" id='proglanguages' value={progLanguages} onChange={handlerFunction}/><br />
            <label htmlFor="webtools" > Web development Tools </label>
            <input type="text" id='webtools' value={webTools} onChange={handlerFunction}/><br />
            <label htmlFor="operatingsystems" > Operating Systems </label>
            <input type="text" id='operatingsystems' value={operatingSystem} onChange={handlerFunction}/><br />
            <label htmlFor="databases" > Databases: </label>
            <input type="text" id='databases' value={databases} onChange={handlerFunction}/><br />
            <label htmlFor="othertools" > Other Tools: </label>
            <input type="text" id='othertools' value={othertools} onChange={handlerFunction}/><br />
        </>
    )


}


export default GeneralDetails;