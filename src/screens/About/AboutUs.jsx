import React from 'react'
import './AboutUs.css';

import KartikPhotu from '../../assets/photos/kartik.jpg'
import NishantPhotu from '../../assets/photos/nishant.jpg'
const AboutUs = () => {
    return (
        <>
            <div className='login container '>
                <div className='login-headers mt-5'>
                    {/* <div className='login-h1'>
                    Welcome to
                </div> */}
                    <div className='about-h2 fs-1'>
                        About Us
                    </div>
                </div>
                <br />
                <div className='login-desc1'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor ultrices iaculis turpis tempus. Mauris commodo lorem faucibus quam elementum leo duis non mollis. Ultricies luctus fames diam, elementum. Turpis vitae cursus maecenas quis. Tristique sit duis dolor dolor. Ut sem mattis pellentesque sed aliquet sollicitudin. Magna in mus mauris etiam venenatis, ipsum sem. Iaculis leo nulla commodo nisl dignissim feugiat nunc, habitant vitae.            </div>

                <div className='founders-frame'>
                    <div className='founder-head'>
                        Meet the Founders.
                    </div>
                    <div className='founder-card-frame'>
                        <div className='founder-card'>
                            <div>
                                <img src={NishantPhotu} alt="" className='founder-img' />
                            </div>
                            <div className='founder-text'>
                                <div>Nishant Bhadu</div>
                                <div className='founder-sub'>Inherited bhadu</div>
                            </div>
                        </div>
                        <div className='founder-card'>
                            <div>
                                <img src={KartikPhotu} alt="" className='founder-img' />
                            </div>
                            <div className='founder-text'>
                                <div>Kullu Harami</div>
                                <div className='founder-sub'>Profesnul Harami</div>
                            </div>
                        </div>
                        <div className='founder-card'>
                            <div>
                                <img src={KartikPhotu} alt="" className='founder-img' />
                            </div>
                            <div className='founder-text'>
                                <div>Kullu Harami</div>
                                <div className='founder-sub'>Profesnul Harami</div>
                            </div>
                        </div>
                        <div className='founder-card'>
                            <div>
                                <img src={KartikPhotu} alt="" className='founder-img' />
                            </div>
                            <div className='founder-text'>
                                <div>Kullu Harami</div>
                                <div className='founder-sub'>Profesnul Harami</div>
                            </div>
                        </div>
                        
                    </div>
                    <div className='login-desc1'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor ultrices iaculis turpis tempus. Mauris commodo lorem faucibus quam elementum leo duis non mollis. Ultricies luctus fames diam, elementum. Turpis vitae cursus maecenas quis. Tristique sit duis dolor dolor. Ut sem mattis pellentesque sed aliquet sollicitudin. Magna in mus mauris etiam venenatis, ipsum sem. Iaculis leo nulla commodo nisl dignissim feugiat nunc, habitant vitae.            </div>
                </div>



            </div>
        </>
    )
}

export default AboutUs