import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import NavbarComp from '../Navbar/NavbarComp'
import EmployeeService from '../Services/EmplyeeService'
import editIcon from '../Images/editIcon.png'
import deleteIcon from '../Images/deleteicon.jpg'
import "./Admin.css";

const ListEmployee = () => {

    const [employees, setEmployees] = useState([])
    useEffect(() => {
        EmployeeService.getAllEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response.data)
        }).catch(error => {
            console.log(error);
        })

    }, [])

    const deleteEmployee = (employeeId) => {
        console.log(employeeId)
    }

    return (
        <Fragment>
            <div className='adminbody'>
                <NavbarComp
                    link1="Home"
                    link2="AboutUs"
                    link3="Events"
                    link4="Logout" />

                <div className="cont">
                    <h3 className="text-center">List Of Emplyees</h3>
                    <Link to="/add-employee" className="addbtn btn btn-primary mb-3">Add Employee</Link>
                    <table className="table">
                        <thead>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Job Role</th>
                            <th>Phone Number</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </thead>
                        <tbody>
                            {
                                employees.map(
                                    employee =>
                                        <tr key={employee.employee_id}>
                                            <td data-label="ID">{employee.employee_id}</td>
                                            <td data-label="First Name">{employee.firstName}</td>
                                            <td data-label="Last Name">{employee.lastName}</td>
                                            <td data-label="Job Role">{employee.roleId}</td>
                                            <td data-label="Phone Number">{employee.phone_no}</td>
                                            <td data-label="Address">{employee.address}</td>
                                            <td data-label="Actions">
                                                <div>
                                                    <Link to={`/edit-employee/${employee.employee_id}`}><img src={editIcon} className='editIcon' alt='edit' /></Link>
                                                    <Link onClick={() => deleteEmployee(employee.employee_id)}><img src={deleteIcon} className='editIcon' alt='edit' /></Link>
                                                </div>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </Fragment>
    )
}

export default ListEmployee