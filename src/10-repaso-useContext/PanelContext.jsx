import { Alert, Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext, UserContext } from "./MainAppContext";

export const PanelContext = ({title, children}) => {

  const theme = useContext(ThemeContext);
  const {user} = useContext(UserContext);
  const className = 'panel-' + theme;

  return (
    <section className={className}>
      <Typography
        variant="h1"
        sx={{
          fontSize: 32,
          fontWeight: 500,
          textAlign: "center",
          mb: 3
        }}
        className={theme}
      >
        {title}
      </Typography>
      {children}
      
      {
        (user?.name && user?.email) && 
          <Alert severity="success" sx={{mt: 3}}>
            <Typography paragraph sx={{m: 0}}>You are logged as <b>{user.name}</b> using <b>{user.email}</b> as contact email</Typography>
          </Alert>    
      }
      
    </section>
  )
}

