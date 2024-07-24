export const Item = ({content, completed}) => {
    
    return (
        <div className="task-div">
            
            <p 
                className={completed ? "completed task-text" : "task-text"}
                style={completed ? {color:"red"} : {color:"white"}}>
                    {content}
            </p>
        </div>
    )
}