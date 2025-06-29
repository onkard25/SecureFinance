
import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: "25+ Years Experience",
      description: "Trusted industry expertise since 1998"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified professionals dedicated to your success"
    },
    {
      icon: Clock,
      title: "Fast Processing",
      description: "Quick turnaround on all claims and applications"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Your data and investments are always protected"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose SecureFinance?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With over two decades of experience in the insurance and financial services industry, 
              we've built our reputation on trust, reliability, and exceptional customer service. 
              Our team of certified professionals is committed to finding the right solutions for your unique needs.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Get Started Today</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                <span>Free consultation with our experts</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                <span>Customized insurance quotes</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                <span>24/7 customer support</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                <span>Online claim tracking</span>
              </div>
            </div>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Us Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
