import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Assets/Contact.css'; // Import your Contact.css for styling
import Header from './Header';
import Footer from './Footer';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation checks
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }

    // Here, you can add your logic to handle form submission (e.g., sending the form data to a server).

    // After successfully handling the form submission, display a "thank you" message using toast
    toast.success("Thank you for your message!");

    // Clear the form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (<div>
    <div className="contact-container">
      <Header />

      <div className="contact-content">
        <h1><center>Contact Us</center></h1>
      
<br/>
<br/>
<h4>If you have any questions or inquiries, please fil the feedback form </h4>
<br/>
        <div className="form-box">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2 className='opinion-heading'>Feedback</h2>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input className="qw" type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input className="qw" type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="qw" id="message" name="message" rows="4" value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>

            <button type="submit" className='submit-button'>Submit</button>
          </form>
        </div>
      </div>
     

      <div className="contact-details">
        
      <ul><h2>Address</h2>
         
          <p>173 KG chavadi</p>
          <p>Coimbatore, Tamilnad 12345</p>
          </ul>
       

        
          <ul><h2>Email</h2>
          <p>Email: emart@example.com</p>
          </ul>
        

        
      <ul> <h2>Phone</h2>
          <p>Phone: +91 9791801107</p>
          </ul>
       
      </div>


      
      <ToastContainer />
      </div>
      <Footer /></div>
  );
}

export default Contact;
