import { useCounter, useFetch} from "../hooks";
import { Character } from "./Character";
import { LoadingCharacter } from "./LoadingCharacter";

export const MultipleCustomHooks = () => {
    
    //de esta manera mandamos a llamar al hook y desestructuramos las prop que queremos utilizar del hook (las debe retornar el hook en su return)
    const { counter, increment, decrement } = useCounter(1);
    const baseUrl = `https://rickandmortyapi.com/api/character/${counter}`;
    
    //Implementar el hasError con un try y un catch
    const { data, isLoading, hasError } = useFetch(baseUrl);
    const { name, image, status } = !!data && data;//Si la data tiene un valor (!!data - Tranformamos la data en boolean), toma la data (&& data - entonces data)

    return (
        <>
            <h1>Rick and Morty Characters</h1>
            <hr />
            {
                isLoading
                    ? <LoadingCharacter />
                    : <Character 
                        image={image}
                        name={name}
                        status={status}
                    />
            }
            <button 
                className="btn btn-danger"
                disabled={counter === 1 || isLoading}
                onClick={() => decrement()}>
                Previous Character
            </button>

            <button 
                className="btn btn-danger"
                onClick={() => increment()}>
                Next Character
            </button>
        </>
    )
}
