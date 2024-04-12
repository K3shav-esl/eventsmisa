import React from 'react'
import Navbar from '../../components/Navbar'
import './Home.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Home = () => {

    const fruits = ["Meeting", "Marriage", "Birthday", "Bachelor Party", "After Party", "Funeral Party"];

    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='my-3 d-flex '>
                    {
                        fruits.map((fruit) => (
                            <div key={fruit} style={{
                                background: '#F1E27E',
                                padding: '4px 10px',
                                borderRadius: 100,
                                marginRight: 10,
                                color: "#000",
                                fontWeight: 400,
                                fontSize: 14
                            }} >
                                {fruit}
                            </div>
                        ))
                    }
                </div>
                <br />
                <section>

                    <div className='restaurant-card'>
                        <div style={{ background: 'white', height: 140, borderRadius: '14px 14px 0 0' }}>

                        </div>
                        <div className='p-3'>
                            <div className='venue-name'>
                                <div>Srinidhi Banquet Hall</div>
                                <span className='mx-1'>|</span>
                                <div className='status'> Avaiable</div>
                            </div>
                            <div style={{
                                fontSize: 12,
                                fontWeight: 300,

                            }}>
                                ₹1200/person
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='my-2' style={{ fontSize: 12 }}>
                                    <LocationOnIcon style={{ fontSize: 18 }} /> Karnataka
                                </div>
                                <div>
                                    <button className='package-btn'>
                                        Select Package
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
            </div >
        </>
    )
}

export default Home