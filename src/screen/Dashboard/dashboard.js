import React from 'react';
import {
  Divider,
  Grid,
  Card,
  SpeedDial,
  SpeedDialIcon,
  Stack,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  Typography,
  Link,
} from "@mui/material";
import {Box} from '@mui/material';
import { useState } from "react";
import PropertyCard from '../../components/propertyCard/propertyCard';
import ChartComponent from '../../components/GoogleChart/GoogleChart';
import {OutlinedInput} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';  
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
import NavigaterSpeedDial from '../../components/SpeedDial/SpeedDial';


  const propertyDetails = [
    {  propertyName: "Active Properties",  counting: "14", image: "activeProperty",},
    {  propertyName: "Blocks",             counting: "06", image: "block",},
    {  propertyName: "Floors",             counting: "12", image: "floors",},
    {  propertyName: "Residents",          counting: "14", image: "residents", },
    {  propertyName: "Active Unit",        counting: "10", image: "actiiveUnit"},
    {  propertyName: "Vacant",             counting: "03", image: "vacant",},
    {  propertyName: "Reserved",           counting: "17", image: "reserved", },
    {propertyName: "Occupeid",             counting: "45", image: "occupied",},
  ];

  const ChartDetails=[  { name: "Property Types", chartType: "PieChart",
    data: [
      ["Task", "Hours per Day"],
      ["Vacant", 25],
      ["Occupied", 25],
      ["Reserved", 50],
      ["Listed", 25],
    ],
    option: {
       legend: "bottom",
      colors: ["#58D0E0", "#FF9340", "#5AC782", "#F3E137"],
    },
  },
  {
    name: "Unit Category",  chartType: "Bar",
    data: [
      ["Task", " "],
      ["Vacant", 25],
      ["Occupied", 25],
      ["Reserved", 50],
      ["Listed", 25],
    ],
    option: {
      colors: ["#5AC782"],
      legend: "bottom",
    },
  },
  {
    name: "Vacant Unit By Property", chartType: "BarChart",
    data: [
      ["Task", "No of Vacants"],
      ["Rubix", 10],
      ["Eat", 22],
      ["Commute", 32],
      ["Watch TV", 21],
      ["Sleep", 7],
    ],
    option: {
      colors: ["#58D0E0"],
      legend: "bottom",
    },
  },
  {
    name: "Total Area", chartType: "PieChart",
    data: [
      ["Task", "Hours per Day"],
      ["Commerical", 20],
      ["Residential", 25],
    ],
    option: {
      legend: "bottom",
      colors: ["#5AC782", "#F3E137"],
      pieHole: 0.4,
      is3D: false,
    },
  }]

 function createData(name, type, date, id) {
  return { name, type, date, id };
      }
  function createTd(propertyId, propertyName, totelUnit, occupeidUnit, occupancy) {
  return { propertyId, propertyName, totelUnit, occupeidUnit, occupancy };
         }

  const rows = [
  createData("Water Leakage Repair", "Maintenance", "22 jan 22", "K-F01-U277"),
  createData( "Electricity Voltage Drop","Maintenance","22 jan 22","K-F01-U277"),
  createData("Water Leakage Repair", "Maintenance", "22 jan 22", "K-F01-U277"),
  createData("Electricity Voltage Drop","Maintenance","22 jan 22","K-F01-U277"),
  createData("Water Leakage Repair", "Maintenance", "22 jan 22", "K-F01-U277"),
  createData("Electricity Voltage Drop","Maintenance","22 jan 22","K-F01-U277"),
];

const table = [
  createTd("Prop 011", "Tyons", "22", "02", "47%"),
  createTd("Prop 012", "Rubix", "52", "14", "27%"),
  createTd("Prop 013", "Phonix", "46", "34", "54%"),
  createTd("Prop 014", "Thapar", "27", "76", "65%"),
  createTd("Prop 015", "Marian", "29", "33", "23%"),
  createTd("Prop 016", "Tyons", "43", "34", "34%"),
  createTd("Prop 017", "Tyons", "87", "56", "21%"),
  createTd("Prop 011", "Tyons", "22", "02", "47%"),
  createTd("Prop 012", "Rubix", "52", "14", "27%"),
  createTd("Prop 013", "Phonix", "46", "34", "54%"),
];



export default function Dashboard() {

  const navigate = useNavigate();
  const typo ={variant:'h5', fontWeight:600 ,fontSize:'15px'}
   const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <Grid container sx={{backgroundColor:'#e6ecf5',paddingRight:'10px'}} >

        <Grid container spacing={2} ml={1} mt={1} 
             columns={8} sx={{padding:{xs:'10px 50px 10px 38px',sm:'5px 30px 5px 1px'}}}>
            {propertyDetails.map((card)=><PropertyCard Carddetails={card}/>)}  
        </Grid>

        <Grid spacing={2} ml={1} mt={1} container justifyContent={'center'}
         pl={{xs:4,sm:0}} pr={{xs:6,sm:4,md:4}}>
          {ChartDetails.map((Details)=>( 
          <Grid key={Details.name} item xs={12} sm={6} md={3} >
          <ChartComponent Chartitems={Details}/>
           </Grid>))
            }
        </Grid>

       <Grid container 
            spacing={2} 
            mt={1}
            ml={1}
            paddingLeft={{xs:2,sm:0}}
            paddingRight={{xs:2,sm:2}}
            mb={1}>
            
       <Grid item xs={12} sm={6} md={6} pr={1} >
          <Card > 
             <Stack direction={'row'} 

                p={1}
                sx={{backgroundColor:'#5C86CB2E',width:{xs:'90%',md:'35%'}}} 
                ml={1} 
                mt={1} 
              divider={<Divider orientation="vertical" flexItem />}>
                <Box mr={1}>
                  <Typography variant='h6'> General Requests</Typography>
                  <Typography variant='h6' fontWeight={600}>12 </Typography>
                </Box>
                <Box ml={1}>
                  <Typography variant='h6'>Maintenance</Typography>
                  <Typography variant='h6' fontWeight={600}>15</Typography>
                </Box>
             </Stack>
              <Tabs value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    sx={{color:'GrayText'}} 
                    >
                    <Tab sx={{fontSize:'13px'}}label="General Requests"  />
                    <Tab sx={{fontSize:'13px'}} label="Maintenance"  />
               </Tabs>
               <Grid container 
                    justifyContent={'space-between'}
                     p={2} >
                  <Typography 
                      component={'span'}>
                        {value===0? "General Requests (12)":"Maintenance (15)"}
                  </Typography>
                  <Link href='#' 
                  sx={{marginLeft:'auto',fontSize:'12px'}} 
                  underline='hover'> 
                  View All
                  </Link>
               </Grid>   
               <Box ml={2} mr={2}>         
                      <OutlinedInput
                       placeholder='Request ID, Request Name, Categoty'
                       fullWidth
                        ml={1}
                        id="outlined-adornment-amount"
                        startAdornment={<SearchIcon position="start" sx={{color:'#98A0AC'}}/>}
                      />
              </Box>  
              <Grid mt={1}>
                <TableContainer sx={{height:'300px'}}>
                  <Table>
                    <TableBody>
                       {rows.map((row)=>(
                      <TableRow>
                        <TableCell sx={{paddingBottom:'0px'}}>
                          <Typography variant='h5' color={'GrayText'}>{row.name}</Typography>
                          <Box component={'div'} display='flex' justifyContent={'space-between'}>
                          <Typography component={'span'} variant='h6' color={'grey'}>
                            {row.type} &#8226; {row.date} &#8226; {row.id}
                          </Typography>

                            <Box component={'span'} > 
                             <EditIcon sx={{color:'#98A0AC',fontSize:'20px',marginRight:'20px'}} />
                             <VisibilityIcon sx={{color:'#98A0AC',fontSize:'20px'}} />
                             </Box>
                          </Box>
                        </TableCell>
                      </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
          </Card>
        </Grid>
{/* ************************************************* */}
        <Grid item xs={12} sm={6} mb={6}>
          <Card sx={{marginRight:'12px'}}>
            <Grid p={2}>
            <Typography variant='h5' fontWeight={600}>Occupancy By Property</Typography>
          <TableContainer sx={{height:'460px'}}>
            <Table stickyHeader>
              <TableHead >
                <TableRow>
                  <TableCell >Property ID</TableCell>
                  <TableCell >Property Name</TableCell>
                  <TableCell >Total Unit</TableCell>
                  <TableCell >Occupeid Unit</TableCell>
                  <TableCell >Occupancy</TableCell>
                </TableRow>
              </TableHead>
              <TableBody  >
                {table.map((tabledata)=>(
                <TableRow>
                  <TableCell><Typography {...typo}>{tabledata.propertyId}</Typography> </TableCell>
                  <TableCell><Typography {...typo}>{tabledata.propertyName}</Typography>  </TableCell>
                  <TableCell><Typography {...typo}>{tabledata.totelUnit}</Typography>  </TableCell>
                  <TableCell><Typography {...typo}>{tabledata.occupeidUnit}</Typography>  </TableCell>
                  <TableCell><Typography {...typo}>{tabledata.occupancy}</Typography>  </TableCell>
                </TableRow>))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
 </Card>
        </Grid>
       </Grid>

       <SpeedDial
        ariaLabel="SpeedDial basic example"
       onClick={() => navigate("/user/properties")}
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >   
      </SpeedDial>
    </Grid>
  )
}
// sx={{padding:{xs:'0px 80px 0px 35px'}}