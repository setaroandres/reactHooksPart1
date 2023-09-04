import { FormControl, FormHelperText, Grid, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ButtonContext } from "./ButtonContext";
import { ThemeContext, UserContext } from "./MainAppContext";
import { PanelContext } from "./PanelContext";


export const FormContext = () => {
  const theme = useContext(ThemeContext);
  const {user, setUser} = useContext(UserContext);
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const textClass = 'texto-' + theme;
  const inputClass = 'input-' + theme;

  const onSubmit = ({name, email}) => {
    //e.preventDefault();
    console.log({email, name});
    setUser({
      name,
      email
    })
  }

  return (
    <Grid 
        item
        sm={12}
        md={8}
    >
      <PanelContext title="Welcome">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl
              fullWidth
            >
              <TextField
                id="name"
                label="Name" 
                variant="outlined"
                className={inputClass}
                {
                  ...register("name",
                  {
                    required: 'Name is required', 
                    minLength: {
                      value: 2,
                      message: 'Min length is 2'
                    }
                  })
                }
                /**React Hook Form provides an errors object to show you the errors in the form. errors' type will return given validation constraints.*/
                aria-invalid={errors.name ? "true" : "false"}
                // onChange={({target}) => setName(target.value)}
              />
              <FormHelperText className={textClass} sx={{ml: 0}} id="name-helper-text">This field is required.</FormHelperText>
                {
                  /**React Hook Form provides an errors object to show you the errors in the form. errors' type will return given validation constraints. */
                  errors?.name 
                  && <Typography 
                      color="red"
                      sx={{
                        fontSize: 12
                      }}    
                    >{errors.name?.message}</Typography>
                }
            </FormControl>
            
            <FormControl
              fullWidth
            >
              <TextField
                label="Email" 
                id="email"
                variant="outlined"
                className={inputClass}
                sx={{
                  mt: 2
                }}
                {...register("email", {
                  required: 'Email is required',
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: 'Email is not valid'
                  }
                  })
                }
                // onChange={({target}) => setEmail(target.value)}
              />
              <FormHelperText className={textClass} sx={{ml: 0}} id="email-helper-text">This field is required.</FormHelperText>
                {
                  /**React Hook Form provides an errors object to show you the errors in the form. errors' type will return given validation constraints. */
                  errors?.email 
                  && <Typography 
                      color="red"
                      sx={{
                        fontSize: 12
                      }}    
                    >{errors.email?.message}</Typography>
                }
            </FormControl>

            <ButtonContext
            >Log In</ButtonContext>
          </form>
          {/* {!canLogin && <Typography paragraph sx={{mb: 0, mt: 2, color:'red'}}>Fill in both fields.</Typography>} */}
      </PanelContext>
    </Grid>
  );
}
