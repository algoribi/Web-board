import { useEffect } from 'react';
import { useLocation } from "react-router-dom";

// mui
import { Box, Container } from '@mui/material';

// component
import { getRouter } from './routes';
import Header from "components/Header";
import Alerts from 'components/Alerts';

const useScrollTop = () => {
  const { pathname } = useLocation();
  
  // setting page scroll to 0
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    if (document.scrollingElement) {
      document.scrollingElement.scrollTop = 0;
    }
  }, [pathname]);
}

export default function App() {
  
  useScrollTop();
  

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column'}}>
      <Header />
      <Alerts />

      <Box 
        component="main"
        sx={{
          background:'#eeeeee',
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto'
        }}
      >
        <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column'}} >
          <Box
            sx={{
              background: 'white',
              flexWrap: 'wrap',
              overflow: 'auto',
              mt: 6,
            }}
          >
            {/* content */}
            {getRouter()}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}