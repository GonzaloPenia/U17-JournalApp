import { Box, Drawer } from '@mui/material'
import React from 'react'

export const SideBar = ({ drawerWidth }) => {
  return (
  <Box component='nav'
        sx={{ width: {sm: drawerWidth }, flexShrink:{sm:0} }}
  >
      <Drawer
        variant='permanent'
        open
        sx={{
          display: {xs: 'block'},
          '&.MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}
        }}
      >

      </Drawer>
  </Box>
  
  )
}
