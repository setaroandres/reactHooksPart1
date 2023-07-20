import { TodoList } from "./components/TodoList";
import { TodoAdd } from "./components/TodoAdd";
import { useTodo } from "../hooks/";

export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, handleNewTodo, handleRemoveTodo, handleToggleToDo } = useTodo();

    return (
        <>
            <h1>Todo's: ({todosCount}) <small>Pendientes: {pendingTodosCount}</small></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList 
                        tareas={todos}
                        onDeleteTodo={handleRemoveTodo}
                        onToggleToDo={handleToggleToDo}
                        />
                </div>
                <div className="col-5">
                    <h4>Agregar TO DO</h4>
                    <hr />

                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>
            </div>

        </>
    )
}
