import React from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import homepage1 from '../../assets/images/homepage1.png';
import homepage2 from '../../assets/images/homepage2.png';
import slider from '../../assets/images/slider.png';

export default function Homepage() {
  return (
      <>
        <Header />
        <img src={slider} alt='slider' className='slider'/>
        <img src={homepage1} alt='homepage1' className='homepage1'/>
        <Link to="/productdetails"><img src={homepage2} alt='homepage2' className='homepage2'/></Link>
        <Footer />
      </>
    )
}