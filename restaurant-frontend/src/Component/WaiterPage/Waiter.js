import React, { Fragment } from 'react'
import Nav from '../EmployeeNav/Navpage';
import WaiterPage from './WaiterPage';

export default function Waiter() {
  return (
    <Fragment>
        <Nav/>
        <WaiterPage/>
    </Fragment>
  )
}
