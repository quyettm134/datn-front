import React from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default function Homepage() {
  return (
      <div className='homepage'>
        <Header />

        <Footer />
      </div>
    )
}