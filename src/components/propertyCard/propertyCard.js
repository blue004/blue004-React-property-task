import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/system/Box';
import Typography  from '@mui/material/Typography';

export default function PropertyCard(props) {
    const {counting,propertyName,image} = props.Carddetails;
  return (
       <Grid item xs={8} sm={4} md={1} key={propertyName}>
                <Card sx={{padding:'8px',height:'99px'}} >
                    <CardHeader
                    sx={{padding:'0px'}}
                    title={<Typography variant='h5' fontWeight={500} fontSize={23} >{counting}</Typography>}
                     action={<IconButton>
                        <Box component={'img'} src={require(`../../assets/images/card/${image}.png`)}></Box>
                     </IconButton>}/>
                    <CardContent sx={{padding:'24px 24px 24px 8px','&.MuiCardContent-root':{paddingBottom:'16px'}}}>
                    <Typography variant='h6' fontWeight={700} sx={{whiteSpace:'normal'}}>{propertyName} </Typography>
                    </CardContent>
                </Card>  
            </Grid>
  )
}

