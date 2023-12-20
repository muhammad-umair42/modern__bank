import React, { useState } from 'react';
import './navbar.css';
import {logo} from '../../assets';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';


const Navbar = () => {

    const [hamburger,setHamburger] = useState(true);

  return (
    <div className='Navbar home__bg text__sm '>
        <div className="nav__wrapper">

            <div className="nav__logo">
                <img src={logo} alt="logo" />
            </div>

            <div className="nav__list">
                <ul className="nav__list-items">
                    <li className="nav__list-item"><a href='#home'>Home</a></li>
                    <li className="nav__list-item"><a href='#features'>Features</a></li>
                    <li className="nav__list-item"><a href='#product'>Product</a></li>
                    <li className="nav__list-item"><a href='#clients'>Clients</a></li> 
                    <li className="nav__list-item login"><Link to='/auth'>Login/Register</Link></li> 
                </ul>
            </div>

          

                <div className="nav__hamburger" onClick={()=> setHamburger(!hamburger)}>
                    {
                        hamburger ? <MenuIcon sx={{ fontSize: 35 }}/> : <CloseIcon sx={{ fontSize: 35 }}/>
                    }

                    {
                     !hamburger && (<div className="nav__ham-list slide-bottom">
                <ul className="nav__ham-list-items">
                    <li className="nav__ham-list-item"><a href='#home'>Home</a></li>
                    <li className="nav__ham-list-item"><a href='#features'>Features</a></li>
                    <li className="nav__ham-list-item"><a href='#product'>Product</a></li>
                    <li className="nav__ham-list-item"><a href='#clients'>Clients</a></li> 
                    <li className="nav__ham-list-item login"><Link to='/auth'>Login/Register</Link></li> 
                </ul>
                </div>)
                }
                </div>
                
           

        </div>

    </div>
  )
}

export default Navbar
