import React from 'react';
import {Container,Grid,Chip,Divider,Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import LatestCardN from "./LatestCardN.jsx";
import LatestCardN1 from "./LatestCardS.jsx";
import Link from "next/link";
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
export default function SUContent (){
    const classes = useStyles();
    return(
        <div style={{background:"#E5E5E5",height:"100vh",width:"98vw"}}>
            < Grid container   justify="center" spacing={2}>
                <Grid item xs={12} style={{marginTop:"70px"}}>

                </Grid>
                <Grid item xs={11}  className={classes.root}>
                <Link href="./Notification">
                <Chip size="medium" label="Service Updates" variant="outlined" className={classes.chipborder} style={{background:"#35374C",fontSize:"14px",color:"white",border: "0.6px solid #35374C"}}/>
                </Link>
                  <Link href="./LatestAlerts">
                <Chip size="Large" label="Latest Alerts" variant="outlined" className={classes.chipborder} style={{background:"#E5E5E5",fontSize:"14px",color:"black",border: "0.6px solid #000000"}}/>
                </Link>
                <Link href="./SupportUpdates">
                <Chip size="Large" label="Support Updates" variant="outlined" className={classes.chipborder} style={{background:"#E5E5E5",fontSize:"14px",color:"black",border: "0.6px solid #000000"}} />
                </Link>
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


                
            
            </Grid>
        </div>
    )
}