import { Bar, Line } from 'react-chartjs-2'
import { Chart, CategoryScale, registerables } from 'chart.js'
Chart.register(CategoryScale)
Chart.register(...registerables)

const PerleadComponent = () => {
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
      'Cost',
      'Revenue',
    ],
    datasets: [
      {
        maxBarThickness: 50,
        backgroundColor: success,
        borderColor: 'transparent',
        borderRadius: { topRight: 0, topLeft: 0 },
        data: [550000, 600000],
      },
    ],
  }

  return (
    <>
        <Bar data={data} options={options} height={270} />
    </>
  )
}

export default PerleadComponent
