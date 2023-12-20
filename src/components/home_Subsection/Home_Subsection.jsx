import React from 'react';
import './home_Subsection.css';
import AnimatedNumbers from "react-animated-numbers";

const Home_Subsection = () => {
  return (
    <div className='section__padding home_subsection neutral__bg'>

      <div className="home_subsection-item">
        <span className="number_represent">
          
        <AnimatedNumbers
        animateToNumber={3800}
        fontStyle={{ fontSize: 32 }}
        configs={(number, index) => {
          return { mass: 1, tension: 230 * (index + 1), friction: 140 };
        }}
      ></AnimatedNumbers>+
          
          </span>
        <span className="text__lg text__gradient text_represent"> USER ACTIVE</span>
      </div>

      <div className="home_subsection-item">
        <span className="number_represent">
        <AnimatedNumbers
        animateToNumber={230}
        fontStyle={{ fontSize: 32 }}
        configs={(number, index) => {
          return { mass: 1, tension: 230 * (index + 1), friction: 140 };
        }}
      ></AnimatedNumbers>
        </span>
        <span className="text__lg text__gradient text_represent"> TRUSTED BY COMPANY</span>
      </div>

      <div className="home_subsection-item">
        <span className="number_represent">$<AnimatedNumbers
        animateToNumber={500}
        fontStyle={{ fontSize: 32 }}
        configs={(number, index) => {
          return { mass: 1, tension: 230 * (index + 1), friction: 140 };
        }}
      ></AnimatedNumbers>M+</span>
        <span className="text__lg text__gradient text_represent"> TRANSACTION</span>
      </div>

    </div>
  )
}

export default Home_Subsection;
