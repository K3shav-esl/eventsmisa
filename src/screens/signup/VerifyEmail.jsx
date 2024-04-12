import React, { useState } from 'react';
import OtpInput from 'react-otp-input';


const VerifyEmail = () => {
    const [otp, setOtp] = useState('');
    return (
        <>
            <div className='container'>
                <br />
                <br />
                <div className='login '>
                    <div className='login-headers'>
                        <div className='login-h1 mb-2 fs-4'>
                            Verify Email
                        </div>
                    </div>
                    <div className='my-3'>
                        Verification code sent to your

                        <span className='ms-2'
                            style={{ color: '#F1E27E' }}>
                            {'abc.xyz@gmail.com'}
                        </span>
                    </div>
                    <div className='login-h1 my-4 fs-6'>
                        Enter the code
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

export default VerifyEmail