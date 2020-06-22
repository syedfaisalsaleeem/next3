import React from 'react';
import {Container,Grid,Chip,Divider,Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import LatestCardN from "./LatestCardN.jsx";
import LatestCardN1 from "./LatestCardN1.jsx";
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'flex-start',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
      },
      chipborder:{
        border:"solid",
        borderColor:"black",
        borderWidth:"0.5px",
        fontColor:"black",

    },
    },
  }));
export default function NContent (){
    const classes = useStyles();
    return(
        <div style={{background:"#E5E5E5"}}>
            < Grid container   justify="center" spacing={2}>
                <Grid item xs={12} style={{marginTop:"70px"}}>

                </Grid>
                <Grid item xs={11}  className={classes.root}>
                
                <Chip size="Large" label="Service Updates" variant="outlined" className={classes.chipborder} />
                <Chip size="Large" label="Latest Alerts" variant="outlined" className={classes.chipborder} />
                <Chip size="Large" label="Support Updates" variant="outlined" className={classes.chipborder} />

                </Grid>
            
                <Grid item xs={11}>
                    <Grid container direction="row">
                        <Grid item>
                            <Typography variant="h4">
                                Service Updates
                                
                            </Typography>
                        </Grid>
                        
                        <Grid item xs={10} >
                            
                            <Typography component="div" style={{marginTop:"20px",marginLeft:"20px",height:"2px",background:"black"}}>
                                
                            
                                </Typography>
                            
                            
                            
                        </Grid>

                    </Grid>

                </Grid>
                
                <Grid item xs={11}>
                <LatestCardN1/>
                <LatestCardN1/>
                <LatestCardN1/>
                
                </Grid>
                <Grid item xs={11}>
                    <Grid container direction="row">
                        <Grid item>
                            <Typography variant="h4">
                                Latest Alerts
                                
                            </Typography>
                        </Grid>
                        
                        <Grid item xs={10} >
                            
                            <Typography component="div" style={{marginTop:"20px",marginLeft:"20px",height:"2px",background:"black"}}>
                                
                            
                                </Typography>
                            
                            
                            
                        </Grid>

                    </Grid>

                </Grid>
                <Grid item xs={11}>
                <LatestCardN/>
                <LatestCardN/>
                <LatestCardN/>
               
                </Grid>
                <Grid item xs={11}>
                    <Grid container direction="row">
                        <Grid item>
                            <Typography variant="h4">
                                Support Updates
                                
                            </Typography>
                        </Grid>
                        
                        <Grid item xs={10} >
                            
                            <Typography component="div" style={{marginTop:"20px",marginLeft:"20px",height:"2px",background:"black"}}>
                                
                            
                                </Typography>
                            
                            
                            
                        </Grid>

                    </Grid>

                </Grid>
                <Grid item xs={11}>
                <LatestCardN1/>
                <LatestCardN1/>
                <LatestCardN1/>
               
                </Grid>

                
            
            </Grid>
        </div>
    )
}