import React from 'react';
import GaugeChart from 'react-gauge-chart';
import {Typography,Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import InfoIcon from '@material-ui/icons/Info';
export default function Gauge(){
 return(
    <div>
    <Grid container justify="center" >
        <Grid item >
        <GaugeChart id="gauge-chart3" 
        nrOfLevels={30} 
        colors={["#FF5F6D", "#FFC371"]} 
        arcWidth={0.3} 
        percent={0.37} 
        textColor={"transparent"}
        style={{height:"280px",width:"600px"}} 
        
    />
        </Grid>
    </Grid>
   
    <Grid container direction="row"  justify="center" style={{marginBottom:"6vh"}}>
        <Grid item  >
        <Typography variant="h4"> <CountUp start={0} end={143} duration={2.5} separator=","/></Typography>
        
        </Grid>
        <Grid item>
        <Typography variant="h4" >/</Typography>
        </Grid>
        
        <Grid item >
        <Typography variant="h4"> <CountUp start={0} end={300} duration={2.5} separator=","/></Typography>
        </Grid>

        <Grid item>
            <InfoIcon/>
        </Grid>
            

            
        
    </Grid>
            

    </div>
    

    
 )
}