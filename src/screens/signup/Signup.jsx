import React, { useState } from 'react'

const Signup = () => {

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[num, setNum] = useState('');
    const[pass, setPass] = useState('');

    const signupdata = {username:{name}, useremail:{email}, usernum:{num}, userpass:{pass} };

   
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
                        <input type="text" placeholder='Name' value={name} onChange={(e) => {
                            e.preventDefault();
                            setName(e.target.value);
                        }} />
                        <br />
                        <input type="email" placeholder='Email' value={email} onChange={(e) => {
                            e.preventDefault();
                            setEmail(e.target.value);
                        }} />
                        <br />
                        <input type="number" placeholder='Mobile Number' value={num} onChange={(e) => {
                            e.preventDefault();
                            setNum(e.target.value);
                        }}  />
                        <br />
                        <input type="password" placeholder='Password' value={pass} onChange={(e) => {
                            e.preventDefault();
                            setPass(e.target.value);
                        }}  />
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