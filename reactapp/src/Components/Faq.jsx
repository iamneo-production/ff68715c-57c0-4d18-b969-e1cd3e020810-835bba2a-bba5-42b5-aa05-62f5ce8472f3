import React from 'react';
import '../Assets/Faq.css'; // Import your FAQ.css for styling
import Header from './Header';
import Footer from './Footer';

function Faq() {
  return (
    <div>
      <Header />
      <div className="faq-container">
        <h2>Frequently Asked Questions</h2>
        <h3>Registration</h3>
        <div className="faq-item">
          <h4>How do I register?</h4>
          <p>You can register by clicking on the "Sign Up" link at the top right corner of the homepage. Please provide the information in the form that appears. You can review the terms and conditions, provide your payment mode details and submit the registration information.</p>
        </div>
        <div className="faq-item">
          <h4>Are there any charges for registration?</h4>
          <p>No. Registration on bigbasket.com is absolutely free.</p>
        </div>
        <h3>Account Related</h3>
        <div className="faq-item">
          <h4>What is My Account?</h4>
          <p>My Account is the section you reach after you log in at bigbasket.com. My Account allows you to track your active orders, credit note details as well as see your order history and update your contact details.
          </p>
        </div>
        <div className="faq-item">
          <h4>How do I reset my password?</h4>
           <p>You need to enter your email address on the Login page and click on forgot password. An email with a reset password will be sent to your email address. With this, you can change your password. In case of any further issues please contact our customer support team.</p>
        </div>
        <h3>Delivery Related</h3>
        <div className="faq-item">
         <h4>When will I receive my order?</h4>
         <p>Once you are done selecting your products and click on checkout you will be prompted to select delivery slot. Your order will be delivered to you on the day and slot selected by you. If we are unable to deliver the order during the specified time duration (this sometimes happens due to unforeseen situations).</p>
        </div>
        <div className="faq-item">
          <h3>How are the fruits and vegetables packaged?</h3>
         <p>Fresh fruits and vegetables are hand picked and hand cleaned. We ensure hygienic and careful handling of all our products.</p>
        </div>

        <div className="faq-item">
          <h3>How are the fruits and vegetables weighed?</h3>
         <p>Every fruit and vegetable varies a little in size and weight. While you shop we show an estimated weight and price for everything priced by kilogram. At the time of delivery we weigh each item to determine final price. This could vary by a maximum of one unit weight depending on the article. In case the weight of the product is lesser than what you ordered, you will pay correspondingly less.</p>
        </div>
        <h3>Others</h3>
        <div className="faq-item">
        <h3>Do you have offline stores?</h3>
       <p>No we are a purely internet based company and do not have any brick and mortar stores.</p>
      </div>
      <div className="faq-item">
          <h3>I am a corporate/ business. Can I place orders with emart.com?</h3>
         <p>Yes, we do bulk supply of products at special prices to institutions such as schools, restaurants and corporates. Please contact as at corporate@emart.com to know more.</p>
         
         
        </div>

      </div>
      <Footer/>
    </div>
  );
}

export default Faq;
