import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from './logins/SignIn';
import SignUp from './logins/SignUp';
import ForgetPw from './logins/ForgetPw';
import ResetPw from './logins/ResetPw';
import Dashboard1 from './portals/Dashboard1';

function Main() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="signup" element={<SignUp />} />
                    <Route path="forgetpassword" element={<ForgetPw />} />
                    <Route path="restpassword" element={<ResetPw />} />
                    <Route path="dashboard1" element={<Dashboard1 />} />
                </Routes>
            </Router>
        </>
    )
}

export default Main