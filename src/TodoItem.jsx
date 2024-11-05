export function TodoItem({ id, title, completed, toggleTodo, deleteTodo }){
    return(
    <li>
        <label>
        {title}
        <input type="checkbox" checked={completed} onChange={e => toggleTodo(id, e.target.checked)}></input>
        </label>
        <button onClick={() => deleteTodo(id)} className="btn btn-danger">Delete</button>
      </li> 
    )
}