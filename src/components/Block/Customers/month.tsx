import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle, Col } from 'reactstrap'

const MonthCallComponent = () => {
  // ** Chart Options
  const options:any = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 500 },
    elements: {
      bar: {
        borderRadius: {
          topRight: 15,
          bottomRight: 15,
        },
      },
    },
    layout: {
      padding: { top: -4 },
    },
    scales: {
      x: {
        min: 0,
        grid: {
          drawTicks: false,
          color: '',
          borderColor: '',
        },
        ticks: { color: '#9F9DA8' },
      },
      y: {
        grid: {
          display: false,
          borderColor: '',
        },
        ticks: { color: '#9F9DA8' },
      },
    },
    plugins: {
      legend: {
        align: 'end',
        position: 'top',
        labels: { color: '#9F9DA8' },
      },
    },
  }

  // ** Chart Data
  const data = {
    labels: ['JAN', 'FEB', 'MAR ', 'APR', 'MAY'],
    datasets: [
      {
        maxBarThickness: 15,
        label: 'New Customers',
        backgroundColor: '#3366CC',
        borderColor: 'transparent',
        data: [710, 350, 580, 460, 120],
      },
      {
        maxBarThickness: 15,
        backgroundColor: '#DC3912',
        label: 'Existing Customers',
        borderColor: 'transparent',
        data: [430, 590, 510, 240, 360],
      },
    ],
  }

  return (
    <>      
        <CardBody>
          <div style={{ height: '400px' }}>
            <Bar data={data} options={options} height={400} />
          </div>
        </CardBody>
    </>
  )
}

export default MonthCallComponent
