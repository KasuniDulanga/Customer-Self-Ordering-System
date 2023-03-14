import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../Services/EmplyeeService';
import {EyeInvisibleOutlined ,EyeOutlined } from '@ant-design/icons';
import classes from"./Admin.module.css";


export const AddEmployee = () => {
    const [visibility, setVsibility] = useState(true);
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [phone_no, setPhoneNo] = useState('')
    const [roleId, setRoleId] = useState('')
    const navigate = useNavigate();
    const { id } = useParams();

    // perform both save and update employee details
    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        const employee = { firstName, lastName, email, password, address, phone_no, roleId }


        // if id contains value make update employee REST API
        if (id) {
            EmployeeService.updateEmployee(id, employee).then((response) => {
                navigate('/admin')
            }).catch(error => {
                console.log(error)
            })
        }

        else {

            EmployeeService.createEmployee(employee).then((response) => {
                console.log(response.data)
                navigate('/admin');

            }).catch(error => {
                console.log(error)
            })

        }

    }

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then((response) => {
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setEmail(response.data.email);
            setPassword(response.data.password);
            setRoleId(response.data.roleId);
            setAddress(response.data.address);
            setPhoneNo(response.data.phone_no);



        }).catch(error => {
            console.log(error)
        })

    }, [id])

    const buttonSubmitOrUpdate = () => {
        if (id) {
            return <button className="btn btn-success" onClick={(e) => saveOrUpdateEmployee(e)} >Update </button>
        }
        else {
            return <button className="btn btn-success" onClick={(e) => saveOrUpdateEmployee(e)} >Submit </button>
        }
    }

    const title = () => {
        if (id) {
            return <h2 className='text-center'>Update Employee</h2>
        }
        else {
            return <h2 className='text-center'>Add New Employee</h2>
        }
    }
    return (
        <div className={classes.addemployeebody}>
            <br /><br />
            <div className={classes.addemployee}>
                <div className="row">
                    <div id={classes.cardform} className={"col-md-6 offset-md-3 offset-md-2"}>
                    {/* <div className="cardform col-md-6 offset-md-3 offset-md-2"> */}
                        {
                            title()
                        }

                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label"> First Name :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter first name"
                                        name="firstName"
                                        className="form-control"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        required
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Last Name :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter last name"
                                        name="lastName"
                                        className="form-control"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        required
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Email :</label>
                                    <input
                                        type="email"
                                        placeholder="Enter email"
                                        name="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                
                                    <label className="form-label"> Password :</label>
                                    <div className="input-area">
                                    <input
                                        type={visibility ? "password" : "text"}
                                        placeholder="Enter password"
                                        name="password"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    >
                                    </input>
                                    <span className='eye' onClick={() => setVsibility(!visibility)}>
                                        {
                                            visibility ? <EyeInvisibleOutlined /> : <EyeOutlined />
                                        }
                                    </span>
                                    </div>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Job Role : 1:Admin 2:Cook 3:Waiter</label>
                                    <input
                                        type="text"
                                        placeholder="Select job role id"
                                        name="jon_role"
                                        className="form-control"
                                        value={roleId}
                                        onChange={(e) => setRoleId(e.target.value)}
                                        required
                                    >

                                    </input>

                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Address :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Address"
                                        name="address"
                                        className="form-control"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Phone No :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter phone number"
                                        name="phoneNo"
                                        className="form-control"
                                        value={phone_no}
                                        onChange={(e) => setPhoneNo(e.target.value)}

                                    >
                                    </input>
                                </div>

                                {
                                    buttonSubmitOrUpdate()
                                }
                                <Link to="/admin" className="canclebtn btn btn-danger mx-3"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AddEmployee;
