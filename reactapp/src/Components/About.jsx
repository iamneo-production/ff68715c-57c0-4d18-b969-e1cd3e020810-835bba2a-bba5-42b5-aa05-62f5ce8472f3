import React from 'react';
import '../Assets/About.css';
import Header from './Header';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function About() {
  return (
    <div>
      <div className="about-container">
        <Header />
        <h2>About E-mart</h2>
        <h4>What is emart.com?</h4>
         <p>emart.com (Innovative Retail Concepts Private Limited) is India’s largest online food and grocery store. With over 18,000 products and over a 1000 brands in our catalogue you will find everything you are looking for. Right from fresh Fruits and Vegetables, Rice and Dals, Spices and Seasonings to Packaged products, Beverages, Personal care products, Meats – we have it all.
         Choose from a wide range of options in every category, exclusively handpicked to help you find the best quality available at the lowest prices. Select a time slot for delivery and your order will be delivered right to your doorstep, anywhere in Bangalore, Hyderabad, Mumbai, Pune, Chennai, Delhi, Noida, Mysore, Coimbatore, Vijayawada-Guntur, Kolkata, Ahmedabad-Gandhinagar, Lucknow-Kanpur, Gurgaon, Vadodara, Visakhapatnam, Surat, Nagpur, Patna, Indore and Chandigarh Tricity You can pay online using your debit / credit card or by cash / sodexo on delivery.
         We guarantee on time delivery, and the best quality!</p>
         <h5>Happy Shopping!</h5>
        <h4>
        Why should I use emart.com?
        </h4>
        <p>
        bigbasket.com allows you to walk away from the drudgery of grocery shopping and welcome an easy relaxed way of browsing and shopping for groceries. Discover new products and shop for all your food and grocery needs from the comfort of your home or office. No more getting stuck in traffic jams, paying for parking, standing in long queues and carrying heavy bags – get everything you need, when you need, right at your doorstep. Food shopping online is now easy as every product on your monthly shopping list, is now available online at bigbasket.com, India’s best online grocery store.
        </p>
       <h4>How do I order?</h4>
       <ul>
       <p>Browse emart.com for products
       or use the search feature</p>
       <p>Add item to your
       Shopping Basket</p>
       <p>Choose a convenient delivery
       time from our 4 Slots* a day</p>
       <p>Select suitable payment
       option(Cash, Sodexo, Credit Card)
       </p>
       <p>Your products will be home-delivered
       as per your order.</p>
       
       </ul>
       <h4>Where do we operate

       </h4>
       <p>Coimbatore</p>
        <Link to="/contact">Any Questions ask now!</Link>
      </div>
      <Footer />
    </div>
  );
}

export default About;
