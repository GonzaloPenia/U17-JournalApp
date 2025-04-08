import { IconButton,Box } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views/index"
import { AddOutlined } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { startNewNote } from "../../store/journal"

export const JournalPage = () => {
  
  const dispatch = useDispatch();

  const { isSaving, active } = useSelector(state=> state.journal)

  const onClickNewNote = () => {
    dispatch( startNewNote() );
  }
  
  return (
    <JournalLayout>
      <Box sx={{ position: 'relative'}}>
        
        { (!!active)
            ? <NoteView/>
            :<NothingSelectedView/>
          
        }

        {console.log(active)}
        
        
        <IconButton
          onClick={onClickNewNote}
          disabled={ isSaving }
          size='large'
          sx={{
            color:'white',
            backgroundColor: 'error.main',
            ':hover':{ backgroundColor:'error.main', opacity: 0.9 },
            position: 'fixed',
            display: 'flex',
            right: 50,
            bottom: 50,
          }}>
          <AddOutlined sx={{ fontSize: 30 }} />
        </IconButton>
      </Box>
      
    </JournalLayout>
  )
}
