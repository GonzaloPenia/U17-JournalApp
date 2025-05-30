import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Box,Typography,TextField, Grid2,Button,Link, Alert } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { startCreatingUserWithEmailPassword } from "../../store/auth";

const formData = {
    email: '',
    password: '',
    displayName: ''
  }
   
const formValidations = {
    email:[ (value) => value.includes('@'),'El correo debe tener un @'],
    password:[ (value) => value.length >=6 ,'La contraseña debe tener al menos 6 caracteres'],
    displayName:[ (value) => value.length >=2 ,'El nombre es obligatorio'],
}

export const RegisterPage = () => {
    
    const dispatch = useDispatch();

    const [formSubmitted, setFormSubmitted] = useState(false);
    
    const {status,errorMessage} = useSelector(state=>state.auth);
    const isCheckingAuthentication = useMemo(() => status==='checking',[status])

    const { formState, displayName, email, password, onInputChange, 
            isFormValid, displayNameValid, emailValid, passwordValid
    } = useForm(formData,formValidations);

    const onSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true);
        
        if (!isFormValid) return

        dispatch(startCreatingUserWithEmailPassword(formState));
        
    }


    return (
        <AuthLayout title="Creá tu cuenta:">
        
        <Box className='animate__animated animate__fadeIn'>
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
                            error={!!displayNameValid}
                            helperText={displayNameValid}
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
                            error={!!emailValid}
                            helperText={emailValid}
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
                            error={!!passwordValid}
                            helperText={passwordValid}
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

                        <Grid2 size={12} display={ !!errorMessage ? '': 'none' }>
                            <Alert severity='error'>
                                {errorMessage}
                            </Alert>
                        </Grid2>

                        <Button 
                            disabled={isCheckingAuthentication}
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