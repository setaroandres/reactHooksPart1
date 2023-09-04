import { useContext } from "react";
import { ThemeContext } from "./MainAppContext";

import { LoginOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";

export const ButtonContext = ({children, disabled}) => {
  //Instanciamos aca para poder usar el context
  const theme = useContext(ThemeContext);

  const className = 'button-' + theme;
  return (
    <>
      <Button 
        type="submit"
        color={disabled ? 'error' : 'success'}
        variant="contained"
        disabled={disabled}
        className={className}
        sx={{
          mt: 2
        }}
        endIcon={<LoginOutlined />}
      >
        {children}
      </Button>
    </>
  );
}
