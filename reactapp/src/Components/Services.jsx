import React from 'react';
import { Link } from 'react-router-dom';
import '../Assets/Services.css'
import Header from './Header';
import Footer from './Footer';

function Services() {
    return (
      <div><Header/>
      <div className='services-container'>
        <div><center>
      <h1>Our Services</h1></center>
      <br/>
      <br/>
      <p>Welcome to E-mart, where we are dedicated to making your grocery shopping experience convenient, efficient, and enjoyable. We take pride in offering a wide range of services to meet your every need, from online ordering to home delivery. Explore our services below to discover how we can simplify your grocery shopping routine.</p>

      <h2>Our Services:</h2>
      <br/>
      <h3>Online Ordering:</h3>
     <p>We understand the value of your time. With our easy-to-use website or mobile app, you can browse our extensive product catalog, add items to your virtual cart, and place your order in just a few clicks. Say goodbye to long checkout lines and hello to the convenience of online shopping.</p>
     <h3>Home Delivery:</h3>
      <p>We offer doorstep delivery to ensure your groceries arrive at your convenience. Simply select your preferred delivery time during checkout, and our dedicated team will ensure your groceries are delivered to your doorstep, hassle-free.

      Curbside Pickup: Need your groceries sooner? Opt for our curbside pickup option. Place your order online, choose a pickup time that suits you, and we'll have your groceries ready and waiting for you when you arrive.</p>
      <h3>Fresh Produce:</h3>
      <p>Quality matters to us. Our commitment to providing fresh, high-quality produce is unwavering. From farm-fresh fruits and vegetables to premium cuts of meat and seafood, we source the finest products to fill your kitchen with the best.</p>
      <h3>Quality Products:</h3>
      <p>We take pride in curating a selection of products that meet our strict quality standards. You can trust that every item you purchase from us is of the highest quality, ensuring your satisfaction with every order.</p>

    </div>
    </div><Footer/></div>
  );
}

export default Services;
