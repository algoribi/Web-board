import { useState, useEffect } from 'react';

import { Box, Typography } from "@mui/material";

import { useContextController } from 'context';
import ToolButton from "components/ToolButton";
import ErrorPage from 'components/ErrorPage';

interface Post {
  id : number;
  title : string;
  name : string;
  content : string;
  date : string;
}

export default function ReadPost() {
  const [controller, ] = useContextController();
  const postId = controller.postId;
  const [postData, setPostData] = useState<Post | null>(null);

  useEffect(() => {
    getPostData();
  }, [postId]);

  async function getPostData() {
    await fetch(`http://localhost:8000/read/${postId}`, {
      method : "GET",
    }).then ((response) => response.json())
    .then((post) => {
      setPostData(post);
    });
  }

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