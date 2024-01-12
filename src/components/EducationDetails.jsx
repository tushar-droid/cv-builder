
import trashIcon from '../assets/trashicon.png'
function EducationDetails (props) {
    const studysList = props.user.map(study => EducationFormTemplate(study, props.changeHandler));

    return (
        <ul>
            {studysList}
        </ul>    )
}

function EducationFormTemplate(study, handler) {
    return(
        <li key = {study.id} className='education-list'>
            <div className="details-container">            
                <label htmlFor="institute-name">Institute Name: </label>
                <input type="text" id='institute-name' value={study.instituteName} onChange={(e) => handler(e, study.id)}/>
            </div>            

            <div className="details-container">            
                <label htmlFor="location">Location: </label>
                <input type="text" id='location' value={study.location} onChange={(e) => handler(e, study.id)}/>
            </div>     

            <div className="details-container">            
                <label htmlFor="course">Course Taken: </label>
                <input type="text" id='course' value={study.course} onChange={(e) => handler(e, study.id)}/>
            </div>        
            
            <div className="details-container">            
                <label htmlFor="graduation-date">Graduation Date: </label>
                <input type="text" id='graduation-date' value={study.graduationDate} onChange={(e) => handler(e, study.id)}/>
            </div>        

            <div className="details-container">            
                <label htmlFor="gpa">GPA: </label>
                <input type="text" id='gpa' value={study.gpa} onChange={(e) => handler(e, study.id)}/>
            </div>        

            <div className="details-container">                        
                <label htmlFor="study-details">Details: </label>
                <textarea rows="10" cols="50" id='study-details' value={study.details} onChange={(e) => handler(e, study.id)}/><br/>                         
            </div>        
            <button className="delete-education" type="button" onClick={(e) => {e.preventDefault(); handler(e,study.id) }}>                
                <img src={trashIcon} style={{height:25}} onClick={(e) => {e.preventDefault(); handler(e.target.className='delete-education',study.id) }}/>
            </button> 
            {/* <button className="delete-education" type="button"  onClick={(e) => {e.preventDefault(); handler(e,study.id) }}>Delete</button>  
            <br />   */}
        </li>
    )
}




export default EducationDetails;