import React from 'react';
import '../Assets/Privacy.css';
import Header from './Header';
import Footer from './Footer';

function Privacy() {
  return (
    <div><Header/>
    <div className="privacy-policy-container">
      <div className="close-button">
      </div>
      <h1>Privacy Policy</h1>
      <p>
        Welcome to our Privacy Policy page. This page contains important information regarding the
        collection, use, and disclosure of your personal data when you use our services.
      </p>
      <p>
        We are committed to protecting your privacy and ensuring that your personal information is handled securely.
        By using our services, you agree to the practices described in this Privacy Policy.
      </p>
      <h3>Information We Collect</h3>
      <p>
        We may collect various types of information from you when you use our services. This information may
        include:
      </p>
      <ul>
        <li>Your name, email address, and contact information.</li>
        <li>Information about your usage of our services.</li>
        <li>Device information, such as your IP address and browser type.</li>
      </ul>
      <h3>How We Use Your Information</h3>
      <p>
        We may use the information we collect from you for various purposes, including but not limited to:
      </p>
      <ul>
        <li>Providing and maintaining our services.</li>
        <li>Improving and personalizing your experience.</li>
        <li>Responding to your requests and inquiries.</li>
        <li>Analytics and research to better understand our users.</li>
        <li>Compliance with legal obligations.</li>
      </ul>
      <h3>Security of Your Information</h3>
      <p>
        We take the security of your personal information seriously and implement reasonable security measures to
        protect it from unauthorized access or disclosure.
      </p>
      <h3>Changes to This Privacy Policy</h3>
      <p>
        We may update this Privacy Policy from time to time to reflect changes in our practices or for other
        operational, legal, or regulatory reasons. We encourage you to review this policy periodically.
      </p>
      
    </div><Footer/></div>
  );
}

export default Privacy;
