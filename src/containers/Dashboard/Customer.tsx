import React, { useState } from 'react'
import Customers from '@/components/Block/Customers'
import MonthCustomer from '@/components/Block/Customers/month'
import WeekCustomer from '@/components/Block/Customers/week'
import { Row, Col, Button, Nav, NavItem, NavLink, Card, TabContent, TabPane } from 'reactstrap'
import Styles from '@/styles/Month.module.scss'

const CustomerContainer = () => {
  const [active, setActive] = useState('1')

  const toggleTab = (tab: string) => {
    if (active !== tab) {
      setActive(tab)
    }
  }

  return (
    <>
      <Row className="mt-5">
        <Col md={6}>
          <div className="">
            <h6 className="m-0">Campaign Name | New Customers vs Existing Customers</h6>
          </div>
          <Customers />
        </Col>
        <Col md={6}>
          <div className="d-flex justify-content-end my-2">
            <Nav className="d-flex">
              <NavItem className="m-0">
                <NavLink
                  active={active === '1'}
                  onClick={() => toggleTab('1')}
                  className="m-0 p-0"
                >
                  <Button type="button" className={Styles.btnActive}>
                    Month Trend
                  </Button>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={active === '2'}
                  onClick={() => toggleTab('2')}
                  className="m-0 p-0"
                >
                  <Button type="button" className={Styles.btnInactive}>
                    Week Trend
                  </Button>
                </NavLink>
              </NavItem>
            </Nav>
          </div>
          <Card className="chartBackground">
            <TabContent className="mt-2" activeTab={active}>
              <TabPane tabId="1">
                <MonthCustomer />
              </TabPane>
              <TabPane tabId="2">
                <WeekCustomer />
              </TabPane>
            </TabContent>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default CustomerContainer
