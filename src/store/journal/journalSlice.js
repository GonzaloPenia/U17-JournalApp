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
            console.log(state.isSaving);
            state.isSaving = true;
            console.log(state.isSaving);
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

        },
        updateNote: (state,action) => { 

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

} = journalSlice.actions;