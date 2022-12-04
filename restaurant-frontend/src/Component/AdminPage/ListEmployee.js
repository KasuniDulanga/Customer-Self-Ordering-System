import React, { Fragment, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import NavbarComp from '../Navbar/NavbarComp'
import EmployeeService from '../Services/EmplyeeService'
import "./Admin.css";

const ListEmployee = () => {

    const [employees, setEmployees] = useState([])
    useEffect(() => {
        EmployeeService.getAllEmployees().then((response) =>{
            setEmployees(response.data)
            console.log(response.data)
        }).catch(error =>{
            console.log(error);
        })
            
    }, [])
    
    const deleteEmployee = (employeeId) =>{
        console.log(employeeId)
    }

    return (
        <Fragment>
        <NavbarComp/>
        <div className="container">
            <h2 className="text-center">List Of Emplyees</h2>
            <Link to="/add-employee" className ="addbtn btn btn-primary mb-3">Add Employee</Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>JobRole</th>
                    <th>Phone number</th>
                    <th>Address</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {
                        employees.map(
                            employee =>
                                <tr key={employee.employee_id}>
                                    <td>{employee.employee_id}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.job_role}</td>
                                    <td>{employee.phone_no}</td>
                                    <td>{employee.address}</td>
                                    <td>
                                        <Link className='btn btn-info' to={`/edit-employee/${employee.employee_id}`}>Update</Link>
                                        <Button className='btn btn-danger mx-2' onClick={() => deleteEmployee(employee.employee_id)}>Delete</Button>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>

            </table>
        </div>
        </Fragment>
    )
}

export default ListEmployee