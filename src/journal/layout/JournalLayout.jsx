import { Box } from '@mui/material'
import React from 'react'
import { NavBar } from '../components/index';

const drawerWidth = 240;

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{display:'flex'}}>

        <NavBar/>
        
        {/* Sidebar*/}
        
        <Box component='main'
              sx={{flexGrow: 1, p: 3}}>

                  {/* Toolbar*/}
                  {children}
        </Box>


    </Box>
  )
}
