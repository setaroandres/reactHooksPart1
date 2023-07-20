import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todo-reducer";

//Esta es la funcion de inicializacion para no perder los valores al recargar el navegador
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []; //Si es nulo regresamos un arreglo vacio
}

export const useTodo = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);//Tenemos que inicializar el reducer (init) con los valores previamente cargados

    //Cuando nuestro todos cambia (Agregar, borrar, modificar), debemos ejecutar un efecto secundario para poder almacenar en el localStorage
    //El el localStorage solo podemos guardar string, por eso debemos serializar nuestros todos
    useEffect(() => {
        
        localStorage.setItem('todos', JSON.stringify(todos) || []); //Si los todos vienen nulos le decimos que deje el array vacio

    }, [todos])//La dependencia por la cual se ejecuta este efect es cuando cambian los todos


    const handleNewTodo = (todo) => {
        //Aca debemos crearnos la action que vamos a enviar al reducer, con el type y con el payload
        const action = {
            type: 'Add Todo',
            payload: todo
        }
        //usamos el dispatch para mandar la accion al reducer
        dispatch(action);
    }

    const handleRemoveTodo = (id) => {
        dispatch({
            type: 'Remove Todo',
            payload: id
        });
    }

    const handleToggleToDo = (id) => {
        dispatch({
            type: 'Toggle Todo',
            payload: id
        });
    }

    const todosCount = todos.length;
    const pendingTodosCount = todos.filter(todo => !todo.done).length;

    //Al useReducer le pasamos primero el reducer y desp el initialState
    //todos = lista de tareas
    //Para ingresar una nueva tarea lo tenemos que hacer del lado del reducer


    return {
        todos,
        todosCount,
        pendingTodosCount,
        handleNewTodo,
        handleRemoveTodo,
        handleToggleToDo
    }
}