import React from 'react';
import Card from '../footercomponents/Card';
import Copyright from '../footercomponents/Copyright';
import Links from '../footercomponents/Links';
import Partners from '../footercomponents/Partners';
import './footer.css'
const Footer = () => {
  return (
    <div className='section__padding neutral__bg footer'>
      <Partners/>
      <Card/>
      <Links/>
      <Copyright/>
    </div>
  )
}

export default Footer
