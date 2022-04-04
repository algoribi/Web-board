import { useState } from 'react';
import { useLocation } from "react-router-dom";
import Axios from "axios";

import { Box, Typography } from "@mui/material";

import ToolButton from "components/ToolButton";
import ErrorPage from 'components/ErrorPage';
import { useEffect } from "react";

type LocationState = {
  postId : number;
}

interface Post {
  id : number;
  title : string;
  name : string;
  content : string;
  date : string;
}

export default function ReadPost() {
  const [postData, setPostData] = useState<Post | null>(null);

  useEffect(() => {
    const location : object | unknown | LocationState = useLocation().state;
    const postId = (location as LocationState).postId;
    const getPost = async() => {
      Axios.get('http://localhost:8000/read', {})
      .then(response => {
        setPostData(response.data);
      });
    }
    getPost();
  });


  return (
    <>
      {postData 
        ? <Box sx={{display: 'flex', flexDirection: 'column'}} >
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', p : 3 , borderBottom : 1}}>
              <Box sx={{display: 'flex', flexDirection: 'column', pl: 2}}>
                <Typography variant='h5'>{postData.title}</Typography>
                <Typography variant='body2'>{postData.name}</Typography>
              </Box>
              <Box sx={{pr: 2, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Typography variant='body1'>{postData.date}</Typography>
              </Box>
            </Box>
            <Typography sx={{ m : 3, textAlign: "justify"}}>{postData.content}</Typography>
          </Box>
        : <ErrorPage errorMessage={{title : "The wrong approach.", content : "Page not found."}} />
      }
      <ToolButton buttonState="delete" postId={postData?.id}/>
    </>
  );
}