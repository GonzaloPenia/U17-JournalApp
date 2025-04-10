import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
    },
    reducers: {
        savingNewNote:(state) => {        
            state.isSaving = true;
        },
        addNewEmptyNote:(state,action) => {
            state.notes.push(action.payload);
            state.isSaving=false;
        },
        setActiveNote: (state,action) => { 
            state.active = action.payload;
            state.messageSaved = '';
        },
        setNotes: (state,action) => { 
            state.notes=action.payload;
        },
        setSaving: (state) => { 
            state.isSaving = true;
            state.messageSaved = '';
            //TODO: Agregar un mensaje de error
        },
        updateNote: (state,action) => { 
            state.isSaving = false;
            state.notes = state.notes.map( note => {
                if(note.id === action.payload.id){
                    return action.payload;
                }

                return note;
            });
            //TODO: Mostrar mensaje de actualizacion

            state.messageSaved = `La nota fue actualizada correctamente`;
        },


        setPhotosToActiveNote: (state,action) => { 
            
            console.log(typeof(state.active.imageUrls));
            
            state.active.imageUrls = [ ...state.active.imageUrls, ...action.payload ];
            
            console.log(typeof(state.active.imageUrls));
            
            state.isSaving = false;
        },


        deleteNoteById: (state,action) => { 

        }
    }
});


// Action creators are generated for each case reducer function
export const { 
    addNewEmptyNote,
    savingNewNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteById,
    setPhotosToActiveNote,

} = journalSlice.actions;