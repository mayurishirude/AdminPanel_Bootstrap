import React from 'react'
import { Link } from "react-router-dom";

function SignUp() {
    return (
        <div className='signin'>
            <div class="card">
                <div className="card-body">
                    <h5 className="card-title">Sign In</h5>
                    <p className='form-text text-muted'>Please enter your Details:</p>
                    <hr className='hrw w-20' />
                    <div className='text-start'>

                        <div className="form-group m-2">
                            <label htmlFor="exampleInputEmail1">Full Name</label>
                            <input type="text" className="form-control" id="exampleInputText1" aria-describedby="textHelp" />
                        </div>

                        <div className="form-group m-2">
                            <label htmlFor="exampleInputEmail1">Email Address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                        </div>

                        <div className="form-group m-2">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>

                        <div className='text-center'>
                            <Link to="/" className='text-decoration-none'>
                                <button type="submit" className="btn btn-success m-2">Sign Up</button>
                            </Link>
                            <p className='m-2'>You Already Have An Account?
                                <Link to="/" className='text-decoration-none'>Sign In</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp