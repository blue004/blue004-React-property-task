import { Card, Grid, Typography,Box, TableContainer, Table, TableRow, TableCell, TableBody,TableHead, OutlinedInput} from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useNavigate } from "react-router-dom";
import {IconButton} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';



function createTd( propertyId,propertyName,companyName,location, revanueType, propertyType, status) {
    return {
      propertyId,propertyName,companyName,location,revanueType,propertyType,status,};
  }
  const table = [
    createTd(
      "Prop 011",
      "Tyons",
      "Property Automate 102",
      "T.Nagar, Chennai",
      "Sale",
      "Appartment",
      "Active"
    ),
    createTd(
      "Prop 012",
      "Rubix",
      "Property Automate 102",
      "T.Nagar, Chennai",
      "Lease",
      "Appartment",
      "Active"
    ),
    createTd(
      "Prop 013",
      "Phonix",
      "Property Automate 102",
      "T.Nagar, Chennai",
      "Sale",
      "Appartment",
      "Inactive"
    ),
    createTd(
      "Prop 014",
      "Thapar",
      "Property Automate 102",
      "T.Nagar, Chennai",
      "Maintain",
      "Appartment",
      "Active"
    ),
    createTd(
      "Prop 015",
      "Marian",
      "Property Automate 102",
      "T.Nagar, Chennai",
      "Sale",
      "Appartment",
      "Inactive"
    ),
    createTd(
      "Prop 016",
      "Tyons",
      "Property Automate 102",
      "T.Nagar, Chennai",
      "Lease",
      "Appartment",
      "Active"
    ),
    createTd(
      "Prop 017",
      "Tyons",
      "Property Automate 102",
      "T.Nagar, Chennai",
      "Maintain",
      "Appartment",
      "Inactive"
    ),
    createTd(
      "Prop 012",
      "Rubix",
      "Property Automate 102",
      "T.Nagar, Chennai",
      "Lease",
      "Appartment",
      "Active"
    ),
    createTd(
      "Prop 012",
      "Rubix",
      "Property Automate 102",
      "T.Nagar, Chennai",
      "Maintain",
      "Appartment",
      "Inactive"
    ),
    createTd(
      "Prop 012",
      "Rubix",
      "Property Automate 102",
      "T.Nagar, Chennai",
      "Sale",
      "Appartment",
      "Active"
    ),
    createTd(
      "Prop 019",
      "Rubix",
      "Property Automate 102",
      "T.Nagar, Chennai",
      "Lease",
      "Appartment",
      "Inactive"
    ),]

export default function Properties() {
  const navigate = useNavigate();

  return (
    <Stack sx={{backgroundColor:'#e6ecf5'}} >

        <Box sx={{backgroundColor:'#ffffff'}} p={1} display='flex'>
          <IconButton
        onClick={() => navigate("/user/dashboard")}
        size='small'>
            <ArrowBackIosIcon fontSize='13px'/>
        </IconButton>
        <Typography variant='h5' ml={3}>Properties</Typography>
        </Box>
    
      <Grid mt={2} p={3} >
          <Card sx={{padding:'13px'}}>
            <Grid container justifyContent={'space-between'} mb={3} ml={2}>
              <Grid item md={4}>
                 <OutlinedInput
                      placeholder='Search Properties'
                      fullWidth
                      id="outlined-adornment-amount"
                      startAdornment={<SearchIcon position="start" sx={{color:'#98A0AC'}}/>}
                      />
              </Grid>
              <Grid item>
                <FilterAltIcon/>
              </Grid>
            </Grid>

            <Grid container>
              <TableContainer sx={{height:'400px'}}>
                <Table stickyHeader>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{backgroundColor:'#e6ecf5'}} ><Typography fontSize={'14px'}>Property Num</Typography></TableCell>
                      <TableCell sx={{backgroundColor:'#e6ecf5'}} ><Typography fontSize={'14px'}>Property Name</Typography></TableCell>
                      <TableCell sx={{backgroundColor:'#e6ecf5'}} ><Typography fontSize={'14px'}>Property Name</Typography></TableCell>
                      <TableCell sx={{backgroundColor:'#e6ecf5'}} ><Typography fontSize={'14px'}>Location</Typography></TableCell>
                      <TableCell sx={{backgroundColor:'#e6ecf5'}} ><Typography fontSize={'14px'}>Revenue type</Typography></TableCell>
                      <TableCell sx={{backgroundColor:'#e6ecf5'}} ><Typography fontSize={'14px'}>Property type</Typography></TableCell>
                      <TableCell sx={{backgroundColor:'#e6ecf5'}} ><Typography fontSize={'14px'}>Status</Typography></TableCell>
                     
                    </TableRow>
                  </TableHead>

                  <TableBody >
                    {table.map((data)=>(
                    <TableRow>
                      <TableCell onClick={() => navigate("/user/view")}  ><Typography variant='h6' fontWeight={600}>{data.propertyId}</Typography></TableCell>
                      <TableCell><Typography variant='h6' fontWeight={600}>{data.propertyName}</Typography></TableCell>
                      <TableCell><Typography variant='h6' fontWeight={600}>{data.companyName}</Typography></TableCell>
                      <TableCell><Typography variant='h6' fontWeight={600}> {data.location}</Typography></TableCell>
                      <TableCell><Typography variant='h' fontWeight={600}>{data.revanueType}</Typography></TableCell>
                      <TableCell><Typography variant='h5' fontWeight={600} sx={{backgroundColor:'#78B1FE',borderRadius:'4px',color:'#ffffff'}} textAlign="center">{data.propertyType}</Typography></TableCell>
                      <TableCell><Typography variant='h5' fontWeight={600} sx={{color:data.status === 'Active'?  "#5AC782" : "#FF4B4B"}}>{data.status}</Typography></TableCell>
                    </TableRow>))}
                  </TableBody>
                </Table>
              </TableContainer>

            </Grid>
          </Card>
     </Grid>

    </Stack>
  )
}
