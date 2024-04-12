import React from 'react'
import './Login.css'

const Login = () => {
    return (
        <div className='login p-5'>
            <div className='login-headers'>
                <div className='login-h1'>
                    Welcome to
                </div>
                <div className='login-h2'>
                    Events Misa
                </div>
            </div>
            <div className='login-desc1'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci venenatis luctus vitae viverra accumsan augue risus. Vulputate orci amet
            </div>

            <div>
                <input type="email" />
                <input type="password" />
            </div>

            <button>
                Login
            </button>
            <div>
                Don't have an account?
                <a>
                    Sign up
                </a>
            </div>
            <div>
                or
            </div>
            <div>
                Continue with google
            </div>
        </div>
    )
}

export default Login