import { Phone, Mail, MapPin, Package, Building2 } from "lucide-react";
import "./App.css";


const App = () => {
  return (
    <div className="app-container">
      

      {/* Header */}
      <header>
        
        <h1><img src="/img/logo.jpg" 
        alt="Company Logo" 
       
      />PINAKA INFRA</h1>
        
      </header>

      {/* Products Card */}
      <div className="card">
        <div className="card-content">
          <h2><Package className="icon" /> Our Products</h2>
          <ul>
            <li>DI Pipes (K-7, K-9 – 80mm to 1200mm)</li>
            <li>DI Fittings (Bends, Tees, Reducers, etc.)</li>
            <li>DI Double Flange Pipes & Fittings</li>
            <li>Valves (Gate, Sluice, Butterfly)</li>
            <li>GI & MS Pipes, HDPE Pipes, TMT Bars</li>
          </ul>
        </div>
      </div>

      {/* Applications Card */}
      <div className="card">
        <div className="card-content">
          <h2><Building2 className="icon" /> Applications</h2>
          <ul>
            <li>Water Supply Projects</li>
            <li>Irrigation</li>
            <li>Industries & Power Plants</li>
            <li>Fire Fighting Systems</li>
            <li>Sewerage & Drainage</li>
          </ul>
        </div>
      </div>

      {/* Contact Card */}
      <div className="card contact">
        <div className="card-content">
          <h2>Contact Us</h2>
          <p><Phone className="icon" /> +91 8146444549</p>
          <p><Mail className="icon" /> eshant@pinakainfra.in</p>
          <p><MapPin className="icon" /> Plot 9 (DHL SQUARE), Sector 22, IT Park, Panchkula, Haryana, 134109</p>
          <p className="gst">GSTIN: 06ESWPS2560H1Z3</p>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918146444549?text=Hello%20PINAKA%20INFRA,%20I%20want%20to%20enquire%20about%20DI%20pipes."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        Send Enquiry on WhatsApp
      </a>

    </div>
  );
};

export default App;
