import React from 'react'
import { Link } from "react-router-dom";

function ForgetPw() {
    return (
        <div className='signin'>
            <div class="card">
                <div className="card-body">
                    <h5 className="card-title">Forget Password</h5>
                    <p className='form-text text-muted'>Enter your email address and we'll send you a link to reset your password.</p>
                    <hr className='hrw w-20' />
                    <div className='text-start'>

                        <div className="form-group m-2">
                            <label htmlFor="exampleInputEmail1">Email Address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                        </div>

                        <div className='text-center'>
                            <Link to="/restpassword" className='text-decoration-none'>
                                <button type="submit" className="btn btn-success m-2">Reset Password</button>
                            </Link>
                            <p className='m-2'>Need An Account?
                                <Link to="/signup" className='text-decoration-none'>Sign Up</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgetPw