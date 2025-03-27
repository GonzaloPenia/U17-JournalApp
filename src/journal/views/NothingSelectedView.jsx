import { StarOutlined } from "@mui/icons-material"
import { Box, Typography, Grid2, Toolbar } from "@mui/material"


export const NothingSelectedView = () => {
  return (
    <Box component="main"
        sx={{
            marginTop: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: 'calc(100vh - 110px)',
            bgcolor: "primary.main",
            borderRadius: 3,
        }}>
                <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 1
                }}>
                        <Grid2>
                            <StarOutlined sx={{fontSize:100, color: 'white'}}  />
                        </Grid2>

                        <Toolbar/>

                        <Grid2>
                            <Typography color='white' variant='h5'>Selecciona o crea una entrada</Typography>
                        </Grid2>
                </Box>

    </Box>
  )
}
