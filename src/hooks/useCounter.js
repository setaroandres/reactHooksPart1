//Un hook es una fcn que tiene un return
//Dentro de los custom hooks podemos tener otro hook

//el [object Object] es la representacion toString de un objecto

import { useState } from "react";

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue);

    const increment = (value = 1) => {
        setCounter(counter + value);
    };

    const decrement = (value = 1) => {
        if (counter === 0) return;
        setCounter(counter - value);
    };

    const reset = () => {
        setCounter(initialValue); //el set...setea el valor del counter con lo que le pasemos como parametro
    };

    return {
        counter,
        increment,
        decrement,
        reset
    }
}