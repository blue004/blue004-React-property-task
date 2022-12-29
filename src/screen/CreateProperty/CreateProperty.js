import React from 'react';
import {Grid,
      Box,
      InputAdornment,
      Typography,
      IconButton,
      Card,
      Button,
      InputLabel,
      OutlinedInput,
      ToggleButton,
      Stack, } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CustomSelect from '../../components/Customselect/Select';
import CustomTextarea from '../../components/CustomToggle/CustomToggle';
import CustomInput from '../../components/CustomInput/CustomInput';
import { useState } from 'react';
import { CheckOutlined } from '@mui/icons-material';
import Googlemaprender from "../../components/Map/googlemap";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Messagebar from '../../components/AlertSnackbar/Alert';
import { useNavigate } from "react-router-dom";


const selectLists= [
    {
      label: "Company Name",
      defaultValue: "Company Name",
      options: [ { value: "Company Name" }, {value: "12" }]},

    {
      label: "Property Name",
      defaultValue: "Rubix Appartment",
      options: [ { value: "Rubix Appartment" }, {value: "MVP Appartment" }]},
    {
      label: "Payment Period",
      defaultValue: "Daily",
      options: [ { value: "Daily" }, { value: "Weekly" },{value: "Monthly" }]},
    {
      label: "Status",
      defaultValue: "Active",
      options: [ { value: "Active" }, { value: "InActive" }]
    }
  ];
  const selectpoperty = [
        { label:"Property Purpose",
          defaultValue:"Residential",
          options:[{ value: "Residential" },{ value: "Commerical" },]},

        { label:"Revenue Type",
          defaultValue:"Revenue Type",
          options:[ { value: "Revenue Type" }, {  value: "YES" }, {  value: "NO" }]},

        {  label:"Measurement Unit",
            defaultValue:"Sq. Ft",
            options:[{ value: "Sq. Ft" },{  value: "Ft" },]}]  

      const SelectArea = [
        { label:"Area",
          defaultValue:"ambathur",
          options:[{ value: "ambathur" },{ value: "chennai" },]},

        { label:"City",
          defaultValue:"Chennai",
          options:[ { value: "Chennai" }, {  value: "goa" }, {  value: "pondy" }]},

        {  label:" State",
            defaultValue:"Tamil Nadu",
            options:[{ value: "Tamil Nadu" },{  value: "Kearala" },]},

            {  label:" Country",
            defaultValue:" India",
            options:[{ value: " India" }]}

          ]  ;
            
export default function CreateProperty() {   
  const navigate = useNavigate();


    const[openAlert,setOpenAlert]=useState(false);
    const setopen = ()=>{setOpenAlert(true)};


  return (
    <>
    <Grid sx={{backgroundColor:'#e6ecf5'}} >
        <Grid>
        <Box sx={{backgroundColor:'#ffffff'}} p={1} display='flex'>
        <IconButton
        onClick={() => navigate("/user/dashboard")}
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
                <Box my={3} > 
                      <Box borderRadius={'50px'}
                       component={'img'} 
                       sx={{width:'150px'}}
                       src={require("../../assets/images/propertyimg.png")}></Box>
                       </Box>
                <Button variant='outlined' size='small' sx={{height:'35px'}} >Upload Image</Button>
           </Stack>
         </Card>
        </Grid>
        <Grid item xs={12} md={10}>
            <Card sx={{padding:'10px'}}>
                <Typography variant='h6' fontSize={'13px'}>PROPERTY DETAILS</Typography>
                <Grid container spacing={2}>
                    {selectLists.map((selectList)=>(
                       <Grid item xs={12} sm={6} md={3}>
                           <CustomSelect finedata={selectList}/>
                      </Grid>))}
                </Grid>

                <Grid mt={2}>
                  <InputLabel sx={{marginBottom:'4px'}}>Property Description</InputLabel>
                   < CustomTextarea/>
                </Grid>

           </Card>
        </Grid>
    </Grid>  
    <Grid container pl={1}  pr={3}>
        <Grid mt={2} mx={1} item md={12} >
        <Card sx={{padding:'10px'}}>
                <Grid container spacing={2}>
                    <Grid xs={12} sm={6} md={2} item >
                        <InputLabel id="demo-simple-select" 
                        sx={{marginBottom:'4px'}}>Property Type</InputLabel>
                        <OutlinedInput
                            sx={{'&.MuiInputBase-root':{borderRadius:'10px',height:'45px',fontWeight:'600'}}}
                            type="text"
                            fullWidth
                            defaultValue="Appartment"
                            placeholder="Enter Property Type"
                            disabled={true} />
                    </Grid>
                
                {selectpoperty.map((selectList)=>(
                       <Grid item xs={12} sm={6} md={2}>
                           <CustomSelect finedata={selectList}/>
                      </Grid>))}

                <Grid item xs={12} sm={6} md={2}>
                    <CustomInput name={'Carpet Area'}
                            defaultValue={'1000'}
                            endicon={'sq.Ft'}/>
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                    <CustomInput name={"Total Area"}
                        defaultValue={'165480'}
                        endicon={'sq.Ft'}/>
                </Grid>
            </Grid>
            <Grid container mt={1} spacing={2}>
                <Grid item xs={12} sm={6} md={2}>
                    <CustomInput name={"Year Built"}
                        defaultValue={''}
                        type="date"
                        endicon={''}/>
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                    <CustomInput name={"Handover Date"}
                        defaultValue={''}
                        type="date"
                        endicon={''}/>
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                     <InputLabel >Property-Description</InputLabel>
                    <Stack direction="row" spacing={2} mt={1}>
                        <ToggleButton sx={{padding:'4px',"&.MuiButtonBase-root":{height:'40px'},borderRadius:'10px'}} value="none" aria-label="none">
                            <Typography fontSize={'12px'} variant='h6'>None</Typography>
                        </ToggleButton>
                        <ToggleButton sx={{padding:'4px',"&.MuiButtonBase-root":{height:'40px'},borderRadius:'10px'}} value="private" aria-label="private">
                            <Typography fontSize={'12px'} variant='h6'>Private</Typography>
                        </ToggleButton>
                        <ToggleButton sx={{padding:'4px',"&.MuiButtonBase-root":{height:'40px'},backgroundColor:'#5078E1',color:'#ffffff',borderRadius:'10px'}} value="public" aria-label="public">
                            <Typography fontSize={'12px'} variant='h6'>Public</Typography>
                        </ToggleButton>
                </Stack>
                </Grid>
                
             </Grid>
            </Card>
         </Grid>
    </Grid>
     
     <Box pl={2} pr={4} py={2}>
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
                            <Grid item xs={12} md={4} >
                                 <CustomInput name={"Door Number"}
                                        defaultValue={'123'}
                                        type="number"
                                     endicon={''}/>
                            </Grid>

                            <Grid item xs={12} md={4} >
                                 <CustomInput name={"Address Line 1"}
                                        defaultValue={'Enter Address'}
                                        type="text"
                                     endicon={''}/>
                            </Grid>

                              <Grid item xs={12} md={4} >
                                 <CustomInput name={"Address Line 2"}
                                        defaultValue={'Enter Address'}
                                        type="text"
                                     endicon={''}/>
                            </Grid>

                             <Grid item xs={12} md={3} lg={3}>
                                 <CustomInput name={"Landmark"}
                                        defaultValue={'Enter Landmark'}
                                        type="text"
                                     endicon={''}/>
                            </Grid>

                             {SelectArea.map((selectList)=>(
                         <Grid item xs={12} md={3}>
                           <CustomSelect finedata={selectList}/>
                          </Grid>))}

                          <Grid item xs={12} md={3}>
                            <CustomInput name={"Pincode"}
                                    defaultValue={'600001'}
                                    type="number"
                                     endicon={''}/>
                          </Grid>
                        </Grid>
                    </Grid>
               </Grid>
             </Card>
        </Box>

         <Grid pl={2} pr={4} py={2}>
                <Card sx={{padding:'10px'}}>
                    <Typography>CONTACT & OTHER INFORMATION</Typography>
                    <Grid container spacing={2} >
                        <Grid item xs={12} md={3}> 
                         <InputLabel id="demo-simple-select" sx={{marginBottom:'4px'}}>Business Phone</InputLabel>
                         <OutlinedInput
                            sx={{'&.MuiInputBase-root':{borderRadius:'10px',height:'41px',fontWeight:'600',fontSize:'16px'}}}
                            type='number'
                            fullWidth
                            defaultValue='2245675'
                            startAdornment={<InputAdornment position="start"><Typography> 044</Typography> <ArrowDropDownIcon sx={{ fontSize: "20px", color: "#98A0AC" }}/></InputAdornment>} />
                    
                        </Grid>

                         <Grid item xs={12} md={3}> 
                         <InputLabel id="demo-simple-select" sx={{marginBottom:'4px'}}>Business Phone</InputLabel>
                         <OutlinedInput
                            sx={{'&.MuiInputBase-root':{borderRadius:'10px',height:'41px',fontWeight:'600', fontSize:'16px'}}}
                            type='number'
                            fullWidth
                            defaultValue='994604456'
                            startAdornment={<InputAdornment position="start">
                                <Typography> 044</Typography>
                                 <ArrowDropDownIcon sx={{ fontSize: "20px", color: "#98A0AC" }}/>
                                 </InputAdornment>} />   
                        </Grid>
                         <Grid item xs={12} md={3}> 
                                   <CustomInput name={"Website"}
                                        defaultValue={'www.example.com'}
                                        type="url"
                                     endicon={''}/>
                         </Grid>
                         <Grid item xs={12} md={3}> 
                                   <CustomInput name={"Email Address"}
                                        defaultValue={'demo@prop.com'}
                                        type="email"
                                     endicon={''}/>
                         </Grid>

                    </Grid>
                </Card>
            </Grid>

            <Grid container >
                <Card sx={{padding:'10px 30px',width:'100%'}}>
                    <Grid container justifyContent={'end'}>
                        <Grid item mr={3}> 
                             <Button variant='outlined' 
                                   onClick={() => navigate("/user/dashboard")}
                                  sx={{height:'35px'}}>
                              cancel</Button> 
                        </Grid>
                        <Grid item>
                            <Button 
                         onClick={setopen}
                         variant='contained' sx={{height:'35px'}}>save</Button> 
                        </Grid>

                    </Grid>
                </Card>
            </Grid>
           < Messagebar
           Message="Property Created Successfully"
           type="filled"
           openAlert={openAlert} />
        </Grid>

    </>
  )
}
