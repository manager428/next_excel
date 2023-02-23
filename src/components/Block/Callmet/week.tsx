import React from 'react'
import { Line } from 'react-chartjs-2'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardSubtitle,
  Col,
} from 'reactstrap'

const WeekCallComponent = () => {
  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: { top: -20 },
    },
    scales: {
      x: {
        grid: {
          color: 'transparent',
          borderColor: '',
        },
        ticks: { color: '#9F9DA8' },
      },
      y: {
        min: 0,
        max: 400,
        grid: {
          color: 'transparent',
          borderColor: '',
        },
        ticks: {
          stepSize: 100,
          color: '#9F9DA8',
        },
      },
    },
    plugins: {
      legend: {
        align: 'start',
        position: 'top',
        labels: {
          padding: 30,
          boxWidth: 9,
          color: '#9F9DA8',
          usePointStyle: true,
        },
      },
    },
  }

  // ** Chart data
  const data = {
    labels: [
      '11/7',
      '11/14',
      '11/21',
      '11/28',
      '12/5',
      '12/12',
      '12/19',
      '12/26',
      '1/2',
      '1/9',
      '1/16',
      '',
    ],
    datasets: [
      {
        fill: true,
        tension: 0,
        label: 'Inbound',
        pointRadius: 0.5,
        pointHoverRadius: 5,
        pointStyle: 'circle',
        backgroundColor: '#3366CC',
        pointHoverBorderWidth: 5,
        borderColor: 'transparent',
        pointHoverBorderColor: '#fff',
        pointBorderColor: 'transparent',
        pointHoverBackgroundColor: '#3366CC',
        data: [40, 65, 55, 70, 60, 100, 98, 90, 120, 125, 140, 155],
      },
      {
        fill: true,
        tension: 0,
        label: 'Unique',
        pointRadius: 0.5,
        pointHoverRadius: 5,
        pointStyle: 'circle',
        pointHoverBorderWidth: 5,
        borderColor: 'transparent',
        pointHoverBorderColor: '#fff',
        pointBorderColor: 'transparent',
        backgroundColor: '#DC3912',
        pointHoverBackgroundColor: '#DC3912',
        data: [
          70, 100, 140, 110, 105, 160, 150, 125, 190, 200, 240,
          275,
        ],
      }
    ],
  }

  return (
    <>
      <CardBody>
        <div style={{ height: '400px' }}>
          <Line data={data} options={options} height={450} />
        </div>
      </CardBody>
    </>
  )
}

export default WeekCallComponent
