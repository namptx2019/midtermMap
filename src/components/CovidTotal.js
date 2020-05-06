import React, {useEffect, useState} from 'react';
import {Line} from 'react-chartjs-2'
import axios from 'axios';



const StatTotal = () => {
    const [dataTotal, setDataTotal] = useState([]);

    useEffect(() => {
        axios.get('https://td.fpt.ai/corona/corona-total.json')
        .then(function (response) {
            setDataTotal(response.data)         
        })
        .catch(function (error) {
          console.log(error);
        });     
     }, []);
    const ChartTotal = () => (
      
        <div className="App">
        {
          
        
           <Line
            data = {
              {
                labels:  Object.keys(dataTotal).map((key)=>key),
                datasets:[{
                      data: Object.keys(dataTotal).map((key)=>dataTotal[key][0]),
                      label:"Số ca nhiễm",               
                      fill:true,
                      lineTension: 0.1,
                      borderColor: 'rgb(255, 255, 0)',
                      borderCapStyle: 'butt',
                      borderDash: [],
                      borderDashOffset: 0.0,
                      borderJoinStyle: 'miter',
                      pointBorderColor: 'rgb(255, 255, 0)',
                      pointBackgroundColor: '#fff',
                      pointBorderWidth: 1,
                      pointHoverRadius: 5,
                      pointHoverBackgroundColor: 'rgb(255, 255, 0)',
                      pointHoverBorderColor: 'rgb(255, 255, 0)',
                      pointHoverBorderWidth: 2,
                      pointRadius: 0.5,
                      pointHitRadius: 10,
                },
                {
                      data: Object.keys(dataTotal).map((key)=>dataTotal[key][1]),
                      label:"Số ca tử vong",
                      fill:true,
                      lineTension: 0.1,
                      borderColor: 'rgb(255, 0, 0)',
                      borderCapStyle: 'butt',
                      borderDash: [],
                      borderDashOffset: 0.0,
                      borderJoinStyle: 'miter',
                      pointBorderColor: 'rgb(255, 0, 0)',
                      pointBackgroundColor: '#fff',
                      pointBorderWidth: 1,
                      pointHoverRadius: 5,
                      pointHoverBackgroundColor: 'rgb(255, 0, 0)',
                      pointHoverBorderColor: 'rgb(255, 0, 0)',
                      pointHoverBorderWidth: 2,
                      pointRadius: 1,
                      pointHitRadius: 10,
                },
                {
                      data: Object.keys(dataTotal).map((key)=>dataTotal[key][2]),
                      label:"Số ca phục hồi",
                      fill:true,
                      lineTension: 0.1,
                      borderColor: 'rgb(0, 0, 255)',
                      borderCapStyle: 'butt',
                      borderDash: [],
                      borderDashOffset: 0.0,
                      borderJoinStyle: 'miter',
                      pointBorderColor: 'rgb(0, 0, 255)',
                      pointBackgroundColor: '#fff',
                      pointBorderWidth: 1,
                      pointHoverRadius: 5,
                      pointHoverBackgroundColor: 'rgb(0, 0, 255)',
                      pointHoverBorderColor: 'rgb(0, 0, 255)',
                      pointHoverBorderWidth: 2,
                      pointRadius: 1,
                      pointHitRadius: 10,
                }
                ]
              }
            }

           />

        }
      		
     </div>
        
      );
      return <ChartTotal></ChartTotal>
}
export default  StatTotal