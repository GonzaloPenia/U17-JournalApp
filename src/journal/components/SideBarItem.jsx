import { TurnedInNot } from '@mui/icons-material'
import { Grid2, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useMemo } from 'react'
import { setActiveNote } from '../../store/journal/journalSlice'
import { useDispatch } from 'react-redux'

export const SideBarItem = ({ title = '', body, id, date, imageUrls }) => {
  

    const dispatch = useDispatch();

    const onClickNote = () => { 
        dispatch ( setActiveNote({ title, body, id, date, imageUrls }) );
     }
    
    const newtitle = useMemo (() => {
        return title.length > 34
            ? title.substring(0,34) + '...'
            : title;
    },[title])
  
    return (
    
    <ListItem key={ id } disablePadding >
        <ListItemButton onClick={onClickNote}>
            
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
