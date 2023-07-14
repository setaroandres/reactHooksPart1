import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter"


const heavyStuff = (iterationNumber) => {
  for (let index = 0; index < iterationNumber; index++) {
    console.log('Ahi vamos...');

    return `${iterationNumber} iteraciones realizadas`;
  }
}


export const MemoHook = () => {

    const { counter, increment } = useCounter(10);
    const [show, setShow] = useState(true);

    //Usamos el useMemo para memorizar un componente y solo disparar su renderizacion su se actualiza algo en el y en necesario renderizarlo
    //El primer argumento que recibe es una fcn que debe regresar algo
    //En este caso va a memorizar el valor de retorno del método heavyStuff()
    //Como segundo parametro le pasamos las dependencias que deben cambiar para memorizar un valor nuevo
    const memorizedValue = useMemo(() => heavyStuff(counter), [counter])

  return (
    <>
        <h1>Counter: <small>{counter}</small></h1>
        <hr />

        <h4>{memorizedValue}</h4>

        <button
            className="btn btn-primary"
            onClick={() => increment()}>
            +1
        </button>

        <button
            className="btn btn-outline-primary"
            onClick={() => setShow(!show)}>
            Show / Hide {JSON.stringify(show)}
        </button>
    </>
  )
}
