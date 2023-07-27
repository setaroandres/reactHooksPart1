import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = () => {

  const {user} = useContext(UserContext);//Commo parametro le tengo que decir que sontext queremos usar, en este caso el UserContext

    return (
      <>
          <h1>Home Page <small>{user?.name}</small></h1>
          <hr />

          { <pre>
            {JSON.stringify(user, null, 3)}
          </pre> }
      </>
    )
  }
  