import React, {useState, useEffect} from 'react';
import {Bar, Line, Doughnut} from 'react-chartjs-2'
import {FormControl, NativeSelect} from '@material-ui/core'
const ChartSection = (props) =>{
    const [data, setData] = useState(props)
    const [state, setState] = React.useState({
        chart: '',
      });
    useEffect(() => {
        setData(props);
      }, [props]);
      console.log(state)
    const handleChange = (event) => {
    const name = event.target.name;
    setState({
        ...state,
        [name]: event.target.value,
    });
    };

    const bar = () =>{
        return(
            <Bar
            data={{
             labels:[data.n1, data.n2, data.n3],
             datasets:[{
                 label: 'Bar Chart',
                 backgroundColor:[
                     'rgba(0,0,255,0.5)',
                     'rgba(0,255, 0,0.5)',
                     'rgba(255,0,0,0.5)'
                 ],
                 data:[data.b1, data.b2, data.b3]
             }]
             }}
             options={{
                 legend: { display: false},
                 title: {display:true, text: `Bar Chart`},
                 responsive: true,
                 scales: {
                     yAxes: [{
                         ticks: {
                             beginAtZero: true
                         }
                     }]
                 }
             }}
         />
        )
    }

    const line = () =>{
        return (
            <Line
                data={{
                    labels: [data.n1, data.n2, data.n3],
                    datasets:[{
                        data: [data.b1, data.b2, data.b3],
                        label: "Line Chart",
                        borderColor:'#3333ff',
                        fill: true,
                    }],
                }}
            />
        )
    }

    const doughnut = () =>{
        return (
            <Doughnut  data={{
                labels: [data.n1, data.n2, data.n3],
                datasets:[{
                    data: [data.b1, data.b2, data.b3],
                    backgroundColor:[
                        'rgba(0,0,255,0.5)',
                        'rgba(0,255, 0,0.5)',
                        'rgba(255,0,0,0.5)'
                    ],
                    label: "Line Chart",
                    borderColor:'#000000',
                    fill: true,
                }],
            }} /> 
        )
    }

    return (
        <div>
            <FormControl>
                <NativeSelect
                    value={state.chart}
                    onChange={handleChange}
                    inputProps={{
                        name: 'chart',
                    }}
                >
                    <option value="">Select a chart</option>
                    <option value={'bar'}>Bar</option>
                    <option value={'line'}>Line</option>
                    <option value={'doughnut'}>Doughnut</option>
                </NativeSelect>
            </FormControl>
            {
                (state.chart === 'bar')
                ? bar()
                : (state.chart === 'line')
                ? line()
                : doughnut()
            }
            
        </div>
    )
}

export default ChartSection