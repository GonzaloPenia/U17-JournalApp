import { IconButton,Box } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView } from "../views/index"
import { AddOutlined } from "@mui/icons-material"

export const JournalPage = () => {
  return (
    <JournalLayout>
      <Box sx={{ position: 'relative'}}>
        <NothingSelectedView/>
        
        <IconButton
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
