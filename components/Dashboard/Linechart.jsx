import React from 'react';
import {Line} from 'react-chartjs-2';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
const statelinechart = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'labelA',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'grey',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    },
    {
        label: 'labelB',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'red',
        color:"red",
        borderColor: 'red',
        borderWidth: 2,
        data: [75, 69, 60, 71, 66]
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
export default function Linechart () {
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
        <Line
          data={statelinechart}
          options={{
            
            title:{
              display:true,
              
              
            },
            legend:{
              display:true,
              position:'top',
              align:'end'
            }
          }}
        />
      </div>
    );
  
}