import React, { Component } from 'react'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Col } from 'reactstrap'
import { Chart } from 'react-google-charts'

const PerleadComponent = () => {

  const data = [
    ["Task", "Hours per Day"],
    ["Cost", 55],
    ["Revenue", 45], // CSS-style declaration
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

export default PerleadComponent