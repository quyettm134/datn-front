import React from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ImageSlider from './ImageSlider';
import slider from "../../assets/images/slider.png";
import productdetails1 from "../../assets/images/productdetails1.png";
import productdetails2 from "../../assets/images/productdetails2.png";
import productdetails3 from "../../assets/images/productdetails3.png";
import productdetails4 from "../../assets/images/productdetails4.png";
import productdetails5 from "../../assets/images/productdetails5.png";

export default function Homepage() {
  const slides = [
    { url: slider, title: "beach" },
    { url: productdetails2, title: "boat" },
    { url: productdetails3, title: "forest" },
    { url: productdetails4, title: "city" },
    { url: productdetails5, title: "italy" },
  ];

  const containerStyles = {
    width: "100%",
    height: "100%",
    margin: "0 auto",
  };

  return (
      <div className='homepage'>
        <Header />
        <div style={containerStyles}>
          <ImageSlider slides={slides} />
        </div>
        <Footer />
      </div>
    )
}