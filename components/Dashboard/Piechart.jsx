import React,{Component} from 'react';
import {Bar,Line,Pie} from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
class Piechart extends Component{
    constructor(props){
        super(props);
        this.state={
            chartData:{
                labels:['Label A',"Label B","Label C","Label D"

                ],
                datasets: [
                    {
                        label: "A",
                        backgroundColor:  ['#D0021B','#50E3C2','#F5A623',"#03BD5B"],
                        borderColor: 'white',
                        
                        data: [26, 14, 27, 33]
                    },
        
                  ],
                  options: {
                    legend: {
                        display: true,
                        position: 'right',
                        labels: {
                            boxWidth: 20,
                            fontColor: '#111',
                            padding: 15
                        }
                    },
                    tooltips: {
                        enabled: false
                    },
                    plugins: {
                        datalabels: {
                            color: 'black',
                            textAlign: 'center',
                            font: {
                                lineHeight: 1.6
                            },
                            formatter: function(value, ctx) {
                                return ctx.chart.data.labels[ctx.dataIndex] + '\n' + value + '%';
                            }
                        }
                    }
                  }
            }
        }

    }
render(){
    return(
        <div className="chart">
            <Pie
            data= {{
                labels:['Label A',"Label B","Label C","Label D"],
        datasets: [{
            data: [26, 14, 27, 33],
            backgroundColor:  ['#D0021B','#50E3C2','#F5A623',"#03BD5B"],
            
            borderColor: 'white'
        }]
    }}
    options= {{

        legend: {
            display: true,
            position: 'right',
            labels: {
                boxWidth: 20,
                fontColor: '#111',
                padding: 15
            }
        },
        tooltips: {
            enabled: true
        },
        plugins: {
            datalabels: {
                enabled: true,
                color: 'white',
                textAlign: 'center',
                render: 'percentage',
                
                
                font: {
                    lineHeight: 0,
                    weight: 'bold',
                    size: 16,
                    
                },
                
                formatter: function(value) {
                    return value + '%';
              }
            }
        }
    }}
            
            />
            
        </div>
    )
}
}
export default Piechart