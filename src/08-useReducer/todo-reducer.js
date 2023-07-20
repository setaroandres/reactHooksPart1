
//Definimos el reducer con sus parametros
export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case 'Add Todo':
            //Mientras estamos en fase de desarrollo podemos lanzar un throw error
            //throw new Error('action.type = ABC no está implementada');
            //Siempre tenemos que hacer return de un nuevo state;
            //En este caso tenemos que devolver un arreglo, pero como no debemos mutar el arreglo, no tenemos que hacer un push.
            //Hacemos el spread del initialState para incluir las tareas como estan hasta el momento y le agregamos el payload de la nueva tarea.
            return [ ...initialState, action.payload ]
            break;
        
        case 'Remove Todo':
            //Aca no necesitamos desestructurar ya que el filter no muta el arreglo original, sino que crea uno nuevo
            //Le decimos que nos devuelva un nuevo arreglo, con los elementos cuyo id no sea igual al id que mando en el payload
            return initialState.filter(todo => todo.id !== action.payload)
            break;

        case 'Toggle Todo':
            //el map crea un nuevo array y lo transforma en lo que nosotros le digamos
            return initialState.map( todo => {

                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            });
            
            break;
    
        default:
            return initialState;
    }

    return;
}