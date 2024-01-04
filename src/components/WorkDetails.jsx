function WorkDetails (props) {
    const works = props.user;
    for(const id in works)  console.log(id)
    //console.log(works)
    return(
        <h1>Hello</h1>
    )
}

export default WorkDetails;