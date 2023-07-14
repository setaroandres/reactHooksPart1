import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);
    //Cuando enviamos una fcn como parametro no podemos usar el memo ya que las fcn cada vez que se ejecutan ocupan una posicion distinta en memoria, por eso no lo puede memorizar
    //para poder enviar una fcn y que el componente hijo no se vuelva a renderizar podemos usar el useCallback

    //Sirve para memorizar funciones, que solo va a renderizar el componente hijo si algo cambia en esa funcion
    const incrementFather = useCallback(
      (value) => {//aca recibimos el param del componente hijo que pasa en la llamada al metodo
        setCounter((counter) => counter + value);
      },
      [],
    )
    


    //En vez de crear un metodo y enviarlo, lo hacemos usando el useCallback
    // const incrementFather = () => {
    //     setCounter(counter + 1);
    // }

    return (
        <>
            <h1>Callback Hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={incrementFather} />
        </>
    )
}
