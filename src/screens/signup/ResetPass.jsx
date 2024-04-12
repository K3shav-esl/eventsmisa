import React, { useState } from 'react';
import OtpInput from 'react-otp-input';


const ResetPass = () => {
    const [otp, setOtp] = useState('');
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
                        <input type="password" placeholder='Password' />
                        <br />
                        <input type="password" placeholder='New Password' />
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