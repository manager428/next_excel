import { Line } from 'react-chartjs-2'
import { Chart, CategoryScale, registerables } from 'chart.js'
Chart.register(CategoryScale)
Chart.register(...registerables)

const WeekComponent = () => {
  const gridLineColor = '#D9D9D9'
  const labelColor = '#000000'
  const success = '#000'
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
        max: 400000,
        grid: {
          color: gridLineColor,
          borderColor: gridLineColor,
        },
        ticks: {
          stepSize: 100000,
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
      '8/28',
      '',
      '9/11',
      '',
      '9/25',
      '',
      '10/9',
      '',
      '10/23',
      '',
      '11/6',
      '',
      '11/20',
      '',
      '12/4',
      '',
      '12/18',
      '',
      '1/1',
      '',
      '1/15',
      '',
      '1/29',
      '',
      '2/12',
      '',
    ],
    datasets: [
        {
            label: 'Week',
            data: [168690, 130510, 155580, 311260, 166460, 154780, 127150, 162100, 111750, 173500, 132360, 167750, 14363, 102130, 130480, 218130, 106990, 117990, 113910, 133310, 165912, 152950, 165912, 152950, 112690, 38300],
            borderColor: '#72A9F8',
            backgroundColor: '#72A9F8',
            fill: true
        },
    ],
  }

  return (
    <>
        <Line data={data} options={options} />
    </>
  )
}

export default WeekComponent
