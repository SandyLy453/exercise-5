import styles from './VerticalChart.module.css'
import { Bar } from 'react-chartjs-2'

import {
    Chart as ChartJS,
    CategoryScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    LinearScale
} from 'chart.js'
import { useEffect, useState } from 'react'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function VerticalChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    });
    const [chartOption, setChartOption] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            datasets: [
                {
                    labels: 'Scale $',
                    data: [453, 345, 543, 534, 435, 504, 405],
                    borderColor: 'rgb(53, 162,235)',
                    backgroundColor: 'rgb(53,162, 235, 0.4)'
                }
            ]
        })

        setChartOption({
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: "Daily Revenue"
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
    }, [])

    return(
        <>
            <Bar data={chartData} options={chartOption} style={ {width: "500px", height: "300px"}}/>
        </>
    )
}