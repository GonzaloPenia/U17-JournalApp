import { Link as RouterLink } from "react-router-dom";
import { Box,Typography,TextField, Grid2,Button,Link } from "@mui/material";
import { Google } from "@mui/icons-material";
import { AuthLayout } from "../layout/AuthLayout";
  
export const RegisterPage = () => {
  
    return (
        <AuthLayout title="Creá tu cuenta:">
        
        <Box>
            <Box>
                {/* TextField's */}
                <Grid2 container component="form" spacing={2}>

                    <Grid2 size={12}>

                        <TextField id="name" label="Nombre completo" type="text" placeholder="Juan Martinez" size="small" fullWidth />

                    </Grid2>

                    <Grid2 size={12}>

                        <TextField id="email" label="Email" type="email" placeholder="email@google.com" size="small" fullWidth />

                    </Grid2>

                    <Grid2 size={12}>

                        <TextField id="password" label="Contraseña" type="password" placeholder="password" size="small" fullWidth />            
                    
                    </Grid2>

                    <Grid2 size={12}>

                        <TextField id="confirm-password" label="Confirmar contraseña" type="password" placeholder="password" size="small" fullWidth />            
                    
                    </Grid2>




                </Grid2>
        
                
                
                {/* Buttons */}
                <Grid2 container spacing={2} sx={{ mt: 2 }}>
        
                    <Grid2 size={{ xs: 12, md: 6 }}>

                        <Button variant="contained" fullWidth> Login </Button>

                    </Grid2>

                    <Grid2 size={{ xs: 12, md: 6 }}>

                        <Button variant="contained" fullWidth startIcon={<Google />} >Google</Button>

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