import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Box, Typography, TextField, Grid, Button, Link, Alert } from "@mui/material";
import { Google } from "@mui/icons-material";

import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth"

const formData = { 
    email:'',
    password:''
}

export const LoginPage = () => {
    
    const { status, errorMessage } = useSelector( state => state.auth );

    const dispatch = useDispatch();
    const {email, password, onInputChange} = useForm({ formData });
    
    const isAuthenticating = useMemo(() => status === 'checking', [status]);

    const onSubmit = (event) => {
        event.preventDefault();
        console.log({email, password});
        dispatch( startLoginWithEmailPassword({email,password}) );

    }
    
    const onGoogleSingIn = () => { 
        console.log("On google singin");
        dispatch( startGoogleSignIn() );
    }

    return (
        <AuthLayout title="Ingresa a tu cuenta.">
            <form onSubmit={onSubmit}>
                <Box className='animate__animated animate__fadeIn'>
                    <Box>
                        {/* TextField's */}
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField 
                                    id="email" 
                                    label="Email" 
                                    type="email" 
                                    placeholder="email@google.com" 
                                    size="small" 
                                    name="email" 
                                    value={email} 
                                    onChange={onInputChange} 
                                    fullWidth 
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField 
                                    id="password" 
                                    label="Password" 
                                    type="password" 
                                    placeholder="password" 
                                    size="small" 
                                    name="password" 
                                    value={password} 
                                    onChange={onInputChange} 
                                    fullWidth 
                                />            
                            </Grid>
                        </Grid>
                        
                        <Grid size={12} display={ !!errorMessage ? '': 'none' }>
                            <Alert severity='error'>
                                {errorMessage}
                            </Alert>
                        </Grid>

                        {/* Buttons */}
                        <Grid container spacing={2} sx={{ mt: 2 }}>
                            <Grid item xs={12} md={6}>
                                <Button                              
                                disabled={isAuthenticating}  
                                type="submit" 
                                variant="contained" 
                                fullWidth
                                > 
                                Login </Button>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Button
                                    disabled={isAuthenticating} 
                                    variant="contained" 
                                    onClick={onGoogleSingIn} 
                                    fullWidth 
                                    startIcon={<Google />}
                                >
                                    Google
                                </Button>
                            </Grid>
                        </Grid>
                        
                        {/* New account */}
                        <Grid container justifyContent="end" sx={{ mt: 2 }} > 
                            <Typography sx={{mr:1}}>¿Aún no tienes una cuenta? </Typography>
                            <Link component={RouterLink} color="inherit" to="/auth/register"> Create an account. </Link>
                        </Grid>
                    </Box>
                </Box>
            </form>
        </AuthLayout>
    );
};