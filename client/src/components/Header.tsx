import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {

  return (
    <AppBar position="static" style={{background : 'green'}}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>Web board</Typography>
      </Toolbar>
    </AppBar>
  );
}