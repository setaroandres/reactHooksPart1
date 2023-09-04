import { useState } from "react";


export const CounterState = () => {

  const [numero, setNumero] = useState(0);
  const [cuenta, setCuenta] = useState(0);

  const handleCuenta = (numero = 0) => {
    setCuenta(cuenta + parseInt(numero));
  }

  const handleNumero = ({target}) => {
    setNumero(target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log('numero: ', numero);
    handleCuenta(numero);
  }

  return (
    <>

      <form
        onSubmit={(event) => onSubmit(event)}
      >
        <input 
          type="number" 
          value={numero}
          onChange={handleNumero}
        />
        <button
          type="submit"
        >
          Agregar Cuenta
        </button>
      </form>

      <div>Cuenta Final: {cuenta}</div>

    </>
  )
}
