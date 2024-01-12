import trashIcon from '../assets/trashIcon.png'
function ProjectDetails (props) {
    const projectsList = props.user.map(project => ProjectFormTemplate(project, props.changeHandler));
    return (
        <ul>
            {projectsList}
        </ul>    )
}

function ProjectFormTemplate(project, handler) {
    return(
        <li key = {project.id} className='project-list'>
            <div className="details-container">                        
                <label htmlFor="project-name">Project Name: </label>
                <input type="text" id='project-name' value={project.projectName} onChange={(e) => handler(e, project.id)}/>
            </div>
            <div className="details-container">            
                <label htmlFor="tech-stack">Technologies Used: </label>
                <input type="text" id='tech-stack' value={project.technologies} onChange={(e) => handler(e, project.id)}/>
            </div>     
            <div className="details-container">            
                <label htmlFor="project-details">Project Details: </label>
                <textarea rows="10" cols="50" id='project-details' value={project.projectDetails} onChange={(e) => handler(e, project.id)}/><br/>                         
            </div>                     
            <button className="delete-project" type="button" title='delete this project' onClick={(e) => {e.preventDefault(); handler(e,project.id) }}>
                <img src={trashIcon} style={{height:25}} onClick={(e) => {e.preventDefault(); handler(e.target.className='delete-project',project.id) }}/>
            </button>  
            <br />  
        </li>
    )
}




export default ProjectDetails;