/**El reducer es una fcn comun y corriente. Debe ser una fcn pura, todo lo que realiza se debe resolver de manera interna - sin necesidad de llamar a otras funciones, 
no debe de tener tareas async, debe retornar un nuevo estado - No debemos de mutar es estado inicial, recibe 2 arg (estado inical y accion), no se debe llamar ni al local ni 
al session storage dentro del reducer - ya que si falla se devuelve un error y no un nuevo estado.
Para que hacer reducers? La idea es tener controlado en unsolo lugar todas las acciones que cambian el state de mi aplicacion. 
El reducer tiene todo el mapa de lo que va a pasar (Add, Delete, Update) y se comunica con la vista mandándole el estado (es como un service en angular) */

//Definimos el estado inicial de nuestra vista / app
const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false
}];

//Esto va a ser ser nuestro reducer. Recibe 2 argumentos, el state y la accion (es la que va a decir como quiero que cambie el estado)
const todoReducer = ( state = initialState, action = {} ) => {

    //Aca debemos decirle al reducer que ejecute la tarea que debe hacer (Regresar un nuevo state)
    if (action.type === '[TODO] Add to do') {
        return [
            ...state, //desestructuramos el state que tenemos hasta este momento
            action.payload //y le mandamos el payload nuevo
        ];
    }


    return state; //Siempre debe regresar un estado
}

let todos = todoReducer();
console.log(todos);

//Creamos un nuevo todo que va a modificar el initial state, se lo vamos a mandar al reducer para que produzca un nuevo estado y tenga los 2 todos. 
const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del Poder',
    done: false
}
//Asi luce la accion
const addTodoAction = {
    type: '[TODO] Add to do',//Es un simple string que describe el action
    payload: newTodo//el payload es la informacion que va dentro de la action
}

//Llamamos al reducer y le pasamos el todos y la accion
todos = todoReducer(todos, addTodoAction);

console.log({'state:': todos})

//Hacer mutaciones sobre el state origin al no nos va a redibujar la pagina y no es una buena práctica
//Cuando queremos modificar algo en el reducer (modificar nuestro estado inicial) lo que debemos hacer es mandarle una accion