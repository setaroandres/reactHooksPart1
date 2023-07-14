import { useState } from "react";

export const useForm = (initialForm = {}) => {//Con etse parametro vamos a construir el form segun nuestras necesidades

    //React trabaja en una sola via, si hacemos un cambio en el state debemos volver a dibujarlo para que se reflejen los cambios
    const [formState, setFormState] = useState(initialForm);

    //Funcion para cambiar el valor de cualquier input
    const onInputChange = ({target}) => {
        const {value, name} = target;
        setFormState({
            ...formState,
            [name]: value, //Usamos propiedades computadas de js para establecer a todos los 'name' del form, el nuevo value
        })
    };

    const onResetForm = () => {
        setFormState(initialForm);
    };

    return {
        //En el return ponemos lo que debemos exponer a los otros componentes que van a usar este hook
        ...formState, //Con esta desestructuracion lo que hacemos es mandar los valores de los campos que vamos a estar usando en el form 
        formState,
        onInputChange,
        onResetForm
    }
}
