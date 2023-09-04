import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

    const {user, setUser} = useContext(UserContext);//Commo parametro le tengo que decir que context queremos usar, en este caso el UserContext

    return (
      <>
          <h1>Login Page</h1>
          <hr />

          { <pre>
            {JSON.stringify(user, null, 3)}
          </pre> }

          <button 
            className="btn btn-primary"
            onClick={() => setUser({
              id: 123,
              name: 'Andres Setaro',
              email: 'andres@andres.com'
            })}>
            Establecer usuario
          </button>
      </>
    )
  }
  