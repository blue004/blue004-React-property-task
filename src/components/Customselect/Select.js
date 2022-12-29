import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function CustomSelect(props) {

const {label,defaultValue,options} = props.finedata;   
const [holder, setholder] = React.useState(defaultValue);
 const handleChange = (event) => {
    setholder(event.target.value);
  }
  return (<>
     <InputLabel id="demo-simple-select" sx={{marginBottom:'4px'}}>{label}</InputLabel>
      <FormControl fullWidth>
        <Select
        sx={{'&.MuiInputBase-root':{borderRadius:'10px',height:'45px',fontWeight:'600'}}}
          id="demo-simple-select"
          value={holder}
          onChange={handleChange}>
         {options && options.map((option,index) => (<MenuItem key={index} value={option.value}>{option.value}</MenuItem>))}

        </Select>
      </FormControl>
      </>    
  )
}
