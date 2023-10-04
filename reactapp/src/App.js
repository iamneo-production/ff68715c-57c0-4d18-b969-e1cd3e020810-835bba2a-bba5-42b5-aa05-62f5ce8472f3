import Login from './Pages/Login';
import Register from './Pages/Register';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Components/About';
import Homepage from './Pages/Homepage';
import Veg from './Pages/Veg';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Privacy from './Components/Privacy';
import Terms from './Components/Terms';
import Faq from './Components/Faq';
import Dashboard from './Components/Dashboard';
import Fruits from './Pages/Fruits';
import Oil from './Pages/Oil';
import Nuts from './Pages/Nuts';
import Grains from './Pages/Grains';
import Dairy from './Pages/Dairy';

function App() {
  return (
    
    <div className="App">
    <Router>
        <Routes>
          <Route path="/" element={<Navbar/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/footer" element={<Footer/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/homepage" element={<Homepage/>} />
          <Route path="/veg" element={<Veg/>} />
          <Route path="/oil" element={<Oil/>} />
          <Route path="/fruits" element={<Fruits/>} />
          <Route path="/nuts" element={<Nuts/>} />
          <Route path="/grains" element={<Grains/>} />
          <Route path="/dairy" element={<Dairy/>} />
          <Route path="/service" element={<Services/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/privacy" element={<Privacy/>} />
          <Route path="/terms" element={<Terms/>} />
          <Route path="/faq" element={<Faq/>} />
          <Route path="/dashboard" element={<Dashboard/>} />

        
        </Routes>
        </Router>
        </div>
    
  );
}

export default App;
