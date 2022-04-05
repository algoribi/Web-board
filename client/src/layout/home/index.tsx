import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// mui
import { Box, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';

import ToolButton from 'components/ToolButton';
import { setPostId, useContextController } from 'context';

export default function Home() {
  const [postData, setPostData] = useState<Promise<void> | void | undefined>(undefined);
  const [, dispatch] = useContextController();
  const navigate = useNavigate();

  useEffect(() => {
    getPostData();
  }, []);

  const getPostData = async () => {
    await fetch('http://localhost:8000/', {
      method : "GET",
    }).then ((response) => response.json())
    .then((postDB) => {
      console.log(postDB);
      setPostData(postDB);
    })
  }

  const handlePage = (id : number) => {
    setPostId(dispatch, id);
    navigate('/read');
  }

  return (
    <>
      <Table>
        <TableBody>
          {Array.isArray(postData)
            ? postData.map(item => {
            return (
              <TableRow key={'post-'+ item.id} hover={true}>
              <TableCell
                onClick={() => {handlePage(item.id)}}
                sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
              >
                <Box sx={{display: 'flex', flexDirection: 'column', pl: 2}}>
                  <Typography variant='h5'>{item.title}</Typography>
                  <Typography variant='body2'>{item.name}</Typography>
                </Box>
                <Box sx={{pr: 2, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <Typography variant='body1'>{item.date}</Typography>
                </Box>
              </TableCell>
              </TableRow>
            );
          }) : <></>}
        </TableBody>
      </Table>
      <ToolButton buttonState='write'/>
    </>
  );
}