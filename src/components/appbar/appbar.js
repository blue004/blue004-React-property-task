import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import avatar from "../../assets/images/avatar.png";
import DNTLogo from "../../assets/images/DNTLogo.png"
import { Divider, Typography } from '@mui/material';
import Dropdown from '../Dropdown/dropdown';

export default function Appbar() {
  return (
    <>
    <Box>
      <AppBar position='fixed' color='info'>
        <Toolbar>
           <Box component={'img'} src={DNTLogo}></Box>
           <Typography span ml={2}> | </Typography>
           <Typography span ml={2}>PROPERTY MANAGEMENT SOLUTION</Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <IconButton
              size="small"
              aria-label="show 17 new notifications"
              color='inherit'
             
            >
              <Badge variant='dot' overlap="circular" color="success">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Divider color='invert'/>
            <IconButton
              color='inherit'
            >
            
            <Typography variant='h4' component={'span'} color="grey" fontSize={30} fontWeight={400}>|</Typography>
            </IconButton>
            <IconButton
              size="small"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              
              color="inherit"
            >
              <Avatar src={avatar}>v</Avatar>
             </IconButton>
          </Box>
          <Box sx={{display:{
            xs:'none',
            md:'block'
          }}}>
            <Dropdown/>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
}
