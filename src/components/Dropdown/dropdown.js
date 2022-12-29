import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { Button, Grid, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import avatar from "../../assets/images/avatar.png";



export default function Dropdown() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

    const roleDetails = [
    {
      role: "Super Admin",
      color: "#F17360",
    },
    {
      role: "Community Manager",
      color: "#119DA4",
    },
    {
      role: "Security Manager ",
      color: "#D49200",
    },
    {
      role: "Property Manager",
      color: "#4991F2",
    },
    {
      role: "Zonal Manager",
      color: "#11A442",
    },
    {
      role: "Customer Care",
      color: "#D471ff",
    },
  ];
  return (
    <>        
        <IconButton
            onClick={handleClick}
            size="medium"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            color='inherit'
        >
            <Typography  variant='body1'>Super Admin</Typography>
            {open?<ExpandLessIcon/>:<ExpandMoreIcon/>}
        </IconButton>
   
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        sx={{top:'16px'}}
        PaperProps={{
          elevation: 0,
          sx: {
            backgroundColor:'#ff',
            overflow: 'visible',
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 4,
            },
            
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Paper sx={{width:'320px'}} >
          <MenuList sx={{backgroundColor:'#fff'}}>
            <MenuItem >
                <Grid  container direction='row'>
                    <Box mt={2} ml={1}>        
                         <Avatar src={avatar} >v</Avatar>
                     </Box>
                    <Box>
                    <Typography variant='h5'>User Name</Typography>
                    <Typography variant='h6'>Balaganesh@mail.com</Typography>
                     <Typography variant='h6' fontSize={12} textAlign='center' color="error" sx={{borderRadius:'10px',backgroundColor:'#FEEAEA'}}>Super Admin</Typography>
                    </Box>
                 </Grid>
            </MenuItem>
            <MenuItem>
              <Grid container> 
              <Typography variant='body1' my={1}>ROLES</Typography>
                  <Grid container spacing={2}>
                    {roleDetails.map((person,index)=>
                     <Grid key={index} item xs={4}>
                       <Box borderRadius={1}  >
                            <Card sx={{padding:'15px',display:'flex',flexDirection:'column',alignItems:'center'}} >
                            <Avatar sx={{'&.MuiAvatar-root':{margin:'0',textAlign:'center',color: person.color,bgcolor:person.color +'2f'}}} src>v</Avatar>
                            <Typography textAlign='center'component={'span'} fontSize={10} variant='h5' mt={2} sx={{whiteSpace:'normal'}}>{person.role}</Typography>
                            </Card>
                       </Box>
                    </Grid>)} 
                 </Grid>
            </Grid>
            </MenuItem> 
             <Divider />
            <MenuItem>
              <Typography>My Profile</Typography>
            </MenuItem>
            <MenuItem>
              <Typography>Privacy Policy</Typography>
               </MenuItem>
            <MenuItem>
              <Typography>Terms and conditions</Typography>
            </MenuItem>
            <MenuItem>
             <Button variant="outlined" color='error'>Sign Out</Button>
            </MenuItem>
          
            </MenuList>
        </Paper>
      </Menu>
    </>
  );
}
