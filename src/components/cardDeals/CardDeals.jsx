import React from 'react';
import './carddeals.css';
import {card} from '../../assets'

const CardDeals = () => {
  return (
    <div className='neutral__bg card_deals section__padding'>

        <div className="card_deals-content">
            <div className="content-heading ">Find a better card deal in few easy steps.</div>
            <div className="content-text text__lg text__grey">Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</div>
            <button className="custom__button">Get Started</button>
        </div>
        <div className="card_deals-img">
            <img src={card} alt="card" />
        </div>
      
    </div>
  )
}

export default CardDeals
