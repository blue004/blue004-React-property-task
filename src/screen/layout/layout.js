import React from 'react';
import Sidebar from '../../components/sideBar/sidebar';
import Appbar from '../../components/appbar/appbar';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
export default function Layout() {
  return (
    <>
     <main>
        <Appbar />
        <Box component={'div'} display='flex'  sx={{width:'100vw'}}>
          <Box component={'div'} sx={{width: "68px",height: "91.5vh",display:{xs:'none',md:'block'}  }} >
            <Sidebar />
          </Box>
          <Box component={'div'} sx={{ width: "100%",height: "100%",marginTop:"60px",}} >
          
              <Outlet />
          
          </Box>
        </Box>
      </main>
    </>
  )
}
