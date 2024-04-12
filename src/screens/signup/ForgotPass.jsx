import React, { useState } from 'react';


const ForgotPass = () => {
    return (
        <>
            <div className='container'>
                <br />
                <br />
                <div className='login '>
                    <div className='login-headers'>
                        <div className='login-h1'>
                            Forgot Password
                        </div>
                    </div>
                    <br />
                    <div className='login-desc1'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci venenatis luctus vitae viverra accumsan augue risus. Vulputate orci amet
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <div className='login-input-box'>
                        <input type="email" placeholder='Email' />
                        <br />
                    </div>
                </div>
                <div className='d-flex justify-content-center my-3'>
                    <button className='login-btn'>
                        Send
                    </button>
                </div>
            </div>
        </>
    )
}

export default ForgotPass