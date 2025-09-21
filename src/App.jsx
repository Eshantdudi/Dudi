import { Phone, Mail, MapPin, Package, Building2 } from "lucide-react";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 p-6 flex flex-col items-center">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-700">PINAKA INFRA</h1>
        <p className="text-gray-600 mt-2">
          Complete Ductile Iron Pipe Solutions
        </p>
      </header>

      {/* Products */}
      <div className="w-full max-w-2xl mb-6 shadow-lg bg-white rounded-2xl">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-4 flex items-center gap-2">
            <Package className="w-5 h-5" /> Our Products
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>DI Pipes (K-7, K-9, – 80mm to 1200mm)</li>
            <li>DI Fittings (Bends, Tees, Reducers, etc.)</li>
            <li>DI Double Flange Pipes & Fittings</li>
            <li>Valves (Gate, Sluice, Butterfly)</li>
            <li>GI & MS Pipes, HDPE Pipes, TMT Bars</li>
          </ul>
        </div>
      </div>

      {/* Applications */}
      <div className="w-full max-w-2xl mb-6 shadow-lg bg-white rounded-2xl">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-4 flex items-center gap-2">
            <Building2 className="w-5 h-5" /> Applications
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Water Supply Projects</li>
            <li>Irrigation</li>
            <li>Industries & Power Plants</li>
            <li>Fire Fighting Systems</li>
            <li>Sewerage & Drainage</li>
          </ul>
        </div>
      </div>

      {/* Contact */}
      <div className="w-full max-w-2xl mb-6 shadow-lg bg-white rounded-2xl">
        <div className="p-6 space-y-3">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            Contact Us
          </h2>
          <p className="flex items-center gap-2 text-gray-700">
            <Phone className="w-5 h-5 text-blue-600" /> +91 8146444549
          </p>
          <p className="flex items-center gap-2 text-gray-700">
            <Mail className="w-5 h-5 text-blue-600" /> eshant@pinakainfra.in
          </p>
          <p className="flex items-center gap-2 text-gray-700">
            <MapPin className="w-5 h-5 text-blue-600" /> Plot 9 (DHL SQUARE),
            Sector 22, IT Park, Panchkula, Haryana, 134109
          </p>
          <p className="text-gray-500 text-sm">GSTIN: 06ESWPS2560H1Z3</p>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918146444549?text=Hello%20PINAKA%20INFRA,%20I%20want%20to%20enquire%20about%20DI%20pipes."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-600 hover:bg-green-700 text-white rounded-2xl px-6 py-3 shadow-lg"
      >
        Send Enquiry on WhatsApp
      </a>
    </div>
  );
};

export default App;