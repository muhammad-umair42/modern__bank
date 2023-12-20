import React from 'react';
import './product.css'
import {bill,apple,google} from '../../assets';

const Product = () => {
  return (
    <div className='product__bg product section__padding' id='product'>
        <div className="product__img">
            <img src={bill} alt="bill" />
        </div>

        <div className="product__content">

            <div className="heading__sm product__content-heading ">Easily control your billing & invoicing.</div>
            <div className="product__content-text text__lg text__grey">Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</div>

            <div className="product__content-images">
                <div className="product__content-img">
                    <img src={apple} alt="apple" />
                </div>
                <div className="product__content-img">
                    <img src={google} alt="apple" />
                </div>
            </div>
           
        </div>
      
    </div>
  )
}

export default Product
