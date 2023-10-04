import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../Assets/Dashboard.css'; // Import your Dashboard.css for styling

function Dashboard() {
  return (
    <div>
      <Header />
      <div className="dashboard-container">
        <h2>Dashboard</h2>

        
       <div className="dashboard-stats">
       <div className="stat-card">
            <h1>Total Products</h1>
            <p>1500</p>
          </div>
         
         <div className="stat-card">
            <h1>Revenue</h1>
            <p>$15,0000</p>
          </div>
          
        
          <div className="stat-card">
            <h1>Customers</h1>
            <p>50000</p>
          </div>
         
          </div>
         
          
        
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
