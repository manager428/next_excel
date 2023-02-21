import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import {
    Row,
    Col
} from 'reactstrap'

const MetricsCompoent = () => {
  return (
    <>
      <Row className="mt-5">
        <Col>
          <h6>COMPANY METRICS</h6>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col
          md={2}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div className="fontSize12">TOTAL SALES</div>
          <h4 className="mt-3 fontSize26">$11,492</h4>
        </Col>
        <Col
          md={2}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div className="fontSize12">CLOSED AVG.SALE</div>
          <h4 className="mt-3 fontSize26">$1,793</h4>
        </Col>
        <Col
          md={2}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div className="fontSize12">COMPLETED REVENUE</div>
          <h4 className="mt-3 fontSize26">$13,065</h4>
        </Col>
        <Col
          md={2}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div className="fontSize12">OPPORTUNITY JOB AVG.</div>
          <h4 className="mt-3 fontSize26">$1,188</h4>
        </Col>
        <Col
          md={2}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div className="fontSize12">NON-JOB REVENUE</div>
          <h4 className="mt-3 fontSize26">$0</h4>
        </Col>
        <Col
          md={2}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div className="fontSize12">ADJ.REVENUE</div>
          <h4 className="mt-3 fontSize26">$0</h4>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={3} className="d-flex flex-column justify-content-center">
          <div className="d-flex justify-content-between">
            <div className="fontSize12">CALL BOOKING RATE</div>
            <h4>42%</h4>
          </div>
          <div className="mt-3 fontSize26">
            <ProgressBar now={42} label={`${42}%`} visuallyHidden />
          </div>
        </Col>
        <Col md={3} className="d-flex flex-column justify-content-center">
          <div className="d-flex justify-content-between">
            <div className="fontSize12">TOTAL CONVERSION RATE</div>
            <h4>73%</h4>
          </div>
          <div className="mt-3 fontSize26">
            <ProgressBar now={73} label={`${73}%`} visuallyHidden />
          </div>
        </Col>
        <Col
          md={2}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div className="fontSize12">CUSTOMER SATISFACTION</div>
          <h4 className="mt-3 fontSize26">5</h4>
        </Col>
        <Col
          md={2}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div className="fontSize12">TOTAL CANCELLATIONS</div>
          <h4 className="mt-3 fontSize26">1</h4>
        </Col>
        <Col
          md={2}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div className="fontSize12">MEMBERSHIPS CONVERTED</div>
          <h4 className="mt-3 fontSize26">1</h4>
        </Col>
      </Row>
    </>
  )
}

export default MetricsCompoent
