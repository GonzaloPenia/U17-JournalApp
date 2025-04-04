import { Box, CircularProgress } from '@mui/material'
import React from 'react'

export const CheckingAuth = () => {
  return (
    <Box component="main"
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                bgcolor: "primary.main",
            }}>
            
                <Box     
                    sx={{
                        width: {
                            xs: "80%",
                            sm: "60%",
                            md: "40%",
                            lg: "30%",
                        },
                    }} >
                        <CircularProgress color="warning" />
                </Box>
    
    </Box>          
  )
}
