import React from 'react';
import './clients.css'
import {people01,people02,people03,quotes} from '../../assets';

const Clients = () => {
  return (
    <div className='clients__bg section__padding clients' id='clients'>

      <div className="clients__content">

        <div className="clients__content-heading heading__sm">What people are saying about us</div>
        <div className="clients__content-text text__lg text__grey">Everything you need to accept card payments and grow your business anywhere on the planet.</div>

      </div>

      <div className="clients__cards">

        <div className="card">

          <div className="card_quotes-img">
            <img src={quotes} alt="quotes" />
          </div>

          <div className="card_text">Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</div>

          <div className="card_person">

            <div className="card_person-img">
              <img src={people03} alt="person1" />
            </div>

              <div className="card_person-info">
                <div className="card_person-info_name">Herman Jensen</div>
                <div className="card_person-info_position text__lg text__grey">Founder & Leader</div>
              </div>

          </div>

        </div>
        <div className="card">

          <div className="card_quotes-img">
            <img src={quotes} alt="quotes" />
          </div>

          <div className="card_text">Money makes your life easier. If you're lucky to have it, you're lucky.</div>

          <div className="card_person">

            <div className="card_person-img">
              <img src={people02} alt="person1" />
            </div>

              <div className="card_person-info">
                <div className="card_person-info_name">Steve Mark</div>
                <div className="card_person-info_position text__lg text__grey">Founder & Leader</div>
              </div>

          </div>

        </div>
        <div className="card">

          <div className="card_quotes-img">
            <img src={quotes} alt="quotes" />
          </div>

          <div className="card_text">It is usually people in the money business, finance, and international trade that are really rich.</div>

          <div className="card_person">

            <div className="card_person-img">
              <img src={people01} alt="person1" />
            </div>

              <div className="card_person-info">
                <div className="card_person-info_name">Kenn Gallagher</div>
                <div className="card_person-info_position text__lg text__grey">Founder & Leader</div>
              </div>

          </div>

        </div>
      </div>
       
    </div>
  )
}

export default Clients
