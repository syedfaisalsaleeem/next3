import React from 'react';
import Grid from '@material-ui/core/Grid';
import Head from "next/head";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from "@material-ui/core/Divider";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton';
import Graph from "./Graph.jsx";
import Latest from "./Latest.jsx";
import Piechart from "./Piechart.jsx";
import Linechart from "./Linechart.jsx";
import BarGroup from "./BarGroup.jsx";
import Gauge from "./Gauge.jsx"
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
    },
    HeaderFont:{
        fontFamily: 'Roboto', 
        
          fontSize:"21px",
          fontWeight:"600px",
          fontStyle:"normal"
      },
    paper: {
      height: 140,
      width: 100,
    },
    f1:{
        width:"100%"
    },
    control: {
      padding: theme.spacing(2),
    },
  }));
export default function (){
    const classes = useStyles();
    const handleClickOpen2=()=>{
        
    }
    return(

        <div>
            <Head>
            </Head>
            <main>
            
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                <Typography variant="h4" gutterBottom>
                    Security Overview
                </Typography>
                </Grid>
                <Grid item xs={12} md={6}  >
                    <Grid container justify="flex-start"  style={{background:"yellow"}}>
                        <Card className={classes.f1}>
                            <CardHeader
                                className={classes.HeaderFont}
                            
                                disableTypography="true" 
                                action={
                                    
                                    <IconButton color="primary" >
                                    <ChevronRightIcon style={{fontSize:"25px"}}/>
                                    </IconButton>
                                    
                                }
                                
                                title="Cyber Exposure Score "      
                                />
                            <Divider/>
                            <CardContent>
                                <Gauge/>
                            </CardContent>
                            
                        </Card>
                    </Grid>
                </Grid>
                <Grid item  xs={12} md={6}>
                    <Grid container justify="flex-start" maxWidth="xl" style={{background:"yellow"}} >
                        <Card className={classes.f1}>
                            <CardHeader
                            className={classes.HeaderFont}
                           
                            disableTypography="true" 
                            action={
                                
                                <IconButton color="primary"  >
                                    <ChevronRightIcon style={{fontSize:"25px"}} />
                                    </IconButton>
                                
                            }
                            
                            title="Exposed Information"      
                            />
                            <Divider/>
                            <CardContent>
                                <Graph/>
                            </CardContent>
                          
                        </Card>
                    </Grid>

                </Grid>
                <Grid item xs={12}>
                    <Grid container justify="flex-start" maxWidth="xl" style={{background:"yellow"}}>
                        <Card className={classes.f1}>
                            <CardHeader
                                className={classes.HeaderFont}
                            
                                disableTypography="true" 
                                action={
                                    
                                    <IconButton color="primary" >
                                    <ChevronRightIcon style={{fontSize:"25px"}}/>
                                    </IconButton>
                                    
                                }
                                
                                title="Latest Alerts "      
                                />
                            <Divider/>
                            <CardContent>
                                <Latest/>
                            </CardContent>
                            
                        </Card>
                    </Grid>

                </Grid>
                
                <Grid item xs={12}>
                <Divider style={{marginTop:"20px",marginBottom:"20px"}}/>
                <Typography variant="h4" gutterBottom>
                    Security Overview
                </Typography>
                </Grid>

                <Grid item xs={12} md={6} >
                    <Grid container justify="flex-start" maxWidth="xl" style={{background:"yellow"}}>
                        <Card className={classes.f1}>
                            <CardHeader
                                className={classes.HeaderFont}
                            
                                disableTypography="true" 
                                action={
                                    
                                    <IconButton color="primary" >
                                    <ChevronRightIcon style={{fontSize:"25px"}}/>
                                    </IconButton>
                                    
                                }
                                
                                title="By Category"      
                                />
                            <Divider/>
                            <CardContent>
                            <Piechart/>
                            </CardContent>
                            
                        </Card>
                    </Grid>
                </Grid>
                <Grid item  xs={12} md={6}>
                    <Grid container justify="flex-start" maxWidth="xl" style={{background:"yellow"}} >
                        <Card className={classes.f1}>
                            <CardHeader
                            className={classes.HeaderFont}
                           
                            disableTypography="true" 
                            action={
                                
                                <IconButton color="primary"  >
                                    <ChevronRightIcon style={{fontSize:"25px"}} />
                                    </IconButton>
                                
                            }
                            
                            title="By Risk"      
                            />
                            <Divider/>
                            <CardContent>
                                <Linechart/>
                            </CardContent>
                          
                        </Card>
                    </Grid>

                </Grid>
                <Grid item  xs={12} md={12} >
                    <Grid container justify="flex-start" maxWidth="xl" style={{background:"yellow"}} >
                        <Card className={classes.f1}>
                            <CardHeader
                            className={classes.HeaderFont}
                           
                            disableTypography="true" 
                            action={
                                
                                <IconButton color="primary"  >
                                    <ChevronRightIcon style={{fontSize:"25px"}} />
                                    </IconButton>
                                
                            }
                            
                            title="By Risk"      
                            />
                            <Divider/>
                            <CardContent  >
                                <BarGroup/>
                            </CardContent>
                          
                        </Card>
                    </Grid>

                </Grid>


            </Grid>
                
            </main>            
        </div>
    )
}