import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { SaveOutlined } from '@mui/icons-material'
import { Typography, Button, TextField } from '@mui/material'
import Grid from '@mui/material/Grid';

import { ImageGallery } from '../components'
import { useForm } from '../../hooks'
import { setActiveNote, startSaveNote } from '../../store/journal';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

export const NoteView = () => {
    
    const dispatch = useDispatch();
    
    const {active: note, messageSaved, isSaving} = useSelector(state => state.journal);
    
    const {body, title, date, onInputChange, formState} = useForm( note );
    const dateString = useMemo(() => {
        
        const newDate = new Date( date );
        
        return newDate.toUTCString();
    }, [date])

    
    useEffect(() => {
        dispatch( setActiveNote(formState) );
    }, [formState])
    
    useEffect(() => {
      if(messageSaved.length>0){
        Swal.fire('Nota actualizada', messageSaved, 'success');
      }
    }, [messageSaved])
    

    const onSaveNote = () => { 
        
        dispatch( startSaveNote() );
    }

    return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb:1 }}>
        <Grid>
            <Typography fontSize={39} fontWeight='light' >{dateString}</Typography>
        </Grid>
        
        <Grid>
            <Button disabled={isSaving} onClick={onSaveNote} color="primary" sx={{ padding:2 }}>
                <SaveOutlined sx={{fontSize: 30, mr: 1 }} />
                Guardar
            </Button>
        </Grid>

        <Grid container direction='row' alignItems='center' sx={{ mb:1 }}>
            <TextField
                    name="title"
                    value={title}
                    onChange={onInputChange}
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="¿Que sucedió hoy?"
                    label="Título"
                    sx={{border: 'none', mb:1}}
            />
            <TextField
                    name="body"
                    value={body}
                    onChange={onInputChange}
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="Desarrolle la noticia"
                    label="Texto"
                    minRows={5}
            />
        </Grid>


        <ImageGallery/>  


    </Grid>
  )
}
