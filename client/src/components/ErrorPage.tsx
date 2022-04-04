import { Typography } from "@mui/material";
import { Box } from "@mui/system";

interface Props {
  errorMessage : {
   title : string;
   content : string;
  };
}

export default function Error(props : Props) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent : 'center', alignItems: 'center', height: 240}}>
      <Typography variant="h4">{props.errorMessage.title}</Typography>
      <Typography variant="h6" sx={{mt:3}}>{props.errorMessage.content}</Typography>
    </Box>
  );
}