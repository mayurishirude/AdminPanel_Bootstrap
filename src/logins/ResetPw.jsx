import React from 'react'
import { Link } from "react-router-dom";

function ResetPw() {
    return (
        <div className='signin'>
            <div class="card">
                <div className="card-body">
                    <h5 className="card-title">Reset Password</h5>
                    <p className='form-text text-muted'>Please enter your new password:</p>
                    <hr className='hrw w-20' />
                    <div className='text-start'>

                        <div className="form-group m-2">
                            <label htmlFor="exampleInputPassword1">New Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>

                        <div className="form-group m-2">
                            <label htmlFor="exampleInputPassword1">Confirm Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>

                        <div className='text-center'>
                            <Link to="/" className='text-decoration-none'>
                                <button type="submit" className="btn btn-success m-2">Set Password</button>
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

export default ResetPw