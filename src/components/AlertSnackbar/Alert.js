import React from 'react';
import {useState} from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Message } from '@mui/icons-material';
import { useEffect } from 'react';


export default function Messagebar(props) {

   const{Message,type,openAlert}= props;
  const [open, setOpen] = useState(false);

   useEffect(() => {
    if (openAlert) {
      setOpen(true);
    }
  }, [openAlert]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const action = (

      <IconButton
        size="small"
        color="inherit"
        onClick={handleClose}>
        <CloseIcon fontSize="small" />
      </IconButton>
  
  );

  return (
     
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={2000}   
        onClose={handleClose}
      >  
      <Alert variant={type}
      onClose={handleClose} 
      severity="success" 
      sx={{ width: '100%' }}> {Message} </Alert>
    </Snackbar>

  );
}
