import React from 'react';
import {Line} from 'react-chartjs-2';

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

export default class Linechart extends React.Component {
  render() {
    return (
      <div>
        <Line
          data={statelinechart}
          options={{
            title:{
              display:true,
              
              
            },
            legend:{
              display:true,
              position:'top'
            }
          }}
        />
      </div>
    );
  }
}