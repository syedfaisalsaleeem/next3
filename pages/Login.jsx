import Head from 'next/head';
import styles from "./Login.module.css";
import LoginCard from '../components/LoginCard1';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Link from "next/link";
import { Container,Typography,Grid,Paper} from '@material-ui/core';
// The `withStyles()` higher-order component is injecting a `classes`
// prop that is used by the `Button` component.
const StyledCard = withStyles({
  root1: {
    background: 'white',
    borderRadius: 3,
    border: 0,
    color: 'black',
    width:"200rem",
    minWidth: 275,
    
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Card);
const useStyles = makeStyles((theme)=>({
    f1: {
        background: 'white',
        borderRadius: 3,
        border: 0,
        color: 'black',
        
        
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
      },
  }))
export default function Login(){
    const classes = useStyles();
    return(
        <div style={{minHeight: "100vh",display:"flex",flexDirection:"column"}}>
        <Head>
        

        <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        </Head>
        <main style={{display: "flex", flexDirection:"column"}}>
            
            <Grid container spacing={3} >
                <Grid item xs={12}  style={{justifyContent:"center",alignItems:"flex-end",height:"24vh"}}>
                
                <div className={styles.logod}>
                <div className={styles.logod1}>
                <img src="cyber.png" />
                </div>
                
                </div>
                
                </Grid>
                
                <Grid item xs={12} style={{height:"60vh"}} >
                    <Grid container justify="center" >
                        <Grid item xs={9} sm={6} md={5} lg={4}>
                        <Card style={{minheight:"380px"}} className={classes.f1}>
                        <CardContent>
                        <Container maxWidth="xl" >
                        <LoginCard/>
                        </Container>
                        </CardContent>
                        </Card>
                        </Grid>

                    </Grid>
                    
                </Grid>
                

            </Grid>
            

            
            
        </main>
        <footer style={{width:"100%",height:"200px",display:"flex",background:"transparent",bottom:"0"}}>
                    <div className={styles.footercardh}>
                            <div className={styles.footercardc}>

                            </div>
                            
                            <div className={styles.footercardc1}>
                            
                                <div className={styles.footercardc11}>
                                
                                </div>
                                <div className={styles.footercardc12}>
                                    <div className={styles.footercardc121}>
                                        <div>
                                            <Link href="/">
                                            <p> Privacy Policy</p>
                                            </Link>
                                            
                                        </div>
                                        <div>
                                            <Link href="/">
                                            <p> User Notice</p>
                                            </Link>
                                            
                                        </div>

                                    </div>
                                    <div className={styles.footercardc122}>
                                        <p>Copyright Cyber Intelligence House 2020.</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.footercardh1}>
                        <img src="BigData.png" width="400px" height="369.96px"/>
                        </div>
        


        </footer>
     
        
        </div>
    )

}