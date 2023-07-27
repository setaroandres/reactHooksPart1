import { createContext } from "react";

/**
 * Para que creamos este userContext?
 * Nos permite saber a nosotros como luce la información que vamos a poner ahi
 * Nos sirve para que nuestro hook de React busque este contexto
 * Define el proveedor (En este caso es el UserProvider)
 * En el contexto colocamos la informacion que queremos (esto de hace en el provider)
 * Si queremos tener acceso a esta info debemos usar el hook useContext
 */

export const UserContext = createContext();//el valor que le pasamos por defecto es el valor que vamos a exponer a toda la app cuando usen ese contexto, lo podemos dejar undefined