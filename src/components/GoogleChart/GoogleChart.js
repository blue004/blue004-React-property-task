import React from 'react';
import { Chart } from "react-google-charts";
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import IconButton from '@mui/material/IconButton';
import Typography  from '@mui/material/Typography';
import { Stack } from '@mui/system';
import { Card, CardHeader } from '@mui/material';

export default function ChartComponent(props) {
    const{name,chartType,data,option}= props.Chartitems
  return (
    <>
        <Card sx={{padding:'10px'}}>
            <CardHeader
            sx={{padding:'0px'}}
            title={<Typography variant='h6' component={'span'}>Property Types</Typography>}
            action={ <IconButton 
                size='small'>
                    <OpenInFullIcon/>
                </IconButton>}
            />
             <Chart
            chartType={chartType}
            data={data}
            options={option}
            width={"100%"}
            height={"100%"}
            /> 
     
    </Card>  
    </>
  )
}
