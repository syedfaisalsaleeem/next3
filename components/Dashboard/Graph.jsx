import React,{Component} from 'react';
import {Bar,Line,Pie} from 'react-chartjs-2';
import {Grid,Button, Typography} from "@material-ui/core";
import styles1 from "./Graph.module.css";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
const bargraph={
    
        labels:['Monday',"Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        datasets: [
            {
                label: "A",
                backgroundColor:  '#0BB783',
                borderColor: '#0BB783',
                data: [60, 90, 120, 60, 90, 120, 60]
            },
            {
                label: "B",
                backgroundColor: '#F64E60',
                borderColor: '#F64E60',
                data: [40, 60, 80, 40, 60, 80, 40]
            },
             {
                 label: "C",
                 backgroundColor: '#8950FC',
                 borderColor: '#8950FC',
                 data: [20, 30, 40, 20, 30, 40, 20]
             }

          ]
    
}
 const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
<<<<<<< HEAD
      width: theme.spacing(3),
      height: theme.spacing(3),
=======
      width: theme.spacing(4),
      height: theme.spacing(4),
>>>>>>> 64a6f9b5d9ec025a1b1851ee99eb25efa9021a35
      color:"white",
      backgroundColor:"#F64E60"
    },
    small1: {
<<<<<<< HEAD
        width: theme.spacing(3),
        height: theme.spacing(3),
=======
        width: theme.spacing(4),
        height: theme.spacing(4),
>>>>>>> 64a6f9b5d9ec025a1b1851ee99eb25efa9021a35
        color:"white",
        backgroundColor:"#8950FC"
      },
    small2: {
<<<<<<< HEAD
        width: theme.spacing(3),
        height: theme.spacing(3),
=======
        width: theme.spacing(4),
        height: theme.spacing(4),
>>>>>>> 64a6f9b5d9ec025a1b1851ee99eb25efa9021a35
        color:"white",
        backgroundColor:"#0BB783"
      },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));
export default function Graph (){
    const classes=useStyles()
    return(

<<<<<<< HEAD
        <div >
            <Grid container direction="row" justify="flex-start" >
                <Grid items className={styles1.graphwidth}>
                <Bar
                    data={bargraph}
                    
                    height={280}
=======
        <div style={{height:"48vh",maxHeight:"435px",minHeight:"435px"}}>
            <Grid container direction="row" justify="center" >
                <Grid items className={styles1.graphwidth}>
                <Bar
                    data={bargraph}
                    width={100}
                    height={300}
>>>>>>> 64a6f9b5d9ec025a1b1851ee99eb25efa9021a35
                    options={{
                        
                        maintainAspectRatio: false,
                        title:{
                            display:false,
                            
                        },
                        legend:{
                            display:false,
                            position:"right"
                        },
                        plugins:{
                            datalabels:{
                                color:"transparent"
                            }
                        },
                        scales: {
                            ticks: {
                                min:0,
                                max:100
                            },
                            xAxes: [{
<<<<<<< HEAD
                                stacked: true,
                                gridLines: {
                                    display:false
                                }
                            }],
                            yAxes: [{
                                stacked: true,
                                gridLines: {
                                display:true,
                                borderDash: [8, 4]
                                }  
                                
=======
                                stacked: true
                            }],
                            yAxes: [{
                                stacked: true
>>>>>>> 64a6f9b5d9ec025a1b1851ee99eb25efa9021a35
                            }]
                        }
                    }}
                    />
                </Grid>
                <Grid items className={styles1.buttongraph} >
                    
                        
                            <Button color="primary" variant="outlined" className={styles1.buttons}>
                                Last Week
                            </Button>
                            <Button color="primary" variant="contained" className={styles1.buttons}>
                                Last 24 Hours
                            </Button>
                        
                        
                    

                </Grid>
            </Grid>
<<<<<<< HEAD
        <Grid items xs={12} md={12} lg={12} style={{marginTop:"10px"}} >
            <Grid container direction="row">
            
                <Grid items style={{marginLeft:"1.2vw"}}>
                    <Grid container direction="row" alignItems="center">
                        <Grid items >
                            <Avatar className={classes.small} >
                                <FolderIcon style={{fontSize:"16px"}} />
=======
        <Grid items xs={12} md={12} lg={12} style={{marginTop:"30px",marginLeft:"2vw",height:"8vh",marginBottom:"40px"}}>
            <Grid container direction="row">
            
                <Grid items>
                    <Grid container direction="row" alignItems="center">
                        <Grid items >
                            <Avatar className={classes.small} >
                                <FolderIcon />
>>>>>>> 64a6f9b5d9ec025a1b1851ee99eb25efa9021a35
                            </Avatar>
                        </Grid>
                        <Grid items >
                            <Grid container direction="column" style={{marginLeft:"10px"}} >
<<<<<<< HEAD
                                <Typography style={{fontSize:"12px"}}> 29</Typography>
                                <Typography style={{fontSize:"10px",color:"#B5B5C3",fontWeight:"bold"}}> Personal Information </Typography>
=======
                                <Typography style={{fontSize:"14px"}}> 29</Typography>
                                <Typography style={{fontSize:"12px",color:"#B5B5C3",fontWeight:"bold"}}> Personal Information </Typography>
>>>>>>> 64a6f9b5d9ec025a1b1851ee99eb25efa9021a35

                            </Grid>
                        </Grid>

                    </Grid>
                    

                </Grid>
<<<<<<< HEAD
                <Grid items style={{marginLeft:"0.7vw"}} >
                    <Grid container direction="row" alignItems="center">
                        <Grid items>
                            <Avatar className={classes.small1}>
                                <FolderIcon style={{fontSize:"16px"}} />
=======
                <Grid items style={{marginLeft:"0.8vw"}} >
                    <Grid container direction="row">
                        <Grid items>
                            <Avatar className={classes.small1}>
                                <FolderIcon />
>>>>>>> 64a6f9b5d9ec025a1b1851ee99eb25efa9021a35
                            </Avatar>
                        </Grid>
                        <Grid items >
                            <Grid container direction="column" style={{marginLeft:"10px"}} >
<<<<<<< HEAD
                                <Typography style={{fontSize:"12px"}}> 62</Typography>
                                <Typography style={{fontSize:"10px",color:"#B5B5C3",fontWeight:"bold"}}> Passwords Found </Typography>
=======
                                <Typography style={{fontSize:"14px"}}> 62</Typography>
                                <Typography style={{fontSize:"12px",color:"#B5B5C3",fontWeight:"bold"}}> Passwords Found </Typography>
>>>>>>> 64a6f9b5d9ec025a1b1851ee99eb25efa9021a35

                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
<<<<<<< HEAD
                <Grid items style={{marginLeft:"0.7vw"}}>
                    <Grid container direction="row" alignItems="center">
                        <Grid items>
                            <Avatar className={classes.small2}>
                                <FolderIcon style={{fontSize:"16px"}} />
=======
                <Grid items style={{marginLeft:"0.8vw"}}>
                    <Grid container direction="row">
                        <Grid items>
                            <Avatar className={classes.small2}>
                                <FolderIcon />
>>>>>>> 64a6f9b5d9ec025a1b1851ee99eb25efa9021a35
                            </Avatar>
                        </Grid>
                        <Grid items >
                            <Grid container direction="column" style={{marginLeft:"10px"}} >
<<<<<<< HEAD
                                <Typography style={{fontSize:"12px"}}> 20</Typography>
                                <Typography style={{fontSize:"10px",color:"#B5B5C3",fontWeight:"bold"}}> Hacker Group Targets  </Typography>
=======
                                <Typography style={{fontSize:"14px"}}> 20</Typography>
                                <Typography style={{fontSize:"12px",color:"#B5B5C3",fontWeight:"bold"}}> Hacker Group Targets  </Typography>
>>>>>>> 64a6f9b5d9ec025a1b1851ee99eb25efa9021a35

                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>


        </Grid>
        </div>
    )
}
