function ProjectDetails (props) {
    const projectsList = props.user.map(project => ProjectFormTemplate(project, props.changeHandler));
    return (
        <ul>
            {projectsList}
        </ul>    )
}

function ProjectFormTemplate(project, handler) {
    return(
        <li key = {project.id}>
            <label htmlFor="project-name">Project Name: </label>
            <input type="text" id='project-name' value={project.projectName} onChange={(e) => handler(e, project.id)}/>
            <br/>            

            <label htmlFor="tech-stack">Technologies Used: </label>
            <input type="text" id='tech-stack' value={project.technologies} onChange={(e) => handler(e, project.id)}/>
            <br/>     

            <label htmlFor="project-details">Project Details: </label>
            <textarea rows="10" cols="50" id='project-details' value={project.projectDetails} onChange={(e) => handler(e, project.id)}/><br/>                         
            <br />        
            
            <button className="delete-project" onClick={(e) => {e.preventDefault(); handler(e,project.id) }}>Delete</button>  
            <br />  
        </li>
    )
}




export default ProjectDetails;