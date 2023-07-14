import { useCounter } from "../hooks/useCounter"



export const CounterWithCustomHook = () => {

	const { counter, increment, decrement, reset  } = useCounter(); //Aca podemos desestructurar todos los metodos qye se encuentran en useCounter

  return (
    <>
			<h1>CounterWithCustomHook: {counter}</h1>
			<hr />

			<button 
				className="btn btn-primary"
				onClick={() => increment(1)}>
					+1
			</button>

			<button 
				className="btn btn-primary"
				onClick={reset}>
					Reset
			</button>

			<button 
				className="btn btn-primary"
				onClick={() => decrement(1)}>
					-1
			</button>
    </>
  )
}
