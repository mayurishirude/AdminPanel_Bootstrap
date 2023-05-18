import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import {  ToastContainer, toast } from 'react-toastify';


const SignIn = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const Login = (e) => {
        e.preventDefault();
        if (validate()) {
            // console.log('proceed');
            fetch("http://localhost:8000/user/"+ userName).then((res) => {
                return res.json();
            }).then((resp) => {
                if (Object.keys(resp).length === 0) {
                    toast.warning('Please Enter valid username or emailID');
                } else {
                    if (resp.password === password) {
                        navigate('/dashboard1')
                    } else {
                        toast.warning('Please Enter valid password');
                    }
                }

            }).catch((err) => {
                toast.error('Login failed' + err.message);
            })
        }
    }
    const validate = () => {
        let result = true;
        if (userName === '' || userName === null) {
            result = false;
            toast.warning('Please Enter Valid Username');
        }
        if (password === '' || password === null) {
            result = false;
            // alert.warning('Please Enter Valid Password');
            toast.warning('Please Enter Valid Password');
        }
        return result;
    }
    return (
        <div className='signin'>
            <div className="card">
                <form action="" onSubmit={Login}>
                    <div className="card-body">
                        <h5 className="card-title">Sign In</h5>
                        <hr className='hrw w-20' />
                        <div className='text-start'>
                            <div className="form-group m-2">
                                <label htmlFor="exampleInputEmail1">Email Address <span className='text-danger'>*</span></label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>

                            <div className="form-group m-2">
                                <label htmlFor="exampleInputPassword1">Password <span className='text-danger'>*</span></label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <div className='row m-2'>
                                <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6 text-start px-0'>
                                    <div className="form-group form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6 text-end px-0'>
                                    <Link to="/forgetpassword" className='text-decoration-none'>Forget Password</Link>
                                </div>
                            </div>

                            <div className='text-center'>
                                <button type="submit" className="btn btn-success m-2">Sign In</button>
                                <ToastContainer />
                                <p className='m-2'>Need An Account?
                                    <Link to="/signup" className='text-decoration-none'>Sign Up</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default SignIn
