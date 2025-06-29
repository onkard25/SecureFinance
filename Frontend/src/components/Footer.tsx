
import React from 'react';
import { Shield, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">SecureFinance</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner for comprehensive insurance and financial services. 
              Protecting your future, one policy at a time.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Auto Insurance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Home Insurance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Health Insurance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Life Insurance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Business Insurance</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Claims</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>1-800-SECURE-1</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>contact@securefinance.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>123 Financial District, NY 10004</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 SecureFinance. All rights reserved. Licensed Insurance Provider.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
