import { Checkbox, FormControlLabel, Grid } from "@mui/material";
import { createContext, useState } from "react";
import { FormContext } from "./FormContext";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// useContext returns the context value for the calling component. It is determined as the value passed to the closest SomeContext.Provider above the calling component in the tree. 
// If there is no such provider, then the returned value will be the defaultValue you have passed to createContext for that context. The returned value is always up-to-date. 
// React automatically re-renders components that read some context if it changes.

export const ThemeContext = createContext(null);
export const UserContext = createContext(null);

export const MainAppContext = () => {

  // useContext: es un hook de React que te permmite leer y suscribirte al contexto de la app desde el componente. 
  //El context que pasamos dentro de useContext lo tenemos que crear usando el createContext()
  // In this example, the MyApp component holds a state variable which is then passed to the ThemeContext provider. Checking the “Dark mode” checkbox updates the state. 
  // Changing the provided value re-renders all the components using that context.

  const [theme, setTheme] = useState('light');
  const [user, setUser] = useState({});

  return (
    <ThemeContext.Provider value={theme}>
      <UserContext.Provider value={{
        user,
        setUser
      }}>
        <Grid 
          container
          justifyContent='center'
        >
          <FormContext />
          <Grid
            item
            xs={12}
            md={8}
            display='flex'
          >
            <FormControlLabel
              control={<Checkbox 
                sx={{
                  color: "green",
                  '&.Mui-checked': {
                    color: "red"
                  }
                }}
                checked={theme === 'dark'}
                onChange={(e) => {
                  setTheme(e.target.checked ? 'dark' : 'light')
                }}
              />}
              label='Use dark mode'
            />
          </Grid>
        </Grid>
      </UserContext.Provider>
    </ThemeContext.Provider>
  )
}

