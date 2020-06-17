import React,{Component} from 'react';
import {Bar,Line,Pie} from 'react-chartjs-2';

class Graph extends Component{
    constructor(props){
        super(props);
        this.state={
            chartData:{
                labels:['Monday',"Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"

                ],
                datasets: [
                    {
                        label: "A",
                        backgroundColor:  'rgba(255, 99, 132, 1)',
                        borderColor: 'rgba(255,99,132,1)',
                        data: [60, 90, 120, 60, 90, 120, 60]
                    },
                    {
                        label: "B",
                        backgroundColor: 'rgba(75, 192, 192, 1)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        data: [40, 60, 80, 40, 60, 80, 40]
                    },
                     {
                         label: "C",
                         backgroundColor: 'rgba(255, 206, 86, 1)',
                         borderColor: 'rgba(255, 206, 86, 1)',
                         data: [20, 30, 40, 20, 30, 40, 20]
                     }
        
                  ]
            }
        }

    }
render(){
    return(
        <div className="chart">
            <Bar
            data={this.state.chartData}
            options={{
                title:{
                    display:false,
                    
                },
                legend:{
                    display:true,
                    position:"right"
                },
                scales: {
                    xAxes: [{
                        stacked: true
                    }],
                    yAxes: [{
                        stacked: true
                    }]
                }
            }}
            />
            
        </div>
    )
}
}
export default Graph