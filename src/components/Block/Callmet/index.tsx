import React from 'react'

import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
} from 'reactstrap'

import { Doughnut } from 'react-chartjs-2'
import { Tablet } from 'react-feather'

const CallmetComponent = () => {
  // ** Chart Options
  const options: any = {
    maintainAspectRatio: false,
    cutout: 60,
    animation: {
      resize: {
        duration: 500,
      },
    },
    plugins: {
      legend: { display: false },
    },
  }

  // ** Chart data
  const data = {
    datasets: [
      {
        labels: ['LEADS', 'BOOKED'],
        data: [50, 50],
        backgroundColor: ['#17A762', '#E1FDEF'],
        borderWidth: 0,
        pointStyle: 'rectRounded',
      },
    ],
  }

  return (
    <>
      <Col md={4}>
        <h6>Campaign name | Calls</h6>
        <Card className='mt-4'>
          <CardBody>
            <div style={{ height: '275px' }}>
              <Doughnut data={data} options={options} height={275} />
            </div>
            <div className="d-flex justify-content-between mb-1">
              <div className="d-flex align-items-center">
                <Tablet size={17} className="text-warning" />
                <span className="fw-bold ms-75 me-25">Inbound</span>
                <span>- 50%</span>
              </div>
              <div className="d-flex align-items-center">
                <Tablet size={17} className="text-success" />
                <span className="fw-bold ms-75 me-25">Unique Inbound</span>
                <span>- 50%</span>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </>
  )
}

export default CallmetComponent
