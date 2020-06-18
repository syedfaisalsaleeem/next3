import React from "react";
import ReactDOM from "react-dom";
import { Bar } from "react-chartjs-2";



import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';


    const databar = {
      
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "#50E3C2",
            borderColor: "#50E3C2",
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            //stack: 1,
            
            data: [65, 59, 80, 81, 56, 55, 40]
          },

          {
            label: "My second dataset",
            backgroundColor: " #F5A623",
            borderColor: " #F5A623",
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            //stack: 1,
           
            data: [45, 79, 50, 41, 16, 85, 20]
          },
          {
            label: "My third dataset",
            backgroundColor: "#03BD5B",
            borderColor: "#03BD5B",
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            //stack: 1,
            
            data: [5, 39, 40, 61, 26, 45, 50]
          }
        ]
      }
    
  
  
  
    const useStyles = makeStyles((theme) => ({
      formControl: {
        
        minWidth: 200,
        width:"5vw",
        background:"white",
        marginTop:"20px",
        marginLeft:"20px",
        height:"25px",
        '& fieldset': {
          border: "1px solid #000000",
        }
        
      }
    }))
    
    const options = {
      maintainAspectRatio: false,
      legend: {
        display:true,
        position:'top',
        align:'end'
      },
      type: "bar"

    };
  export default function BarGroup(){
    const classes = useStyles();
  const [age1, setAge1] = React.useState('');
  const [open,handleopen]=React.useState(false)
  const funcopen=()=>{
    handleopen(true)
  }
  const funcclose=()=>{
    handleopen(false)
  }
  const handleChange = (event) => {
      setAge1(event.target.value);
  };
    return (
      <div style={{maxHeight:"455px",minHeight:"455px",margin:"10px"}}>
          <div styles={{display:"flex",postion:"absolute"}}>
          <FormControl className={classes.formControl} size="small" >
                
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age1}
                onChange={handleChange}
                
                
                variant="outlined"
                displayEmpty
                >
               <MenuItem value="">
              <em>Select Month</em>
              </MenuItem>  
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl} size="small" >
                
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age1}
                onChange={handleChange}
                
                
                variant="outlined"
                displayEmpty
                >
               <MenuItem value="">
              <em>Select Week Range</em>
              </MenuItem> 
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </div>
        <div style={{maxHeight:"400px",minHeight:"400px"}}>
        <Bar
          data={databar}
          
          options={options}
        />
        </div>
        
      </div>
      
    );
  

}