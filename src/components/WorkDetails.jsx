import trashIcon from '../assets/trashIcon.png'
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
        <li key={job.id} className='job-list'>
            <div className="details-container">            
                <label htmlFor="position">Position: </label>
                <input type="text" id='position' value={job.position} onChange={(e) => handler(e, job.id)}/>
            </div>
            <div className="details-container">
                <label htmlFor="company">Company: </label>
                <input type="text" id='company' value={job.company} onChange={(e) => handler(e, job.id)}/> 
            </div>
            <div className="details-container">
                <label htmlFor="startDate">Start Date: </label>
                <input type="text" id='startDate' value={job.startDate} onChange={(e) => handler(e, job.id)}/>  
            </div>
            <div className="details-container">
                <label htmlFor="endDate">End Date: </label>
                <input type="text" id='endDate' value={job.endDate} onChange={(e) => handler(e, job.id)}/>
            </div>
            <div className="details-container">
                <label htmlFor="duties">Duties: </label>
                <textarea rows="10" cols="50" id='duties' value={job.duties}  onChange={(e) => handler(e, job.id)}/>
            </div>
            <button className="deleteWork" type="button" title='delete this work experience'  onClick={(e) => {e.preventDefault(); handler(e,job.id) }}>                
                <img src={trashIcon} style={{height:25}} onClick={(e) => {e.preventDefault(); handler(e.target.className='deleteWork',job.id) }}/>
            </button>  
        </li>
    )
}


export default WorkDetails;