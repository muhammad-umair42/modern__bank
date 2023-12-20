import React from 'react';
import './partners.css';
import {airbnb,binance,coinbase,dropbox} from '../../assets';

const Partners = () => {
  return (
    <div className='partners'>
        
      <div className="item">
        <img src={airbnb} alt="item" />
      </div>
      <div className="item">
        <img src={binance} alt="item" />
      </div>
      <div className="item">
        <img src={coinbase} alt="item" />
      </div>
      <div className="item">
        <img src={dropbox} alt="item" />
      </div>

    </div>
  )
}

export default Partners
