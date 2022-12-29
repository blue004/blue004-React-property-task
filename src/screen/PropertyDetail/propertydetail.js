import React from 'react';
import {Grid,Box,Typography, IconButton, Card, Button,InputLabel,Stack} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Googlemaprender from "../../components/Map/googlemap";
import LabeledTypo from '../../components/LabeledTypo/LabeledTypo';
import { useNavigate } from "react-router-dom";


const propertyDetails = [
    {
      label: "Company Name",
      value: "Name",
    },
    {
      label: "Property Name",
      value: "Rubix Appartment",
    },
    {
      label: "Property Type",
      value: "Property Type",
    },
    {
      label: "Property Purpose",
      value: "Residential",
    },
    {
      label: "Payment Period",
      value: "Monthly",
    },
    {
      label: "Status",
      value: "Active",
    },
  ];

  const propertyDetails2 = [
    {
      label: "Revanue Type",
      value: "Lease",
    },
    {
      label: "Carpet Area",
      value: "10000 Sq.ft",
      
    },
    {
      label: "Total Area",
      value: "1610000 Sq.ft",
     
    },
    {
      label: "Year Built",
      value: "22-10-22",
    },
    {
      label: "Handover Date",
      value: "22-10-22",
    },
    {
      label: "Publicm Listing",
      value: "Public",
    },
    {
      label: "Pet Allowed",
      value: "Public",
    },
  ];

   const contact = [ {
      label: "  Business Phone :",
      value: "044 23224944",
    },
     {
      label: "  Mobile Phone :",
      value: "044 23224944",
    },
     {
      label:  'Website :',
      value:"property.com",
    },
     {
      label: "Email Address :",
      value: "mail@property.com",
    }];
export default function Propertydetails() {   
  const navigate = useNavigate();
    
  return (
    <>
    <Grid sx={{backgroundColor:'#e6ecf5'}} >
        <Grid >
        <Box sx={{backgroundColor:'#ffffff'}} p={1} display='flex' >
        <IconButton
        onClick={() => navigate("/user/properties")}
        size='small'>
            <ArrowBackIosIcon fontSize='13px'/>
        </IconButton>
        <Typography variant='h5' ml={3}>Properties</Typography>
        </Box>
      </Grid>

    <Grid container mt={2} spacing={2} pl={2} pr={4}> 
        <Grid item xs={12} md={2} >
         <Card sx={{padding:'10px'}}>
            <Stack  alignItems='center'>
                <Typography variant='h6' fontSize={'13px'} textAlign='center'>PROPERTY IMAGE</Typography>
                <Box my={2} > 
                      <Box borderRadius={'50px'}
                       component={'img'} 
                       sx={{width:'130px'}}
                       src={require("../../assets/images/propertyimg.png")}></Box>
                       </Box>
                <Button variant='outlined' size='small' sx={{height:'35px'}} >Upload Image</Button>
           </Stack>
         </Card>
        </Grid>
        <Grid item xs={12} md={10} >
            <Card sx={{padding:'12px'}}>
                <Typography variant='h6' fontSize={'13px'}>PROPERTY DETAILS</Typography>
                <Grid container spacing={2} mt={1}>
                   {propertyDetails.map((detail)=>(
                       <Grid item xs={12} sm={6} md={2}>
                           <LabeledTypo Detail={detail} />
                      </Grid> ))}
                </Grid>

                <Grid mt={3}>
                  <InputLabel sx={{marginBottom:'4px'}} mt={1}>Property Description</InputLabel>
                  <Typography variant='h6' fontSize={'14px'} fontWeight={'600'} mt={1} >
                          A while back I needed to count the amount of letters that a piece of text in an email template had to avoid passing any character limits
                          . Unfortunately, a street bike available at a starting price of Rs. 1,62,916 in India. 
                          It is available in 3 variants and 8 colours with top variant price starting from The Yamaha

                  </Typography>
                  
                </Grid>

           </Card>
        </Grid>
    </Grid>  
    <Grid container pl={1} pr={3} spacing={2}>
        <Grid item  mt={2} mx={1} xs={12}  md={12} >
        <Card sx={{padding:'14px'}}>
                <Grid container spacing={2} columns={7}>
                    {propertyDetails2.map((detail)=>(
                       <Grid item xs={7} sm={3} md={1}>
                           <LabeledTypo Detail={detail} />
                      </Grid> ))}
           </Grid>
            </Card>
         </Grid>
    </Grid>
     
     <Box pl={2} pr={4} py={2} >
        <Card sx={{minHeight:'250px',padding:'10px'}} >
            <Typography
                    variant="h6"
                    component="h6"
                    sx={{ fontSize: "14px", color: "#4E5A6B", marginBottom: "6px" }} >
                    ADDRESS
                </Typography>
                <Grid container spacing={2}>
                        <Grid item sm={12} md={5} lg={5} sx={{maxHeight: "200px" ,display:{xs:'none',lg:'block'}}}> 
                        <Googlemaprender style={{ maxHeight: "200px", maxWidth: "450px" }}/> 
                        </Grid>
                      <Grid item sm={12} md={12} lg={7}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                               <Card sx={{padding:'25px 12px'}}>
                                <Typography variant='h5' fontWeight={600} fontSize={'14px'} mb={2}>
                                    ADDRESS
                                </Typography>
                                <Typography variant='h6' fontWeight={600} fontSize={'13px'} my={2}>
                                    23 Main Street, 3rd Cross street, 3rd Sector, Chennai,
                                    Tamilnadu, India -60001</Typography>
                                <Typography variant='h6' fontWeight={500} fontSize={'13px'} mb={2}> 
                                      <span>Latitude :</span> 27.2046° N
                                </Typography>
                                <Typography variant='h6' fontWeight={500} fontSize={'13px'}>
                                           <span>Longitude :</span> 77.4977°   
                                </Typography>
                               </Card>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                 <Card sx={{padding:'20px 12px'}}>
                                    <Typography  variant='h5' fontWeight={600} fontSize={'14px'} my={1}>
                                        CONTACT & OTHER INFORMATION
                                    </Typography>
                                    <Grid container spacing={1}>
                                        {contact.map((detail)=>(
                                            <Grid item md={6}>
                                                <LabeledTypo Detail={detail}/>
                                                </Grid>

                                        ))}
                                    </Grid>

                                 </Card>
                            </Grid>
                        </Grid>
                    </Grid>
               </Grid>
             </Card>
        </Box>
    </Grid>

    </>
  )
}
