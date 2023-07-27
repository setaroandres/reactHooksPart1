import { useState } from "react";
import { UserContext } from "./UserContext";



//Los High Level components, ademas de recibir las propiedades de siempre, recieb unn children (hijos que los componentes va a tener, es opcional)
export const UserProvider = ({children}) => {//El children lo renderizamos dentro de userContext, no importa cuantos hijos vengan
    /*con el .Provider puedo proveer toda la info que este UserContext va a proporcionarle al arbol de nuestros componentes. 
    El value es el que le pasamos y es la info que cualquier hijo de este user provider va a poder obtener de este userContext, se pueden mandar funciones, objetos, etc
    Este UserProvider lo debemos colocar lo mas arriba posible para que todos los hjos puedan usar la info, usualmente en el MainApp.jsx asi todos los elementos que 
    estan adentro lo pueden usar*/

    const [user, setUser] = useState();

    return (
        // <UserContext.Provider value={{ hola: 'Mundo', user }}>
        <UserContext.Provider value={{user, setUser}}>
            { children }
        </UserContext.Provider>
    )
}
