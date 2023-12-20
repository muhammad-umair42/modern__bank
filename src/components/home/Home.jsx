import React from 'react';
import './home.css';
import {discount,robot,} from '../../assets';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home__bg app__wrapper-home' id='home'>

        <div className="app__wrapper-home_content">

            <div className="discount gradient__card-reverse">
                <div className="discount__img">
                    <img src={discount} alt="discount" />
                </div>
                <div className="text__lg text__grey"><span className="special__text">20% </span>Discount For <span className="special__text">1 Month </span>Account</div>
            </div>

            <div className="heading__box">
                <div className="heading__box-content heading__lg">The Next <span className="text__gradient">Generation</span> Payment Method.</div>
                <Link to='/auth' style={{ textDecoration: 'none' }}><div className="heading__box-circle text__gradient text__lg">Get ↗  Started</div></Link>
                
            </div>

            <div className="home_content-text text__lg text__grey">Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</div>
        </div>

        <div className="app__wrapper-home_img">
            <img src={robot} alt="" />
        </div>
      
    </div>
  )
}

export default Home
