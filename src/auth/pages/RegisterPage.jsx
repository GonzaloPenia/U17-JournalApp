import { Link as RouterLink } from "react-router-dom";
import { Box,Typography,TextField, Grid2,Button,Link } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";

const formData = {
    email:'gonzalo.penia@google.com',
    password:'123456',
    displayName:'Gonzalo Peña',
}    
const formValidations = {
    email:[ (value) => value.includes('@'),'El correo debe tener un @'],
    password:[ (value) => value.length >=6 ,'La contraseña debe tener al menos 6 caracteres'],
    displayName:[ (value) => value.length >=2 ,'El nombre es obligatorio'],
}

export const RegisterPage = () => {
    
    
    const { formState, displayName, email, password, onInputChange, 
            isFormValid, displayNameValid, emailValid, passwordValid
    } = useForm(formData);

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
        
    }


    return (
        <AuthLayout title="Creá tu cuenta:">
        
        <Box>
            <Box>
                {/* TextField's */}
                <Grid2 container component="form" onSubmit={onSubmit} spacing={2}>

                    <Grid2 size={12}>

                        <TextField 
                            id="name" 
                            name="displayName" 
                            value={displayName} 
                            onChange={onInputChange} 
                            label="Nombre completo" 
                            type="text" 
                            placeholder="Juan Martinez" 
                            size="small" 
                            error={!displayNameValid}
                            helperText="El nombre es obligatorio"
                            fullWidth />


                    </Grid2>

                    <Grid2 size={12}>

                        <TextField 
                            id="email" 
                            name="email" 
                            value={email} 
                            onChange={onInputChange} 
                            label="Email" 
                            type="email" 
                            placeholder="email@google.com" 
                            size="small"
                            error={!emailValid}
                            helperText="Email no valido" 
                            fullWidth />

                    </Grid2>

                    <Grid2 size={12}>

                        <TextField 
                            id="password" 
                            name="password" 
                            value={password} 
                            onChange={onInputChange} 
                            label="Contraseña" 
                            type="password" 
                            placeholder="password" 
                            size="small" 
                            error={!passwordValid}
                            helperText="Contraseña no valida" 
                            fullWidth />            
                    
                    </Grid2>

                    <Grid2 size={12}>

                        <TextField 
                            id="confirm-password" 
                            label="Confirmar contraseña" 
                            type="password" 
                            placeholder="password" 
                            size="small" 
                            fullWidth />            
                        
                    </Grid2>


                {/* Buttons */}
                <Grid2 size={12}>
        
                        <Button 
                            type="submit" 
                            variant="contained" 
                            fullWidth
                            > Crear cuenta 
                        </Button>
                    
                </Grid2>


                </Grid2>
        
                
                
                
                
                
                {/* Login */}
                <Grid2 container justifyContent="end" sx={{ mt: 2 }} > 
        
                    <Typography sx={{mr:1}}>¿Ya tienes una cuenta? </Typography>
                    <Link component={RouterLink} color="inherit" to="/auth/login"> Ingresar. </Link>
        
                </Grid2>
    
            </Box>
    
        </Box>
        
        
         </AuthLayout>
        
    
    );
  
  };