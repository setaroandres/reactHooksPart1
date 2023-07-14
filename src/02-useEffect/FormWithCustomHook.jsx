import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const {formState, onInputChange, onResetForm, username, email, password} = useForm({//estas vars son parte del objeto que el useForm Hook esta regresando
        username: '',
        email: '',
        password: '',
    });//Aca desestructuramos de useForm hook el formState y el onInputChange para usarlos en este form y que esten enlazados con el hook
    //Y aparte le pasamos al useForm hook nuestros campos del form
    
    //const {username, email, password} = formState;//Aca desestructuramos para asociar los campos al form. No lo usamos aca pq lo exponemos en el hook (...formState)

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
            <h1>Formulario con custom hook</h1>
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
                placeholder="Email"
                name="email" 
                value={email}
                onChange={onInputChange}
            />
            
            <input 
                type="password"
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password" 
                value={password}
                onChange={onInputChange}
            />

            <button 
                type="reset"
                className="btn btn-warning mt-2"
                onClick={onResetForm}>
                    Borrar
            </button>

            {/* {
                (username === 'andresito') && <Message />
            } */}

        </>
    )
}
