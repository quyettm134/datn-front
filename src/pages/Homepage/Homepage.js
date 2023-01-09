import React from 'react';
import './Homepage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import homepage1 from '../../assets/images/homepage1.png';

export default function Homepage() {
  return (
      <>
        <Header />
        <img src={homepage1} alt='homepage1' className='homepage1'/>
        <Footer />
      </>
    )
}