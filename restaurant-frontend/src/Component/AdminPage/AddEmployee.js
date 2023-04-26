import React, { useState, useEffect, Fragment } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../Services/EmplyeeService';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import classes from "./Admin.module.css";
import { ToastContainer, toast } from 'react-toastify';



export const AddEmployee = () => {
    const [visibility, setVsibility] = useState(true);
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [phone_no, setPhoneNo] = useState('')
    const [roleName, setRoleName] = useState("");
    const [role, setRole] = useState([{ 'roleName': '', 'role_id': '' }]);
    const navigate = useNavigate();
    const { id } = useParams(); //retrive id from the URL

    const handleChange = (event) =>{
        setRoleName(event.target.value);
    }
    // perform both save and update employee details
    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        const employee = { firstName, lastName, email, password, address, phone_no, roleName}

        if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || password.trim() === '' || phone_no.trim() === '' || roleName.trim() === '') {
            toast.error("All Details are required !!", {
                position: toast.POSITION.TOP_CENTER
            });
        }

        else {
            // if id contains value make update employee REST API
            if (id) {
                EmployeeService.updateEmployee(id, employee).then((response) => {
                    navigate(-1)
                }).catch(error => {
                    console.log(error)
                })
            }

            else {

                EmployeeService.createEmployee(employee).then((response) => {
                    console.log(response.data)
                    navigate(-1);

                }).catch(error => {
                    console.log(error)
                })

            }
        }
    }

    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch('http://localhost:8080/api/role');
            const newdata = await response.json();
            setRole(newdata);
            console.log(newdata);
        }
        fetchData();
  
        // const interval = setInterval(() => {
        EmployeeService.getEmployeeById(id).then((response) => {
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setEmail(response.data.email);
            setPassword(response.data.password);
            // setRoleId(response.data.role_id);
            setAddress(response.data.address);
            setPhoneNo(response.data.phone_no);
            setRoleName(response.data.roleName)



        }).catch(error => {
            console.log(error)
        })

        //   }, 1000);

        //   return () => clearInterval(interval);

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
            return <h3 className='text-center'>Update Employee</h3>
        }
        else {
            return <h3 className='text-center'>Add New Employee</h3>
        }
    }
    return (
        <Fragment>
            <ToastContainer />
            <div className={classes.addemployeebody}>
                <div className={classes.addemployee}>
                    <div className="row">
                        <div id={classes.cardform} className="col-md-6 offset-md-3 offset-md-2">
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
                                    <br></br>
                                    <div className="form-group mb-2">

                                        <label className="form-label"> Password :</label>

                                        <li className={classes.input1}>
                                            <input
                                                type={visibility ? "password" : "text"}
                                                placeholder="Enter password"
                                                name="password"
                                                className="form-control"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            >
                                            </input></li>

                                        <li style={{ display: "inline-block", paddingLeft: "1rem" }} ><span className='eye' onClick={() => setVsibility(!visibility)}>
                                            {
                                                visibility ? <EyeInvisibleOutlined /> : <EyeOutlined />
                                            }
                                        </span></li>


                                    </div>
                                    <br></br>
                              
                                    <div className="form-group mb-2">
                                        <label className="form-label"> Select Job Role</label>
                                        <select className='form-control' value={roleName} onChange={handleChange}>
                                            <option>Choose role</option>
                                            {role.map(rolelist => (
                                                <option value={rolelist.roleName} key={rolelist.role_id}>{rolelist.roleName}</option>
                                            ))}
                                        </select>


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
                                            required
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
                                            required

                                        >
                                        </input>
                                    </div>
                                    <br></br>
                                    {
                                        buttonSubmitOrUpdate()
                                    }
                                    <Link to={-1} className="canclebtn btn btn-danger mx-3"> Cancel </Link>
                                     <button type="button" class="btn btn-primary" style={{width : "120px" ,height:"120px", color:"black", fontSize:"larger"}}>clear</button>
                                </form>
                                <br></br>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </Fragment>
    )
}

export default AddEmployee;
