//El useRef es un hook que nos permite cambiar valores de vars sin que se re renderize el componente, es como el useState pero sin re renderizacion.

import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef()//Nombre y valor inicial como parametro. Le ponemos un nombre significativo al elemento que estamos haciendo referencia
    //En el elemento HTML lo referenciamos para poder usarlo

    const clickFocus = () => {
        console.log(inputRef);
        //Y desp solamente le damos la instruccion de que queremos hacer con ese elemento (Como si lo hubieramos elegido con querySelector en JS)
        inputRef.current.select();
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input 
                type="text"
                placeholder="Ingrese su nombre"
                className="form-control"
                ref={inputRef} />

            <button 
                className="btn btn-primary mt-2"
                onClick={clickFocus}>
                Set Focus
            </button>
        </>
    )
}
