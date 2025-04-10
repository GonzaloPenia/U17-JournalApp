import React, { useEffect, useMemo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { SaveOutlined, UploadOutlined } from '@mui/icons-material'
import { Typography, Button, TextField, IconButton } from '@mui/material'
import Grid from '@mui/material/Grid';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

import { ImageGallery } from '../components'
import { useForm } from '../../hooks'
import { setActiveNote, startSaveNote, startUploadingFiles } from '../../store/journal';

export const NoteView = () => {
    
    const dispatch = useDispatch();
    
    const {active: note, messageSaved, isSaving} = useSelector(state => state.journal);
    
    const {body, title, date, onInputChange, formState} = useForm( note );
    const dateString = useMemo(() => {
        
        const newDate = new Date( date );
        
        return newDate.toUTCString();
    }, [date])

    const fileInputRef = useRef();
    
    useEffect(() => {
        dispatch( setActiveNote(formState) );
    }, [formState])
    
    useEffect(() => {
      if(messageSaved.length>0){
        Swal.fire('Nota actualizada', messageSaved, 'success');
      }
    }, [messageSaved])
    
    const onFileInputChange = ({target}) => {
        if(target.files===0) return;
        console.log('subiendo archivos');
        dispatch(startUploadingFiles(target.files));
    }

    const onSaveNote = () => { 
        dispatch( startSaveNote() );
    }

    return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb:1 }}>
        <Grid>
            <Typography fontSize={39} fontWeight='light' >{dateString}</Typography>
        </Grid>
        
        <Grid>
            <input
                type="file" 
                multiple
                ref={ fileInputRef }
                onChange={ onFileInputChange } 
                style={{display: 'none'}}
            />

            <IconButton
                color="primary"
                disabled={isSaving}
                onClick= { () => fileInputRef.current.click() }
            >
                <UploadOutlined/>
            </IconButton>
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
