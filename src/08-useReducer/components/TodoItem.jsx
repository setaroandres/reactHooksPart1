
export const TodoItem = ({tarea, onDeleteTodo, onToggleToDo}) => {
    return (
      <>
            <li className="list-group-item d-flex justify-content-between">
                <span 
                  className={`align-self-center  ${(tarea.done) ? 'text-decoration-line-through' : ''}`}
                  onClick={() => onToggleToDo(tarea.id)}>
                    {tarea.todo}
                </span>
                <button 
                  className="btn btn-danger"
                  onClick={() => onDeleteTodo(tarea.id)}>
                    Borrar
                </button>    
            </li>
      </>
    )
  }
  