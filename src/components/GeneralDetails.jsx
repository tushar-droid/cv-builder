

function GeneralDetails (props) {
    const fname= props.user.firstName;
    const lname = props.user.lastName;
    const address = props.user.address;
    const email = props.user.email;
    const phone = props.user.phone;
    const gitLink = props.user.links.git;
    const linkedinLink = props.user.links.linkedin;
    const portfolioLink = props.user.links.portfolio;
    const progLanguages = props.user.skills.progLanguages;
    const webTools = props.user.skills.webtools;
    const operatingSystem = props.user.skills.os;
    const databases = props.user.skills.db;
    const othertools = props.user.skills.othertools;
    const handlerFunction = props.changeHandler;

    
    return (
        <>
            <div className="details-container">
                <label htmlFor="firstName">First Name </label>
                <input type="text" id='firstName' value={fname} onChange={handlerFunction}/>
            </div>
            <div className="details-container">
                <label htmlFor="lastName" > Last Name </label>
                <input type="text" id='lastName' value={lname} onChange={handlerFunction} />
            </div>
            <div className="details-container">
                <label htmlFor="address" > Address </label> 
                <input type="text" id='address' value={address} onChange={handlerFunction} />
            </div>
            <div className="details-container">
                <label htmlFor="email" > Email </label> 
                <input type="email" id='email' value={email} onChange={handlerFunction}/>     
            </div>
            <div className="details-container">
                <label htmlFor="phone" > Phone Number </label> 
                <input type="tel" id='phone' value={phone} onChange={handlerFunction}/>     
            </div>
            <div className="details-container">
                <label htmlFor="gitLink" > Github Link </label>
                <input type="text" id='gitlink' value={gitLink} onChange={handlerFunction}/>
            </div>
            <div className="details-container">
                <label htmlFor="linkedinlink" > Linkedin Link </label>
                <input type="text" id='linkedlink' value={linkedinLink} onChange={handlerFunction}/>
            </div>
            <div className="details-container">
                <label htmlFor="portfoliolink" > Portfolio Link </label>
                <input type="text" id='portfoliolink' value={portfolioLink} onChange={handlerFunction}/>
            </div>
            <div className="details-container">
                <label htmlFor="proglanguages" > Programming Languagaes </label>
                <input type="text" id='proglanguages' value={progLanguages} onChange={handlerFunction}/>
            </div>
            <div className="details-container">
                <label htmlFor="webtools" > Web development Tools </label>
                <input type="text" id='webtools' value={webTools} onChange={handlerFunction}/>
            </div>
            <div className="details-container">
                <label htmlFor="operatingsystems" > Operating Systems </label>
                <input type="text" id='operatingsystems' value={operatingSystem} onChange={handlerFunction}/>
            </div>
            <div className="details-container">
                <label htmlFor="databases" > Databases </label>
                <input type="text" id='databases' value={databases} onChange={handlerFunction}/>
            </div>
            <div className="details-container">
                <label htmlFor="othertools" > Other Tools </label>
                <input type="text" id='othertools' value={othertools} onChange={handlerFunction}/>
            </div>
        </>
    )


}


export default GeneralDetails;