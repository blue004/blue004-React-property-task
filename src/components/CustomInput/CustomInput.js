import React from 'react';
import { InputLabel,OutlinedInput,Typography } from '@mui/material';

export default function CustomInput(props) {
    const {name,defaultValue,endicon,type,start}=props
  return (
    <>
    <InputLabel id="demo-simple-select" sx={{marginBottom:'4px'}}>{name}</InputLabel>
    <OutlinedInput
                    sx={{'&.MuiInputBase-root':{borderRadius:'10px',height:'45px',fontWeight:'600'}}}
                    type={type}
                    fullWidth
                    defaultValue={defaultValue}
                    startAdornment={start}
                    endAdornment={
                        <Typography
                            component="h6"
                            variant="h6"
                            fontSize={'13px'}
                            color={'#98A0AC'}>
                            {endicon}
                        </Typography>}/>
  </> 
  )
}
