function WorkDetails (props) {
    const jobsList = props.user.map(job => workFormTemplate(job, props.changeHandler));

    return(
        <ul>
            {jobsList}
        </ul>
    )
}





function workFormTemplate(job, handler){
    return(
        <li key={job.id}>
            <label htmlFor="position">Position: </label>
            <input type="text" id='position' value={job.position} onChange={(e) => handler(e, job.id)}/><br/>
            
            <label htmlFor="company">Company: </label>
            <input type="text" id='company' value={job.company} onChange={(e) => handler(e, job.id)}/><br/>   

            <label htmlFor="startDate">Start Date: </label>
            <input type="text" id='startDate' value={job.startDate} onChange={(e) => handler(e, job.id)}/><br/>   
            
            <label htmlFor="endDate">End Date: </label>
            <input type="text" id='endDate' value={job.endDate} onChange={(e) => handler(e, job.id)}/><br/>   
            
            <label htmlFor="duties">Duties: </label>
            <textarea rows="10" cols="50" id='duties' value={job.duties} onChange={(e) => handler(e, job.id)}/><br/>                         
            <br />     
            <button className="deleteWork" onClick={(e) => {e.preventDefault(); handler(e,job.id) }}>Delete</button>  
            <br />    
        </li>
    )
}


export default WorkDetails;