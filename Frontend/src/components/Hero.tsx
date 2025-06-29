
import React from 'react';
import { Shield, Users, FileText, TrendingUp, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-blue-400" />
          <span className="text-2xl font-bold">SecureFinance</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
          <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Secure Your Financial
              <span className="text-blue-400 block">Future Today</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Professional insurance and financial services tailored to protect what matters most. 
              Get expert guidance from our dedicated agents and streamlined claim processing.
            </p>
            
            {/* Main Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                onClick={() => window.location.replace('https://customersupportdsw.streamlit.app/')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Users className="mr-2 h-5 w-5" />
                Customer Agent
              </Button>
              <Button 
                onClick={() => window.open('https://insuranceclaimdsw.streamlit.app/', '_self')}
                variant="outline"
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <FileText className="mr-2 h-5 w-5" />
                Insurance Claim
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-8">
              <div className="flex items-center space-x-1">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="ml-2 text-gray-300">4.9/5 Rating</span>
              </div>
              <div className="text-gray-300">
                <span className="font-semibold">50k+</span> Happy Clients
              </div>
            </div>
          </div>

          {/* Right Side - Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <TrendingUp className="h-8 w-8 text-green-400 mb-4" />
              <h3 className="text-2xl font-bold">98%</h3>
              <p className="text-gray-300">Claim Success Rate</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Shield className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold">24/7</h3>
              <p className="text-gray-300">Customer Support</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Users className="h-8 w-8 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold">500+</h3>
              <p className="text-gray-300">Expert Agents</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <CheckCircle className="h-8 w-8 text-green-400 mb-4" />
              <h3 className="text-2xl font-bold">15min</h3>
              <p className="text-gray-300">Avg Response Time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
