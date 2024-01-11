import '../styles/resumeStyles.css'


function ResumeMaker(props){
    const contactDetails =[
        props.user.firstName, 
        props.user.lastName, 
        props.user.address, 
        props.user.email, 
        props.user.phone, 
        props.user.links]
    return(
        <div className="resume-page">
            <div className="contact-container">
                {contactSection(contactDetails)}
            </div>
            <div className="skills-container">
                <h2 style={{margin:0, padding:0, marginTop:30, marginBottom:0}}>SKILLS</h2>
                <hr/>
                {skillsSection(props.user.skills)}
            </div>
            <div className="work-container">
                {props.user.work.length > 0 && <h2 style={{margin:0, padding:0, marginTop:30, marginBottom:0}}>WORK EXPERIENCE</h2>}
                { props.user.work.length > 0 && <hr/>}            
                {workSection(props.user.work)}
            </div>
            <div className="projects-container">
                { props.user.projects.length > 0 &&  <h2 style={{margin:0, padding:0, marginTop:30, marginBottom:0}}>PROJECT EXPERIENCE</h2>}
                { props.user.projects.length > 0 && <hr/>}            
                {/* <hr/> */}
                {projectSection(props.user.projects)}
            </div>
            <div className="education-container">
                {props.user.education.length > 0 && <h2 style={{margin:0, padding:0, marginTop:30, marginBottom:0}}>EDUCATION</h2>}
                { props.user.education.length > 0 && <hr/>}  
                {educationSection(props.user.education)}
            </div>
        </div>
    );

}

function contactSection(contactDetails){  
    return(
        <>
            <h1>{contactDetails[0] + ' ' + contactDetails[1]}</h1>
            <p>{contactDetails[2]}</p>
            <p>{contactDetails[3] + ' | ' + contactDetails[4]}</p>
            <p>Portfolio: {contactDetails[5].portfolio}</p>
        </>
    )

} 

function skillsSection(skillDetails){
    return(
        <>
            <div className="skill-container-inside">
            <h3>Programming Languages: &nbsp; </h3><p>{skillDetails.progLanguages.join(', ')}</p>
            </div>
            <div className="skill-container-inside">
            <h3>Operating Systems: &nbsp; </h3><p>{skillDetails.os.join(', ')}</p>
            </div>
            <div className="skill-container-inside">
            <h3>Databases: &nbsp; </h3><p>{skillDetails.db.join(', ')}</p>
            </div>
            <div className="skill-container-inside">
            <h3>Web Development: &nbsp; </h3><p>{skillDetails.webtools.join(', ')}</p>
            </div>
            <div className="skill-container-inside">
            <h3>Tools: &nbsp; </h3><p>{skillDetails.othertools.join(', ')}</p>
            </div>

        </>
    )
}

function workSection(workDetails){
    return(
        <>
            <ul>
                {workDetails.map((wk) =>
                <li key={wk.id} className='work-block'>
                    <h3>{wk.company} | {wk.position} ({wk.startDate + ' - '+ wk.endDate})</h3>
                    <ul className='work-duties'>
                        {wk.duties.split('\n').filter(line => line.trim() !== '').map((line, index) => (
                            <li key={index}>{line}</li>
                        ))}              
                    </ul>
                </li>
                )}
            </ul>            
        </>
    )
}

function projectSection(projectDetails){
    return(
        <>
            <ul>
                {
                projectDetails.map((project) =>
                    <li key = {project.id} className='project-block'>              
                    <h3>{project.projectName} | {project.technologies.join(', ')} </h3>
                    <ul className='project-details'>
                    {project.projectDetails.split('\n').filter(line => line.trim() !== '').map((line, index) => (
                        <li key={index}>{line}</li>
                    ))}              
                    </ul>
                    </li>
                )
                }
            </ul>

        </>
    )
}

function educationSection(educationDetails){

    return (
        <>
            <ul>
                {
                educationDetails.map((study) =>
                <li key={study.id} className='study-block'>
                    <h3>{study.instituteName} | {study.location}</h3>
                    <h4>{study.course} | Graduated: {study.graduationDate} | {study.gpa} </h4>
                    <ul className='study-details'>
                    {study.details.split('\n').filter(line => line.trim() !== '').map((line, index) => (
                        <li key={index}>{line}</li>
                    ))}              
                    </ul>
                </li>
                )
                }

            </ul>            
        </>
    )
}




export default ResumeMaker;