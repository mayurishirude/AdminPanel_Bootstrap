import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import {  ToastContainer, toast } from 'react-toastify';

const SignUp = () => {

    const [id, setID] = useState("");
    const [fullName, setFullName] = useState('');
    // const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const proceedSignUp = (e) => {
        e.preventDefault();
        let regobj = { fullName, id, password };
        // console.log(regobj);
        fetch("http://localhost:8000/user", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(regobj)
        }).then((res) => {
            toast.success('Sign Up Successfully.');
            navigate('/');
        }).catch((err) => {
            toast.error('Failed.' + err.message);
        });

        if (validate()) {
            console.log('');
        }
    }
    const validate = () => {
        let result = true;
        if (fullName === '' || fullName === null) {
            result = false;
            toast.warning('Please Enter Valid Fullname');
        }
        // if (userName === '' || userName === null) {
        //     result = false;
        //     toast.warning('Please Enter Valid Username');
        // }
        if (id === null || id === '') {
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
                <form onSubmit={proceedSignUp}>
                    <div className="card-body">
                        <h5 className="card-title">Sign In</h5>
                        <p className='form-text text-muted'>Please enter your Details:</p>
                        <hr className='hrw w-20' />
                        <div className='text-start'>

                            <div className="form-group m-2">
                                <label htmlFor="exampleInputEmail1">Full Name <span className='text-danger'>*</span></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputText1"
                                    aria-describedby="textHelp"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                />
                            </div>

                            <div className="form-group m-2">
                                <label htmlFor="exampleInputEmail1">Email Address <span className='text-danger'>*</span></label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    value={id}
                                    onChange={(e) => setID(e.target.value)}
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

                            <div className='text-center'>
                                <button type="submit" className="btn btn-success m-2">Sign Up</button>
                                <ToastContainer />
                                <p className='m-2'>You Already Have An Account?
                                    <Link to="/" className='text-decoration-none'>Sign In</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp