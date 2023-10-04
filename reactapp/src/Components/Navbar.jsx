import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../Assets/Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {

  const navigate=useNavigate();
 
  return (
    <div className='home-container'>
    <Header/>
    
    <section className="featured-products">
        <h2>Choose the Category </h2>
        
          <div className="product-card"  onClick={() => navigate('/Veg')}>
            <img
              src="https://c4.wallpaperflare.com/wallpaper/663/737/291/vegetables-assorted-basket-wallpaper-preview.jpg"
              alt="Vegtables"
              className="product-image"
            />
            <h3>Vegtables</h3>
          </div>
          <div className="product-card" onClick={() => navigate('/Fruits')}>
            <img
              src="data:image/jpeg;base64,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"
              alt="Fruits"
              className="product-image"
            />
            <h3>Fruits</h3>
            
          </div>
          <div className="product-card" onClick={() => navigate('/Nuts')}>
            <img
              src="https://www.dorri.co.uk/wp-content/uploads/2018/09/raw_mixed_nuts.jpeg"
              alt="Nuts"
              className="product-image"
            />
            <h3>Nuts</h3>
            
          </div>
          <div className="product-card" onClick={() => navigate('/Dairy')}>
            <img
              src="https://m.economictimes.com/thumb/msid-75525090,width-1200,height-900,resizemode-4,imgsize-395786/dairy-products.jpg"
              alt="Dairy"
              className="product-image"
            />
            <h3>Dairy</h3>
            
          </div>
          <div className="product-card" onClick={() => navigate('/Grains')}>
            <img
              src="https://4.imimg.com/data4/WT/HN/MY-19032682/food-grains.jpg"
              alt="Food grains"
              className="product-image"
            />
            <h3>Food grains</h3>
            
          </div>
          <div className="product-card" onClick={() => navigate('/Oil')}>
            <img
              src="https://bimcbali.com/wp-content/uploads/2019/04/The-Truth-About-Cooking-Oils.jpg"
              alt="Food oil"
              className="product-image"
            />
            <h3>Food Oil</h3>
            
          </div>
          
          
          
          
       
      </section>
    
    
    <Footer/>
</div>
   
  );
}

export default Navbar;