import React from 'react';
import { styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GroupsIcon from '@mui/icons-material/Groups';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useNavigate } from "react-router-dom";


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Sidebar() {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <Drawer 
      variant="permanent" 
      open={open} 
      PaperProps={{sx:{backgroundColor:'#333333',marginTop:'62px'}}}
      >
            <DrawerHeader 
           
             sx={{justifyContent:'space-between'}} >
                <Typography
                span
                sx={{whiteSpace:'normal'}}
                 color='grey' 
                 variant='h6'>{open?'Property Manager For Start up':''}</Typography>
                <IconButton
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"  
                    sx={{backgroundColor:'#5078E1',margin:'5px'}}>
                    {open? <ChevronLeftIcon sx={{color:'#fff'}}/> : <ChevronRightIcon sx={{color:'#fff'}}/>}
                </IconButton>
            </DrawerHeader>
        <Divider/>
            <List>
            {['Dashboard', 'Companies'].map((text, index) => (
                <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                    sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,    

                    }}
                   

                >
                    <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                    
                    }}
                    ><IconButton  
                     size='small'
                    onClick={handleDrawerOpen}
                    edge="start" 
                    sx={{background:'#5078E1'}}>
                    {index % 2 === 0 ? <DashboardIcon  onClick={() => { navigate("/user/dashboard"); }}  sx={{color:'#fff'}} />
                     : <GroupsIcon onClick={() => { navigate("/user/companies"); }}  sx={{color:'#fff'}} />}
                  
                    </IconButton>
                    </ListItemIcon>
                    <ListItemText primary={<Typography variant='h6' fontSize={12} sx={{color:'grey'}}>{text}</Typography>}
                    sx={{ opacity: open ? 1 : 0}}/> 
                    </ListItemButton>
                 </ListItem>
                ))}
            </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      </Box>
      </>
  );
}
