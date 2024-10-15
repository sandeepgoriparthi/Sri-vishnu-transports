import React, { useState } from 'react';
import { Truck, Phone, Mail, MapPin, Search, Package, Clock, Globe, BarChart } from 'lucide-react';

function App() {
  const [trackingNumber, setTrackingNumber] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-b from-svt-blue-50 to-svt-blue-100 flex flex-col">
      <header className="bg-gradient-to-r from-svt-blue-600 to-svt-blue-800 text-white p-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Truck className="w-8 h-8 mr-2 text-svt-blue-200" />
            <h1 className="text-2xl font-bold">SVT</h1>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#home" className="hover:text-svt-blue-200 transition duration-300">Home</a></li>
              <li><a href="#services" className="hover:text-svt-blue-200 transition duration-300">Services</a></li>
              <li><a href="#tracking" className="hover:text-svt-blue-200 transition duration-300">Tracking</a></li>
              <li><a href="#contact" className="hover:text-svt-blue-200 transition duration-300">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section id="home" className="bg-gradient-to-r from-svt-blue-500 to-svt-blue-700 text-white py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-5xl font-bold mb-4 text-svt-blue-100">Welcome to Sri Vishnu Transport</h2>
            <p className="text-xl mb-8 text-svt-blue-200">Your Futuristic Partner in Logistics</p>
            <a href="#contact" className="bg-white text-svt-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-svt-blue-100 transition duration-300 text-lg shadow-lg hover:shadow-xl">Get Started</a>
          </div>
        </section>

        <section id="tracking" className="py-16 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-svt-blue-800">Track Your Shipment</h2>
            <div className="max-w-2xl mx-auto flex">
              <input 
                type="text" 
                placeholder="Enter tracking number" 
                className="flex-grow p-3 border border-svt-blue-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-svt-blue-500"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
              />
              <button className="bg-svt-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-svt-blue-700 transition duration-300">
                <Search className="w-6 h-6" />
              </button>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 bg-gradient-to-b from-svt-blue-50 to-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-svt-blue-800">Our Futuristic Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border-t-4 border-svt-blue-500">
                <Package className="w-12 h-12 text-svt-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-svt-blue-800">Smart Packaging</h3>
                <p className="text-svt-blue-700">AI-optimized packaging for maximum protection and efficiency.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border-t-4 border-svt-blue-500">
                <Clock className="w-12 h-12 text-svt-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-svt-blue-800">Real-time Tracking</h3>
                <p className="text-svt-blue-700">Advanced GPS and IoT technology for precise shipment monitoring.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border-t-4 border-svt-blue-500">
                <Globe className="w-12 h-12 text-svt-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-svt-blue-800">Global Network</h3>
                <p className="text-svt-blue-700">Extensive international shipping with customs clearance assistance.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-b from-white to-svt-blue-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-svt-blue-800">Why Choose SVT?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <BarChart className="w-16 h-16 text-svt-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-svt-blue-800">Data-Driven Logistics</h3>
                <p className="text-svt-blue-700">Optimize routes and reduce costs with our AI-powered analytics.</p>
              </div>
              <div className="text-center">
                <Package className="w-16 h-16 text-svt-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-svt-blue-800">Eco-Friendly Solutions</h3>
                <p className="text-svt-blue-700">Sustainable packaging and carbon-neutral shipping options.</p>
              </div>
              <div className="text-center">
                <Clock className="w-16 h-16 text-svt-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-svt-blue-800">24/7 Support</h3>
                <p className="text-svt-blue-700">Round-the-clock customer service with AI chatbot assistance.</p>
              </div>
              <div className="text-center">
                <Truck className="w-16 h-16 text-svt-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-svt-blue-800">Fleet Modernization</h3>
                <p className="text-svt-blue-700">Electric and autonomous vehicles for efficient, clean transport.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-svt-blue-800">Our Fleet</h2>
            <div className="flex justify-center">
              <div className="relative w-full max-w-2xl">
                <img src="https://i.imgur.com/Hy0Hy9Z.jpg" alt="SVT Truck" className="w-full h-auto rounded-lg shadow-2xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-svt-blue-900 to-transparent opacity-50 rounded-lg"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Modern and Efficient</h3>
                  <p>Our fleet of trucks is equipped with the latest technology for safe and timely deliveries.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-gradient-to-b from-svt-blue-50 to-svt-blue-100 py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-svt-blue-800">Contact Us</h2>
            <div className="flex flex-col md:flex-row justify-around items-start">
              <div className="mb-8 md:mb-0 bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Phone className="w-6 h-6 text-svt-blue-600 mr-2" />
                  <span className="text-svt-blue-800">+91 9393025444</span>
                </div>
                <div className="flex items-center mb-4">
                  <Mail className="w-6 h-6 text-svt-blue-600 mr-2" />
                  <span className="text-svt-blue-800">info@svt.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-svt-blue-600 mr-2" />
                  <span className="text-svt-blue-800">IDPL, Chintal, Hyderabad, India</span>
                </div>
              </div>
              <form className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
                <input type="text" placeholder="Name" className="w-full mb-4 p-2 rounded border border-svt-blue-300 focus:outline-none focus:ring-2 focus:ring-svt-blue-500" />
                <input type="email" placeholder="Email" className="w-full mb-4 p-2 rounded border border-svt-blue-300 focus:outline-none focus:ring-2 focus:ring-svt-blue-500" />
                <textarea placeholder="Message" rows={4} className="w-full mb-4 p-2 rounded border border-svt-blue-300 focus:outline-none focus:ring-2 focus:ring-svt-blue-500"></textarea>
                <button type="submit" className="bg-svt-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-svt-blue-700 transition duration-300 w-full shadow-lg hover:shadow-xl">Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-svt-blue-800 to-svt-blue-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Sri Vishnu Transport (SVT). All rights reserved.</p>
          <div className="mt-4">
            <a href="#" className="text-svt-blue-200 hover:text-white mr-4 transition duration-300">Privacy Policy</a>
            <a href="#" className="text-svt-blue-200 hover:text-white mr-4 transition duration-300">Terms of Service</a>
            <a href="#" className="text-svt-blue-200 hover:text-white transition duration-300">Sitemap</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;