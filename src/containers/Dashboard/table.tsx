import React, { useState } from 'react'
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

const TableContainer = () => {
  const [active, setActive] = useState('1')
  const [technician, setTechnician] = useState('metTable')

  const toggleTab = (tab: string) => {
    if (active !== tab) {
      setActive(tab)
    }
  }
  return (
    <>
      {/* <div>
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
      </div> */}
    </>
  )
}

export default TableContainer
