import { TodoItem } from "./TodoItem"

export const TodoList = ({tareas, onDeleteTodo, onToggleToDo}) => {



    return (
        <>
            <ul className="list-group">
                {
                    //Tomamos el todos de la desestructuracion del reducer
                    tareas.map( (tarea) => (
                        <TodoItem 
                            key={tarea.id} 
                            tarea={tarea}
                            onDeleteTodo={onDeleteTodo}
                            onToggleToDo={onToggleToDo}
                            />
                    ))
                }
            </ul>
        </>
    )
}
