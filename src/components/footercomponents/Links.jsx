import React from 'react';
import './Links.css';
import {logo} from '../../assets'
import { Link } from 'react-router-dom';

const Links = () => {
  return (
    <div className='links'>

        <div className="logo_details">
            <div className="logo__image">
                <img src={logo} alt="logo" />
            </div>
            <div className="logo_details-text text__lg text__grey">A new way to make the payments easy, reliable and secure.</div>
         </div>

         <div className="links__details">

            <div className="link__details-item">
                <div className="item__title">Useful Links</div>
                <div className="item__detail text__lg text__grey">Content</div>
                <div className="item__detail text__lg text__grey">How it Works</div>
                <div className="item__detail text__lg text__grey">Create</div>
                <div className="item__detail text__lg text__grey">Explore</div>
                <div className="item__detail text__lg text__grey">Terms & Services</div>
            </div>

            <div className="link__details-item">
                <div className="item__title">Community</div>
                <div className="item__detail text__lg text__grey">Help Center</div>
                <div className="item__detail text__lg text__grey">Partners</div>
                <div className="item__detail text__lg text__grey">Suggestions</div>
                <div className="item__detail text__lg text__grey">Blog</div>
                <div className="item__detail text__lg text__grey">Newsletters</div>
            </div>

            <div className="link__details-item">
                <div className="item__title">Partner</div>
                <div className="item__detail text__lg text__grey">Our Partner</div>
                <div className="item__detail text__lg text__grey">Become a Partner</div>
            </div>
         </div>
      
    </div>
  )
}

export default Links
