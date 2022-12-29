import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Link from '@mui/material/Link';
import dotedImg from "../../assets/images/doted.svg";
import circleImg from "../../assets/images/circle.svg";
import circleDarkImg from "../../assets/images/circleDark.svg";
import bulding from "../../assets/images/bulding.png";
import logo from '../../assets/images/logo.png';
import {Alert} from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function SignIn() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  const [mailValue, setMailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [openAlert, setOpenAlert] = useState(false);

  const onChangePassword = (val) => {
    setPasswordValue(val.target.value);
  };
  const onChangeMail = (val) => {
    setMailValue(val.target.value);
  };
  const onLoginBtn = () => {
    console.log(mailValue, passwordValue);
    if (mailValue && passwordValue) {
      navigate("/user/dashboard");
    }else{
      setOpenAlert(true);
    }
  };

  

  return (
    <>
   <Grid container sx={{overflow:'hidden'}}> 
   <Grid item 
     md={4} 
     sx={{display:{xs:'none',md:'block'},height:'100vh',}}>

    <Box  sx={{position:'relative',height:'100%',overflow:'hidden'}}> 
      <Box 
      component={'img'} 
      src={circleImg}
      alt="Small Circle on the top"
      sx={{width:'170px',position:'absolute',top:'-90px',left:'150px' }} />

     <Box  component={'img'} src={circleDarkImg} alt="Bigger circle in the Middle"
      sx={{width:'350px',
      height:'400px',
      position:'absolute',
      top:'140px',
      left:'150px'
       }} />
  
      <Box  component={'img'} src={circleImg} alt=" Smaller Circle the the bottom"
      sx={{width:'170px',
      position:'absolute',
      bottom:'-60px',
      left:'-70px'}} /> 
    </Box>
   </Grid>
   <Grid item 
    xs={12}
    sm={12} 
    md={8} 
    sx={{backgroundColor:'#5078E1',position:'relative',height:'100vh',width:'100vw'}}>

    <Box component={'img'}
      src={bulding} 
      sx={{width:{xs:'100%',sm:'100%',md:"580px"},
      position:'absolute',
      bottom:{md:"0px"},
      left:{xs:'0%',sm:'0px',md:"-220px"}}}></Box>
    <Box component={'img'} 
    src={dotedImg} 
    sx={{width:'144px',position:'relative',left:'40%',top:'10%',display:{xs:'none',md:'block'}}}>
    </Box>


 <Box sx={{position:'relative',bottom:{xs:'-39%',sm:'-40%',md:'5%'},width:'100%',
 left:{  md:'40%', lg:'46%'}

}}>
   <Paper elevation={2} sx={{width:{xs:'100%',md:'50%'},borderRadius:'16px'}}> 
     <Box component={'form'}  sx={{padding:{xs:'32px',sm:'32px 90px',md:"32px"}}} >
        <Typography component='h1' variant="h4">Sign  In</Typography>
        <Box mt={3} >
          <InputLabel htmlFor="email"> <Typography variant="h5" color='grey.500'>Mobile Number / Email ID</Typography></InputLabel>
          <TextField
            onChangeFun={onChangeMail}
            onChange={onChangeMail}
            variant="outlined"
            fullWidth
            required
            id="email"
            InputProps={{sx:{height:'46px', borderRadius:'10px',fontSize:'16px'}}}
          />
      </Box>
     <Box mt={2}>
      <InputLabel htmlFor="Password"><Typography variant="h5" color='grey.500'>Password</Typography></InputLabel>
       <OutlinedInput
            sx={{'& .MuiInputBase-input':{height:'13px'},borderRadius:'10px',fontSize:'19px'}}
            fullWidth
            id="Password"
            onChangeFun={onChangePassword}
            onChange={onChangePassword}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end">
                     {showPassword ? <Visibility /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            }
          />
          </Box>
 
    <Typography variant="h6" textAlign={'end'} mt={1} >
      Did you forget your password? <Link underline="hover">Click Here</Link>
    </Typography>
   <Box mt={5} mb={2} textAlign={'center'} > 
      <Typography component={'span'} mr={1} color='grey.500'>Powered by</Typography> 
      <Box component={'img'} mr={1} src={logo}></Box>
      <Typography component={'span'} variant="h6">Property Automate</Typography>
      </Box>
     <Button variant="contained" 
              // onClick={onLoginBtn}
                onClick={onLoginBtn}   
              textAlign={'center'} 
              sx={{width:'100%',padding:'11px'}}>
                <Typography noWrap textAlign={'center'} variant="h5" component={'span'}>
                    Log In
                </Typography>
      </Button>
    </Box>
   </Paper>
 </Box>

    <Box component={'img'} 
    src={dotedImg} 
    sx={{width:'170px',position:'absolute',bottom:'-110px',left:'740px', display:{xs:'none',md:'block'} }}>
    </Box> 
  
   </Grid>
        <Alert openAlert={openAlert} text="Please fill input filds.." status="error"/>
  </Grid>
  </>
  )
}





