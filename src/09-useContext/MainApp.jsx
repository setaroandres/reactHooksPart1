import { Navigate, Route, Routes } from "react-router-dom";
import { AboutPage } from "./AboutPage";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { NavBar } from "./NavBar";
import { NotFoundPage } from "./NotFoundPage";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
  return (
    <UserProvider>
        <h1>Main App</h1>
        <NavBar />
        <hr />

        {/* Aca podemos definir las rutas, ya que es el componente route. El Route es un HOC que recibe hijos, que van a ser las rutas de nuestra App*/}
        <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="about" element={ <AboutPage /> } />
            <Route path="login" element={ <LoginPage /> } />
            <Route path="404" element={ <NotFoundPage /> } />
            
            {/*Podemos usar wildcards para redireccionar en caso de 404 */}
            {/* <Route path="/*" element={ <NotFoundPage/> } /> */}

            {/* Tbn podemos usar el Navigate que apenas se renderiza va a hacer la navegacion que le indicamos */}
            <Route path="/*" element={ <Navigate to="404"/> }/>
        </Routes>
    </UserProvider>
  )
}
