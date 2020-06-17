import React from "react";
import ReactDOM from "react-dom";
import { Bar } from "react-chartjs-2";



export default class BarGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
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
    };
  }

  render() {
    const options = {
      
      legend: {
        display: true
      },
      type: "bar"
      //   scales: {
      //     xAxes: [{
      //         stacked: true
      //     }],
      //     yAxes: [{
      //         stacked: true
      //     }]
      // }
    };
    return (
      <Bar
        data={this.state.data}
        width={null}
        height={null}
        options={options}
      />
    );
  }
}
