import React from 'react'

const Signup = () => {
    return (
        <>
            <div className='container'>
                <br />
                <br />
                <div className='login '>
                    <div className='login-headers'>
                        <div className='login-h1'>
                            Creat a new account
                        </div>
                    </div>
                    <br />
                    <div className='login-desc1'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci venenatis luctus vitae viverra accumsan augue risus. Vulputate orci amet
                    </div>

                    <div className='login-input-box'>
                        <input type="text" placeholder='Name' />
                        <br />
                        <input type="email" placeholder='Email' />
                        <br />
                        <input type="number" placeholder='Mobile Number' />
                        <br />
                        <input type="password" placeholder='Password' />
                    </div>

                    <button className='login-btn'>
                        Sign Up
                    </button>
                    <br />

                    <section>
                        <div>
                            Already have an account?
                            <a className='px-2'>
                                Login
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Signup