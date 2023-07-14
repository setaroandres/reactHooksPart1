import { useEffect, useState } from "react";
import { Message } from "./Message";


export const SimpleForm = () => {

    //React trabaja en una sola via, si hacemos un cambio en el state debemos volver a dibujarlo para que se reflejen los cambios
    const [formState, setFormState] = useState({
        username: 'andres',
        email: 'andres@andres.com'
    });

    const {username, email} = formState;

    //Funcion para cambiar el valor de cualquier input
    const onInputChange = ({target}) => {
        const {value, name} = target;
        setFormState({
            ...formState,
            [name]: value, //Usmos propiedades computadas de js para establecer a todos los 'name' del form, el nuevo value
        })
    };

    //El useEffect es utilizado para disparar efectos secundarios
    //Se llama cada vez que el useState se ejecuta
    //No se recomienda que pongamos un useEffect sin ninguna dependencia (es el segundo valor que le pasamos, luego del callback)
    //Las dependencias son las condiciones por las cuales queremos que el useEffect se vuelva a disparar. Si ponemos un [] decimos que solo se ejecute cuando el componente es montado
    //Se recomienda tener un useEffect pasra cada tarea por separado
    useEffect(() => {
        //console.log('useEffect called on init');
    }, []);//Aca le decimos, con la dependencia, que se ejecute solo al montar en componente
    
    useEffect(() => {
        //console.log('useEffect called on formState changed');
    }, [formState]);//Aca le decimos, con la dependencia, que se ejecute cada vez que el formState cambie
    
    useEffect(() => {
        //console.log('useEffect called on email changed');
    }, [email]);//Aca le decimos, con la dependencia, que se ejecute cada vez que cambie el email

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <input 
                type="text"
                className="form-control"
                placeholder="Username"
                name="username" 
                value={username}
                onChange={onInputChange}
            />
            
            <input 
                type="email"
                className="form-control mt-2"
                placeholder="andres@andres.com"
                name="email" 
                value={email}
                onChange={onInputChange}
            />

            {
                (username === 'andresito') && <Message />
            }

        </>
    )
}
