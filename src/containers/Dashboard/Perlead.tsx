import React from 'react'
import CallMet from '@/components/Block/Callmet'
import PerleadComponent from '@/components/Block/Perlead'
import { Row, Col, Button } from 'reactstrap'

const PerleadContainer = () => {
  return (
    <>
      <Row className="mt-5">
        <CallMet />
        <Col md={8}>
          <h6>Campaign Name | Cost Per lead | Revenue</h6>
          <div className='mt-4' style={{ height: '360px' }}>
            <PerleadComponent />
          </div>
        </Col>
      </Row>
    </>
  )
}

export default PerleadContainer
