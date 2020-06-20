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
<<<<<<< HEAD
    h:{
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "27.9411px"
    },
    HeaderFont:{
        fontFamily: 'Roboto',
        fontSize: "16.9411px" ,
=======
    HeaderFont:{
        fontFamily: 'Roboto', 
        
          fontSize:"21px",
>>>>>>> 64a6f9b5d9ec025a1b1851ee99eb25efa9021a35
          fontWeight:"bold",
          fontStyle:"normal"
      },
    paper: {
      height: 140,
      width: 100,
    },
    fontheader:{

    },
    
    f1:{
<<<<<<< HEAD
       width:"100%",
       boxShadow: "0px 0px 19.9579px rgba(56, 71, 109, 0.03)",
        borderRadius: "11.9747px",
        
        height: "422.11px"
    },
    f4:{
        width:"100%",
       boxShadow: "0px 0px 19.9579px rgba(56, 71, 109, 0.03)",
        borderRadius: "11.9747px",
        
        paddingBottom:"18px",
        
    },
    f5:{
        width:"100%",
        boxShadow: "0px 0px 19.9579px rgba(56, 71, 109, 0.03)",
         borderRadius: "11.9747px",
         
         paddingBottom:"18px",
         height:"447px"
    },
    f2:{
        width:"100%",
        boxShadow: "0px 0px 19.9579px rgba(56, 71, 109, 0.03)",
        borderRadius: "11.9747px",
        
     },
     f3:{
        width:"100%",
        boxShadow: "0px 0px 19.9579px rgba(56, 71, 109, 0.03)",
        borderRadius: "11.9747px",
        height: "483px"
=======
       width:"95%"
    },
    f2:{
        width:"97.4%"
     },
     f3:{
        width:"95%"
>>>>>>> 64a6f9b5d9ec025a1b1851ee99eb25efa9021a35
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
            
<<<<<<< HEAD
            <Grid container className={classes.root} spacing={3}>
                <Grid item xs={12} md={12}>
                    <Grid container justify="center">
                        <Grid item xs={11}>
                        <Typography className={classes.h}>
                        Security Overview
                        </Typography>
                        </Grid>
                    </Grid>
                
                </Grid>
                <Grid item xs={12} md={12}>
                    <Grid container justify="center" spacing={4} >
                        <Grid item xs={12} md={5} >
                                    <Grid container justify="center"  >
=======
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                <Typography variant="h4" gutterBottom>
                    Security Overview
                </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justify="flex-start"  >
                        <Grid item xs={12} md={12} >

                            <Grid container  justify="space-evenly" spacing={4}>

                            
                                <Grid item xs={12} sm={10}  lg={5}  >
                                
                                    <Grid container justify="flex-start"  >
>>>>>>> 64a6f9b5d9ec025a1b1851ee99eb25efa9021a35
                                        <Card className={classes.f1} >
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
                                            
                                                <Gauge/>
                                            
                                            
                                        </Card>
                                    </Grid>
<<<<<<< HEAD
                                
                        </Grid>
                        <Grid item  xs={12} md={6}>
                                    <Grid container justify="center" maxWidth="xl"  >
                                        <Card className={classes.f4}>
=======
                                </Grid>
                                
                                <Grid item  xs={12} sm={10}  lg={7}>
                                    <Grid container justify="flex-start" maxWidth="xl"  >
                                        <Card className={classes.f1}>
>>>>>>> 64a6f9b5d9ec025a1b1851ee99eb25efa9021a35
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
                                            
<<<<<<< HEAD
                                                
                                            <Graph/>
                                        
                                        </Card>
                                    </Grid>
                                
                            
=======
                                                <Graph/>
                                            
                                        
                                        </Card>
                                    </Grid>
                                </Grid>
                            </Grid>
>>>>>>> 64a6f9b5d9ec025a1b1851ee99eb25efa9021a35
                        </Grid>
                    </Grid>
                </Grid>
                
                <Grid item xs={12} md={12}>
<<<<<<< HEAD
                    <Grid container justify="center" style={{background:"transparent"}}>
                        <Grid items md={11}>
=======
                    <Grid container justify="flex-start" style={{background:"transparent"}}>
>>>>>>> 64a6f9b5d9ec025a1b1851ee99eb25efa9021a35
                        <Card className={classes.f2}>
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
<<<<<<< HEAD
                        </Grid>
                        
=======
>>>>>>> 64a6f9b5d9ec025a1b1851ee99eb25efa9021a35
                    </Grid>

                </Grid>
                
<<<<<<< HEAD
                
                <Grid item xs={12} md={12}>
                    <Grid container justify="center">
                    
                        <Grid item xs={11}>
                        <Divider style={{marginTop:"20px",marginBottom:"20px",height:"0.5px",color:"black"}}/>
                        <Typography className={classes.h}>
                        Security Overview
                        </Typography>
                        </Grid>
                    </Grid>
                
                </Grid>
                <Grid item xs={12} md={12}>
                    <Grid container justify="center" spacing={2} >
                        <Grid item xs={12} md={5} >
                                    <Grid container justify="center"  >
                                        <Card className={classes.f3} >
                                            <CardHeader
                                                className={classes.HeaderFont}
                                            
                                                disableTypography="true" 
                                                action={
                                                    
                                                    <IconButton color="primary" >
                                                    <ChevronRightIcon style={{fontSize:"25px"}}/>
                                                    </IconButton>
                                                    
                                                }
                                                
                                                title="By Category "      
                                                />
                                            <Divider/>
                                            <Piechart/>
                                                
                                            
                                            
                                        </Card>
                                    </Grid>
                                
                        </Grid>
                        <Grid item  xs={12} md={6}>
                                    <Grid container justify="center" maxWidth="xl"  >
                                        <Card className={classes.f3}>
                                            <CardHeader
                                            className={classes.HeaderFont}
                                        
                                            disableTypography="true" 
                                            action={
                                                
                                                <IconButton color="primary"  >
                                                    <ChevronRightIcon style={{fontSize:"25px"}} />
                                                    </IconButton>
                                                
                                            }
                                            
                                            title="Label"      
                                            />
                                            <Divider/>
                                            <Linechart/>
                                            
                                                
                                            
                                        
                                        </Card>
                                    </Grid>
                                
                            
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item  xs={12} md={12} >
                    <Grid container justify="center" maxWidth="xl" style={{background:"transparent"}} >
                        <Grid items xs={12} md={11}>
                            <Card className={classes.f5}>
                                <CardHeader
=======
                <Grid item xs={12}>
                <Divider style={{marginTop:"20px",marginBottom:"20px"}}/>
                <Typography variant="h4" gutterBottom>
                    Security Overview
                </Typography>
                </Grid>

                <Grid item xs={12} md={10} lg={6} >
                    <Grid container justify="flex-start" maxWidth="xl" style={{background:"transparent"}}>
                        <Card className={classes.f1}>
                            <CardHeader
>>>>>>> 64a6f9b5d9ec025a1b1851ee99eb25efa9021a35
                                className={classes.HeaderFont}
                            
                                disableTypography="true" 
                                action={
                                    
<<<<<<< HEAD
                                    <IconButton color="primary"  >
                                        <ChevronRightIcon style={{fontSize:"25px"}} />
                                        </IconButton>
                                    
                                }
                                
                                title="By Risk"      
                                />
                                <Divider/>
                                <BarGroup/>
                                    
                                
                            
                            </Card>
                        </Grid>
                        
=======
                                    <IconButton color="primary" >
                                    <ChevronRightIcon style={{fontSize:"25px"}}/>
                                    </IconButton>
                                    
                                }
                                
                                title="By Category"      
                                />
                            <Divider/>
                            
                            <Piechart/>
                            
                            
                        </Card>
                    </Grid>
                </Grid>
                <Grid item  xs={12} md={10} lg={6}>
                    <Grid container justify="flex-start" maxWidth="xl" style={{background:"transparent"}} >
                        <Card className={classes.f3}>
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
                         
                                <Linechart/>
                           
                          
                        </Card>
                    </Grid>

                </Grid>
                <Grid item  xs={12} md={12} >
                    <Grid container justify="flex-start" maxWidth="xl" style={{background:"transparent"}} >
                        <Card className={classes.f2}>
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
                            
                                <BarGroup/>
                            
                          
                        </Card>
>>>>>>> 64a6f9b5d9ec025a1b1851ee99eb25efa9021a35
                    </Grid>

                </Grid>


            </Grid>
                
            </main>            
        </div>
    )
}