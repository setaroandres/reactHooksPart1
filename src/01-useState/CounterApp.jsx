import { useState } from "react"


export const CounterApp = () => {

	//Si queremos cambiar los valores de un obj econ useState debemos preservar los valores que no van a cambiar, sino se pierden
	const [state, setCounter] = useState({
		counter1: 10,
		counter2: 20,
		counter3: 30
	});

	const {counter1, counter2, counter3} = state;

	return (
		<>
			<h1>Counter: {counter1}</h1>
			<h1>Counter: {counter2}</h1>
			<h1>Counter: {counter3}</h1>
			<hr />

			<button
					type="button"
					className="btn"
					onClick={() => 
						setCounter({
							...state,
							counter1: counter1 + 1
						})
					}>+1
			</button>   
		</>
	)
}
