import { TurnedInNot } from '@mui/icons-material'
import { Grid2, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useMemo } from 'react'

export const SideBarItem = ({ title = '', body, id }) => {
  
    const newtitle = useMemo (() => {
        return title.length > 17
            ? title.substring(0,17) + '...'
            : title;
    },[title])
  
    return (
    <ListItem key={ id } disablePadding>
        <ListItemButton>
            <ListItemIcon>
                <TurnedInNot />
            </ListItemIcon>
            <Grid2 container>
                <ListItemText primary={ newtitle } />
                <ListItemText secondary={ body } />
            </Grid2>
        </ListItemButton>
    </ListItem>
  )
}
