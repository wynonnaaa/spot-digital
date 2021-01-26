import React from 'react';
import { NavLink } from 'react-router-dom';
import Image01 from '../images/row2-01.png';
import Image02 from '../images/row2-02.png';
import Image03 from '../images/row2-03.png';
import Image04 from '../images/row3.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

    AOS.init();

    return(
        <div className='home-wrapper'>

            <div className='hero-content'>
                <div className='hero-text'>
                    <h1>Boost Your Online Sales With Spot Digital</h1>
                    <p>Leverage the power of Performance Marketing to increase online sales and grow brand recognition.</p>
                </div>
                <NavLink to='/m/contact' className='yellow-btn'>
                    <p>Learn More</p>
                </NavLink>
            </div>

            <div className='row1 row'>
                <div className='row1-text'>
                    <h2>New To Performance Marketing?</h2>  
                    <p>Performance Marketing is a results-based strategy where brands only pay for successful sales by partnering with content creators. Partnering with content creators and publishers in your niche allows your brand to leverage their existing audience to generate sales and increase brand awareness.</p>
                </div>
                <NavLink to='/m/contact' className='yellow-outline-btn'>
                    <p>Get in Touch</p>
                </NavLink>
            </div>

            <div className='row2 row'>
                
                <div    data-aos='fade-up'
                        data-aos-once='true'
                        data-aos-duration="400"
                        data-aos-easing="ease-in-out">
                    <div className='row2-01 content'>
                        <div className='image'>
                            <img src={Image01} alt='Illustration' />
                        </div>
                        <div className='text'>
                            <h3>Only Pay For Successful Sales</h3>  
                            <p>In the last 5 years, performance marketing has grown over 10% year over year with no signs of slowing down. The main reason for this popularity is due to its scalable and risk-free nature. Performance Marketing allows brands to pay commission after a sale is made, <span className='emphasis'>so there is absolutely no risk involved.</span></p>
                        </div>
                    </div>
                </div>

                <div    data-aos='fade-up'
                        data-aos-once='true'
                        data-aos-duration="600"
                        data-aos-easing="ease-in-out">
                    <div className='row2-02 content' id='flipped'>
                        <div className='image'>
                            <img src={Image02} alt='Illustration' />
                        </div>
                        <div className='text'>
                            <h3>No Upfront Marketing Fees, Guaranteed Results</h3>  
                            <p>Unlike other marketing strategies, such as Search Engine Optimization (SEO) and Pay-per-click advertising (PPC), Performance Marketing does not require a high upfront budget. Additionally, ROI on marketing budget is fixed and guaranteed with Performance Marketing because it is predetermined.</p>
                        </div>
                    </div>
                </div>

                <div    data-aos='fade-up'
                        data-aos-once='true'
                        data-aos-duration="600"
                        data-aos-easing="ease-in-out">
                    <div className='row2-03 content'>
                        <div className='image'>
                            <img src={Image03} alt='Illustration' />
                        </div>
                        <div className='text'>
                            <h3>No More Ambiguity</h3>  
                            <p>Traditional marketing, such as coupon books and sponsorships, doesn’t allow brands to accurately track and measure results. On the other hand, Performance Marketing empowers brands to track sales and customer demographic data. This information allows for more effective and efficient marketing strategies.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row3 row'>
                <div className='text'>
                    <h3>How To Get Started</h3>
                    <ol>
                        <li>Contact Spot Digital to set up your account.</li>
                        <li>We will integrate your brand to our system to track and report sales data.</li>
                        <li>Our marketing managers will invite content creators in your niche to promote your brand.</li>
                        <li>We will work with you to optimize your campaigns and grow your partnerships to achieve the results you want.</li>
                    </ol>
                    <div className='button'>
                        <NavLink to='/m/contact' className='blue-btn'>
                            <p>Get Started</p>
                        </NavLink>
                    </div>
                </div>

                <div className='image'>
                    <img src={Image04} alt='Illustration' />
                </div>
            </div>
        </div>
    );

}

export default Home;