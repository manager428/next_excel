import { useState } from 'react'
import Styles from '@/styles/Month.module.scss'
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
} from 'reactstrap'
import Revenue from '@/components/Block/Revenue'
import Month from '@/components/Block/Month'
import Week from '@/components/Block/Week'
import Metrics from '@/components/Block/Metrics'
import CallMet from './CallMet'
import Perlead from './Perlead'
import IncomeCall from './IncomeCall'
import Customers from './Customer'

const DashboardContainer = () => {
  const [active, setActive] = useState('1')

  const toggleTab = (tab: string) => {
    if (active !== tab) {
      setActive(tab)
    }
  }

  return (
    <>
      <Container>
        <Row>
          <Col md={4} sm={12}>
            <div className={`p-4 border rounded`}>
              <Revenue />
            </div>
          </Col>
          <Col md={8} sm={12}>
            <div className="border rounded p-4">
              <div className="d-flex justify-content-between align-items-center">
                <TabContent activeTab={active}>
                  <TabPane tabId="1">
                    <span className={Styles.monthText}>18 Month Trend</span>
                  </TabPane>
                  <TabPane tabId="2">
                    <span className={Styles.monthText}>26 Week Trend</span>
                  </TabPane>
                </TabContent>
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
              <TabContent className="mt-2" activeTab={active}>
                <TabPane tabId="1">
                  <Month />
                </TabPane>
                <TabPane tabId="2" className={Styles.height270}>
                  <Week />
                </TabPane>
              </TabContent>
            </div>
          </Col>
        </Row>
        <Metrics />
        <CallMet />
        <Perlead />
        <IncomeCall />
        <Customers />
      </Container>
    </>
  )
}

export default DashboardContainer
