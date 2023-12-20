import React from 'react'
import './features.css';
import {star,shield,send} from '../../assets';
import { Link } from 'react-router-dom';
const Features = () => {
  return (
    <div className='section__padding features__bg features' id='features'>

        <div className="features__content">
            <div className="heading__sm content-heading">You do the business, we'll handle the money.</div>
            <div className="text__lg text__grey content-text">With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</div>
          <Link to='/auth' style={{ textDecoration: 'none' }}> <button className="custom__button">Get Started</button></Link> 
        </div>

        <div className="features__cards">

            <div className="features__card">
                <div className="features__card-img">
                    <img src={star} alt="star" />
                </div>
                <div className="features__card-content">
                    <div className="card-content-title">Rewards</div>
                    <div className="card-content-text text__lg text__grey">The best credit cards offer some tantalizing combinations of promotions and prizes</div>
                </div>
            </div>

            <div className="features__card">
                <div className="features__card-img">
                    <img src={shield} alt="star" />
                </div>
                <div className="features__card-content">
                    <div className="card-content-title">100% Secured</div>
                    <div className="card-content-text text__lg text__grey">We take proactive steps make sure your information and transactions are secure.</div>
                </div>
            </div>

            <div className="features__card">
                <div className="features__card-img">
                    <img src={send} alt="star" />
                </div>
                <div className="features__card-content">
                    <div className="card-content-title">Balance Transfer</div>
                    <div className="card-content-text text__lg text__grey">A balance transfer credit card can save you a lot of money in interest charges.</div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Features
