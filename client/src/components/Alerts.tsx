// mui
import { Box, Alert, IconButton, Collapse, Stack } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { useContextController, setToggleSuccessAlerts, setToggleFailAlerts } from 'context';

export default function Alerts() {
  const [controller, dispatch] = useContextController();
  const {
    toggleSuccessAlerts,
    toggleFailAlerts,
    alertsMessage,
  } = controller;

  return (
    <Box sx={{ width: '100%'}}>
      {/* success alerts */}
      <Collapse in={toggleSuccessAlerts}>
        <Alert action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setToggleSuccessAlerts(dispatch, false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {alertsMessage}
        </Alert>
      </Collapse>
      {/* fail alerts */}
      <Collapse in={toggleFailAlerts}>
        <Alert severity="error"
         action={
            <IconButton
              aria-label="close"
              size="small"
              onClick={() => {
                setToggleFailAlerts(dispatch, false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {alertsMessage}
        </Alert>
      </Collapse>
    </Box>
  );
}
