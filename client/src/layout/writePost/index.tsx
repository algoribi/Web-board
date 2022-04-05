// mui
import { Box, TextField, Typography } from '@mui/material';

import ToolButton from 'components/ToolButton';
import { useContextController, setTextFieldTitle, setTextFieldName, setTextFieldContent } from 'context';

export default function Write() {
  const [controller, dispatch] = useContextController();
  const {
    textFieldTitle,
    textFieldName,
    textFieldContent
  } = controller;
  
  const handleTextfield = (type : string, event : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (type === 'title') {
      setTextFieldTitle(dispatch, event.target.value);
    } else if (type === 'name') {
      setTextFieldName(dispatch, event.target.value);
    } else {
      setTextFieldContent(dispatch, event.target.value);
    }
  };

  return (
    <Box sx={{ display:'flex', flexDirection:'column', m: 2}}>
      <Typography variant='h5' sx={{ p: 2, borderBottom : 1}}> Write post </Typography>

      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', mt: 2}}>
        <Box sx={{fontSize : 20, ml : 2}}>Title : 
          <TextField 
            id="title-input"
            value={textFieldTitle}
            onChange={(e) => {handleTextfield('title', e)}}
            sx={{ml : 2, width : 700}}
          />
        </Box>
        <Box sx={{fontSize : 20, mr : 2}}>Name : 
          <TextField
            id="name-input"
            value={textFieldName}
            onChange={(e) => {handleTextfield('name', e)}}
            sx={{ml : 2}}
          />
        </Box>
      </Box>
      <Box sx={{fontSize : 20, m : 2, display : 'column', maxWidth : '100%'}}>
        <p>Content : </p>
        <TextField
          id="content-input"
          multiline
          fullWidth
          value={textFieldContent}
          onChange={(e) => {handleTextfield('content', e)}}
          sx={{maxWidth : '100%'}}
        />
      </Box>
      <ToolButton buttonState="addPost"/>
    </Box>
  );
}