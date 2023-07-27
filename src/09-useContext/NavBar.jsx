import { Link, NavLink } from "react-router-dom"; //El NavLink es un link encargado de la navegacion, cumple la misma tarea y le podemos asiganr una clase en particular depende dond se encuentre

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark rounded-3" data-bs-theme="dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">useContext</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <NavLink 
                        className={ ({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}//con los args obtenemos propiedades, entre ellas si esta activo el link o no (segun adonde apunta el to="")
                        to="/">
                            Home
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        to="/about">
                            About
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        to="/login">
                            Login
                    </NavLink>
                </ul>
            </div>
        </div>
    </nav>
  )
}
