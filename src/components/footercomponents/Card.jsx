import React from 'react';
import './card.css';
import { Link } from 'react-router-dom';

const Card = () => {
  return (
      <div className="footer-card gradient__card-reverse ">

        <div className="footer-card-content ">
            <div className="footer-card_heading heading__sm">Let’s try our service now!</div>
            <div className="footer-card_text text__lg text__grey">Everything you need to accept card payments and grow your business anywhere on the planet.</div>
        </div>

        <div className="footer-card-button">
        <Link to='/auth' style={{ textDecoration: 'none' }}><button className=" footer-cbutton custom__button">Get Started</button></Link>    
        </div>
      </div>
    
  )
}

export default Card
