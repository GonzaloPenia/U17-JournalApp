import { Link as RouterLink } from "react-router-dom";
import { Box, Typography,TextField, Grid2,Button,Link } from "@mui/material";
import { Google } from "@mui/icons-material";
  
export const LoginPage = () => {
  
    return (
  
        <Box component="main"
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                bgcolor: "primary.main",
            }}>
            
                <Box component="section"    
                    sx={{

                        width: {
                            xs: "80%",
                            sm: "60%",
                            md: "40%",
                            lg: "30%",
                        },

                        bgcolor: "white",
                        padding: { xs: 2, sm: 3, md: 4 },
                        borderRadius: 2,
                    }}>
            
                    <Typography variant="h5" sx={{ mb: 2, textAlign: "center" }} >Login</Typography>           
                    
                    
                    {/* TextField's */}
                    <Grid2 container component="form" spacing={2}>

                        <Grid2 size={{ xs: 6, md: 12 }}>

                            <TextField id="email" label="Email" type="email" placeholder="email@google.com" size="small" fullWidth />

                        </Grid2>

                        <Grid2 size={{ xs: 6, md: 12 }}>

                            <TextField id="password" label="Password" type="password" placeholder="password" size="small" fullWidth />            
                        
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
                    
                    
                    
                    {/* New account */}
                    <Grid2 container justifyContent="end" sx={{ mt: 2 }} > 
            
                        <Link component={RouterLink} color="inherit" to="/auth/register"> Create an account. </Link>
            
                    </Grid2>
        
                </Box>
    
        </Box>
    
    );
  
  };