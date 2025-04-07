import { Box,Toolbar } from '@mui/material'
import { NavBar,SideBar } from '../components/index';

const drawerWidth = 240;

export const JournalLayout = ({children}) => {
  return (
    <Box className='animate__animated animate__fadeIn' sx={{display:'flex'}}>

        <SideBar drawerWidth={drawerWidth} />
        <NavBar drawerWidth={drawerWidth} />
        
        
        <Box component='main'
              sx={{flexGrow: 1, px: 3}}>

            <Toolbar/>
            {children}

        </Box>


    </Box>
  )
}
