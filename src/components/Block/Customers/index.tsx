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

const CustomersComponent = () => {
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
        data: [30, 70],
        backgroundColor: ['#E1FDEF', '#17A762'],
        borderWidth: 0,
        pointStyle: 'rectRounded',
      },
    ],
  }
  return (
    <>
      <Row className="mt-5">
        <Col>
          <h6>Campaign Name | New Customers vs Existing Customers</h6>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card>
            <CardBody>
              <div style={{ height: '275px' }}>
                <Doughnut data={data} options={options} height={275} />
              </div>
              <div className="d-flex justify-content-between mb-1">
                <div className="d-flex align-items-center">
                  <Tablet size={17} className="text-success" />
                  <span className="fw-bold ms-75 me-25">Existing </span>
                  <span> &nbsp;&nbsp;- 70%</span>
                </div>
                <div className="d-flex align-items-center">
                  <Tablet size={17} className="text-warning" />
                  <span className="fw-bold ms-75 me-25">New </span>
                  <span> &nbsp;&nbsp;- 30%</span>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default CustomersComponent
