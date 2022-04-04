import { useNavigate } from 'react-router-dom';

// mui
import { Box, Fab } from "@mui/material";
import WriteIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteForever';
import AddIcon from '@mui/icons-material/Add';

import {
  useContextController,
  setDeletePostData,
  setAddPostData,
  setAlertsMessage,
  setToggleSuccessAlerts,
  setToggleFailAlerts,
  setTextFieldTitle,
  setTextFieldName,
  setTextFieldContent
} from 'context';
import ErrorPage from './ErrorPage';

interface Props {
  buttonState : string;
  postId? : number;
}

export default function ToolButton(props : Props) {
  const [controller, dispatch] = useContextController();
  const {
    textFieldTitle,
    textFieldName,
    textFieldContent
  } = controller;

  const navigate = useNavigate();

  const toggleButton = () => {
    if (props.buttonState === "write") {
      return (
        <Fab color="secondary" aria-label="write"
          onClick={()=> { navigate('/write') }}
        >
          <WriteIcon />
        </Fab>
      );
    } else if (props.buttonState === "delete") {
      return (
        <Fab color="secondary" aria-label="delete"
          onClick={() => { handleDeletePost() }}
        >
          <DeleteIcon />
        </Fab>
      );
    } else {
      return (
      <Fab color="secondary" aria-label="addPost"
        onClick={()=> { handleAddPost() }}
      >
      <AddIcon />
    </Fab>);
    }
  }

  const handleDeletePost = () => {
    if (props.postId) {
      setDeletePostData(props.postId);
      navigate('/');
      setAlertsMessage(dispatch, 'Successfully deleted post.');
      setToggleSuccessAlerts(dispatch, true);
    } else {
      <ErrorPage errorMessage={{title : 'The wrong approach.', content : 'Pages that do not exist cannot be deleted.'}}/>;
    }
  }

  const handleAddPost = () => {
    if (textFieldTitle === '' || textFieldName === '' || textFieldContent === '') {
      setAlertsMessage(dispatch, 'Post registration failed. Please fill in the blanks!');
      setToggleFailAlerts(dispatch, true);
    } else {
      setAddPostData([textFieldTitle, textFieldName, textFieldContent]);
      navigate('/');
      setAlertsMessage(dispatch, 'Successfully add post.');
      setToggleSuccessAlerts(dispatch, true);
      setTextFieldTitle(dispatch, '');
      setTextFieldName(dispatch, '');
      setTextFieldContent(dispatch, '');
    }
  }

  return (
    <Box sx={{position: 'fixed', bottom: 36, right: 56}}> 
      {toggleButton()}
    </Box>
  );
}