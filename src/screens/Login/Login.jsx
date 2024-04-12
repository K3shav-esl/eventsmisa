import React from 'react'
import './Login.css'
import Google from '../../assets/photos/google.png'

const Login = () => {
    return (
        <div className='container'>
            <br/>
            <div className='login '>
                <div className='login-headers'>
                    <div className='login-h1'>
                        Welcome to
                    </div>
                    <div className='login-h2'>
                        Events Misa
                    </div>
                </div>
                <br />
                <div className='login-desc1'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci venenatis luctus vitae viverra accumsan augue risus. Vulputate orci amet
                </div>

                <div className='login-input-box'>
                    <input type="email" placeholder='Email' />
                    <br />
                    <input type="password" placeholder='Password' />
                </div>

                <button className='login-btn'>
                    Login
                </button>
                <br />

                <section>
                    <div>
                        Don't have an account?
                        <a className='px-2'>
                            Sign up
                        </a>
                    </div>
                    <div style={{
                        marginTop: 10,
                        marginBottom: 15
                    }}>
                        or
                    </div>
                    <div className='login-google-box'>
                        <div className='login-google'>
                            <img src={Google} className='google-icon'
                            />
                            Continue with google
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Login