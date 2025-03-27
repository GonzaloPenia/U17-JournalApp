import { SaveOutlined } from '@mui/icons-material'
import { Typography, Button, TextField } from '@mui/material'
import Grid from '@mui/material/Grid';
import React from 'react'
import { ImageGallery } from '../components'

export const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb:1 }}>
        <Grid>
            <Typography fontSize={39} fontWeight='light' >23 de marzo, 2025</Typography>
        </Grid>
        
        <Grid>
            <Button color="primary" sx={{ padding:2 }}>
                <SaveOutlined sx={{fontSize: 30, mr: 1 }} />
                Guardar
            </Button>
        </Grid>

        <Grid container direction='row' alignItems='center' sx={{ mb:1 }}>
            <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="¿Que sucedió hoy?"
                    label="Título"
                    sx={{border: 'none', mb:1}}
            />
            <TextField
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
