import { Item } from "./Item";

export const List = ({listItems, handleDelete, toggleCompleted}) => {

    return (
        <ul className='todo-list'>
            {listItems && listItems.map((elem,index) => (
                <li key={elem+index} className="item" id={"item"+index}>
                    <input 
                        type="checkbox" 
                        checked={elem.completed}
                        onChange={toggleCompleted}
                        value={index}
                        name="completed" 
                        id="completed" />
                    <Item  content={elem.task} completed={elem.completed}/>
                    <div></div>
                    <button onClick={handleDelete} value={index}>🗑</button>
                </li>
            ))}
        </ul>
    )
}