import React from 'react'

function SignIn() {
    return (
        <div className='signin'>
            <div class="card">
                <div className="card-body">
                    <h5 className="card-title">Sign In</h5>
                    <hr className='hrw w-20' />
                    <div className='text-start'>
                        <div className="form-group m-2">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                        </div>

                        <div className="form-group m-2">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>

                        <div className='row m-2'>
                            <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6 text-start px-0'>
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6 text-end px-0'>
                                <a href="/">Forget Password</a>
                            </div>
                        </div>

                        <div className='text-center'>
                            <button type="submit" className="btn btn-success m-2">Sign In</button>
                            <p className='m-2'>Need An Account? <a href="/">Sign Up</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignIn
