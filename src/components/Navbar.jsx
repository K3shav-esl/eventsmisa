import React from 'react'
import './Navbar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';

const Navbar = () => {
    return (
        <div className='navbar-border'>
            <div className='container'>
                <div className='navbar-bg'>
                    <div className='navbar-h1'>
                        EVENTS MISA
                    </div>
                    <div>

                    </div>
                    <div className='d-flex align-items center'>
                        <div className='me-3'>
                            <PersonIcon />
                        </div>
                        <div>
                            <ShoppingCartIcon />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar