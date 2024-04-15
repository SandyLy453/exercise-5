import styles from './PieChart.module.css'
import { Pie } from 'react-chartjs-2'

import {
    Chart as ChartJS,
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'
import { useEffect, useState } from 'react'

ChartJS.register(
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
)

export default function PieChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    });
    const [chartOption, setChartOption] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
                {
                    label: '# of vote',
                    data: [453, 543, 534, 435, 504, 405],
                    borderColor: [
                        'rgb(53,162, 235)',
                        'rgb(184, 192, 255)',
                        'rgb(255, 214, 221)',
                        'rgb(253, 249, 216)',
                        'rgb(208, 152, 234)',
                        'rgb(247, 175, 157)'
                    ],
                    backgroundColor: [
                        'rgb(53,162, 235, 0.4)',
                        'rgb(184, 192, 255, 0.4)',
                        'rgb(255, 214, 221, 0.4)',
                        'rgb(253, 249, 216, 0.4)',
                        'rgb(208, 152, 234, 0.4)',
                        'rgb(247, 175, 157, 0.4)'
                    ]
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
            maintainAspectRatio: true,
            responsive: true
        })
    }, [])

    return(
        <>
            <Pie data={chartData} options={chartOption} style={ {width: "500px", height: "300px"}}/>
        </>
    )
}


