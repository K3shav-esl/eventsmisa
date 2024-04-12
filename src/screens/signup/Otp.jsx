import React, { useState } from 'react';
import OtpInput from 'react-otp-input';


const Otp = () => {
    const [otp, setOtp] = useState('');
    return (
        <>
            <div className='container'>
                <br />
                <br />
                <div className='login '>
                    <div className='login-headers'>
                        <div className='login-h1'>
                            Enter OTP
                        </div>
                    </div>
                    <br />
                    <div className='login-desc1'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci venenatis luctus vitae viverra accumsan augue risus. Vulputate orci amet
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={4}
                        inputStyle={{
                            background: '#2f2e2e',
                            borderRadius: 11,
                            height: 50,
                            width: 47,
                            border: 'none'
                        }}
                        renderSeparator={<span>-</span>}
                        renderInput={(props) => <input {...props} />}
                    />
                </div>
                <div className='d-flex justify-content-center my-3'>
                    <button className='login-btn '>
                        Sign Up
                    </button>
                </div>
            </div>
        </>
    )
}

export default Otp