import React, { Component } from 'react'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Col } from 'reactstrap'
import { Chart } from 'react-google-charts'

const CustomerComponent = () => {

  const data = [
    ["Task", "Hours per Day"],
    ["New Customers", 15],
    ["Existing Customers", 85], // CSS-style declaration
  ];
  
  const options = {
    title: "",
    pieHole: 1,
    is3D: true,
  };

  return (
    <>
        <Card className='chartBackground mt-4'>
          <CardBody>
            <Chart
              chartType="PieChart"
              width="100%"
              height="400px"
              data={data}
              options={options}
            />
          </CardBody>
        </Card>
    </>
  )
}

export default CustomerComponent
