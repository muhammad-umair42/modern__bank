import React from 'react';
import './copyright.css';
import{instagram,twitter,facebook,linkedin} from '../../assets';

const Copyright = () => {
  return (
    <div className='copyright'>
      <div className='line'></div>
      <div className="c-contents">
        
        <div className="contents-text text__lg">2021 HooBank. All Rights Reserved.</div>

      <div className="c-icons">
        <div className="c-icon">
            <img src={instagram} alt="icon" />
        </div>
        <div className="c-icon">
            <img src={facebook} alt="icon" />
        </div>
        <div className="c-icon">
            <img src={twitter} alt="icon" />
        </div>
        <div className="c-icon">
            <img src={linkedin} alt="icon" />
        </div>
      </div>

      </div>

    </div>
  )
}

export default Copyright
