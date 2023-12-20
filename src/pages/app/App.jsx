import React from 'react';
import './App.css';
import CardDeals from '../../components/cardDeals/CardDeals';
import Clients from '../../components/clients/Clients';
import Features from '../../components/features/Features';
import Home from '../../components/home/Home';
import Home_Subsection from '../../components/home_Subsection/Home_Subsection';
import Navbar from '../../components/navbar/Navbar';
import Product from '../../components/product/Product';
import Footer from '../../components/footer/Footer';

const App = () => {

  return (
   <div>
    <Navbar/>
    <Home/>
    <Home_Subsection/>
    <Features/>
    <Product/>
    <CardDeals/>
    <Clients/>
    <Footer/>
   </div>
  )
}

export default App
