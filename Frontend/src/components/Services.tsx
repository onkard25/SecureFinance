
import React from 'react';
import { Shield, Car, Home, Heart, Briefcase, PiggyBank } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Auto Insurance",
      description: "Comprehensive coverage for your vehicle with competitive rates and quick claims processing."
    },
    {
      icon: Home,
      title: "Home Insurance",
      description: "Protect your home and belongings with our comprehensive homeowner's insurance policies."
    },
    {
      icon: Heart,
      title: "Health Insurance",
      description: "Affordable health coverage options for individuals and families with extensive provider networks."
    },
    {
      icon: Briefcase,
      title: "Business Insurance",
      description: "Comprehensive business protection including liability, property, and workers' compensation."
    },
    {
      icon: PiggyBank,
      title: "Life Insurance",
      description: "Secure your family's financial future with our flexible life insurance plans."
    },
    {
      icon: Shield,
      title: "Financial Planning",
      description: "Expert financial advice to help you achieve your long-term financial goals and security."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive insurance and financial solutions designed to protect and grow your wealth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
