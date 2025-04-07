import { useDispatch } from "react-redux"
import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid2, IconButton, Toolbar, Typography } from "@mui/material"
import { startLogout } from "../../store/auth";

export const NavBar = ({ drawerWidth }) => {
  
    const dispatch = useDispatch();
    
    const onLogout = () => { 
        dispatch( startLogout() );
        }

    return (
    <AppBar position='fixed'
            sx={{
                width: {sm: `calc(100% - ${drawerWidth}px)`},
                ml:    {sm: `${drawerWidth}px`}
            }}
    >
        <Toolbar>
            <IconButton
                    color="inherit"
                    edge="start"
                    sx={{mr: 2, display: {sm: 'none'} }}
            >    
                <MenuOutlined/>
            </IconButton>

            <Grid2 container direction='row' justifyContent='space-between' alignItems='center' sx={{ width: '100%' }}>
                <Typography variant='h7' noWrap component='div'>JournalApp</Typography>

                <IconButton color='error' sx={{ ml: 'auto' }} onClick={onLogout}>
                    <LogoutOutlined/>
                </IconButton>
            </Grid2>

        </Toolbar>
    </AppBar>
  )
}
