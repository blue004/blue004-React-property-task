import React from 'react';
import { InputLabel } from '@mui/material';
import {Typography} from '@mui/material';

export default function LabeledTypo(props) {

    const{label,value}=props.Detail;
  return (
    <>
    <InputLabel id="demo-simple-select" sx={{marginBottom:'4px'}}>{label}</InputLabel>
    <Typography variant='h5' fontSize={'15px'} fontWeight={'600'} my={1}>{value}</Typography>
    
    
    </>
    
  )
}
