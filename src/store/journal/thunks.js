import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { savingNewNote, addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote } from "./journalSlice";
import { loadNotes } from "../../helpers/loadNotes";

export const startNewNote = () => { 
    
    return async (dispatch,getState) => {
        
        console.log('Start new note');
        
        dispatch( savingNewNote() );
        
        const {uid} = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc ( collection( FirebaseDB, `${uid}/journal/notes`) )
        await setDoc(newDoc,newNote)

        newNote.id = newDoc.id;
        dispatch( addNewEmptyNote( newNote ) );
        dispatch( setActiveNote(newNote) )
    }
 }

 export const startLoadingNotes = () => { 
    return async(dispatch,getState) => {
        const {uid} = getState().auth;
        if (!uid) throw newError('Error, el UID no existe');

        const notes = await loadNotes(uid)
        dispatch( setNotes(notes) )
    }
  }

  export const startSaveNote = () => { 
    return async (dispatch,getState) => {
        
        dispatch( setSaving() );
        
        const {uid} = getState().auth;
        const {active:note} = getState().journal;

        const noteToFireStore = {...note};
        delete noteToFireStore.id;

        const docRef = doc( FirebaseDB, `${uid}/journal/notes/${note.id}` );
        await setDoc( docRef, noteToFireStore, { merge: true} );

        dispatch ( updateNote(note) );
    }
   }