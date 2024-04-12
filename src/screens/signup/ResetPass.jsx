import React, { useState } from 'react';
import OtpInput from 'react-otp-input';


const ResetPass = () => {
    const [pass, setPass] = useState('');
    const [newPass, setNewPass] = useState('');
    return (
        <>
            <div className='container'>
                <br />
                <br />
                <div className='login '>
                    <div className='login-headers'>
                        <div className='login-h1'>
                            Reset Password
                        </div>
                    </div>
                    <br />
                    <div className='login-desc1'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci venenatis luctus vitae viverra accumsan augue risus. Vulputate orci amet
                    </div>
                    <div className='login-input-box'>
                        <input type="password" placeholder='New Password' value={pass} onChange={(e) => {
e.preventDefault();
setPass(e.target.value); 
                        }} />
                        <br />
                        <input type="password" placeholder='Confirm Password' value={newPass} onChange={(e) => {
e.preventDefault();
setNewPass(e.target.value); 
                        }} />
                    </div>
                </div>
                <div className='d-flex justify-content-center my-3'>
                    <button className='login-btn '>
                        Save
                    </button>
                </div>
            </div>
        </>
    )
}

export default ResetPass;