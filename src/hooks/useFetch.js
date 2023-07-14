import { useEffect, useState } from "react";

export const useFetch = (url) => { //url que necesito para el fetch

    //Aca vamos a usar un useState para poder regresar la data que queremos utilizar
    //Para cuando esta cargando, cuando hay cambios, etc
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    });

    const getFetch = async() => {

        //Aca podemos mandar a llamar el state cada vez que se cambie la url, desesctructuramos y solo cambiamos el isLoading
        setState({
            ...state,
            isLoading: true
        });

        const resp = await fetch(url);
        const data = await resp.json();

        //Una vez que tenemos la data podemos llamar al setState para decirle que el estado cambio y tenemos que redibujar el componente
        //Si mandamos el setState a un objeto le tenemos que mandar todas las propiedades
        setState({
            data,
            isLoading: false,
            hasError: null
        });

    }

    //Vamos a usar un useEffect poara disparar la busqueda cuando se monta el componente
    useEffect(() => {
        getFetch();
    }, [url])//La dependencia aca es el url, cada vez que cambie se va a disparar el useEffect
    

    return {
        data: state.data, 
        isLoading: state.isLoading,
        hasError: state.hasError
    };
}
