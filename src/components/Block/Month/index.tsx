import { Bar, Line } from 'react-chartjs-2'
import { Chart, CategoryScale, registerables } from 'chart.js'
Chart.register(CategoryScale)
Chart.register(...registerables)

const MonthComponent = () => {
  const gridLineColor = '#D9D9D9'
  const labelColor = '#000000'
  const success = '#72A9F8'
  // ** Chart Options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 500 },
    scales: {
      x: {
        grid: {
          color: gridLineColor,
          borderColor: gridLineColor,
        },
        ticks: { color: labelColor },
      },
      y: {
        min: 0,
        max: 1000000,
        grid: {
          color: gridLineColor,
          borderColor: gridLineColor,
        },
        ticks: {
          stepSize: 500000,
          color: labelColor,
        },
      },
    },
    plugins: {
      legend: { display: false },
    },
  }

  // ** Chart data
  const data = {
    labels: [
      'SEP',
      'OCT',
      'NOV',
      'DEC',
      'JAN',
      'FEB',
      'MAR',
      'APR',
      'MAY',
      'JUN',
      'JUL',
      'AUG',
      'SEP',
      'OCT',
      'NOV',
      'DEC',
      'JAN',
      'FEB',
    ],
    datasets: [
      {
        maxBarThickness: 15,
        backgroundColor: success,
        borderColor: 'transparent',
        borderRadius: { topRight: 0, topLeft: 0 },
        data: [550000, 600000, 540000, 540000, 560000, 500000, 650000, 700000, 650000, 660000, 680000, 670000, 680000, 570000, 550000, 570000, 560000, 260000],
      },
    ],
  }

  return (
    <>
        <Bar data={data} options={options} height={270} />
    </>
  )
}

export default MonthComponent
