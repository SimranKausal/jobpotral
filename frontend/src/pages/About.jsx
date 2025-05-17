import React from 'react';
import Navbar from '../components/shared/Navbar';
const About = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          About Our Job Portal
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Connecting talented professionals with outstanding opportunities. 
          We're dedicated to making the job search and hiring process seamless and efficient.
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <FeatureCard 
          // icon={<FaBriefcase className="h-8 w-8" />}
          title="Job Listings"
          description="Access thousands of curated job opportunities from top companies across various industries."
        />
        <FeatureCard 
          // icon={<FaUsers className="h-8 w-8" />}
          title="For Employers"
          description="Post jobs, manage applications, and find the perfect candidates for your organization."
        />
        <FeatureCard 
          // icon={<FaSearch className="h-8 w-8" />}
          title="Smart Search"
          description="Advanced search and filtering options to help you find exactly what you're looking for."
        />
        <FeatureCard 
          // icon={<FaHandshake className="h-8 w-8" />}
          title="Career Growth"
          description="Resources and tools to help professionals advance in their careers."
        />
      </div>

      {/* Mission Statement */}
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Our Mission
        </h2>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto text-center">
          We believe in creating meaningful connections between employers and job seekers. 
          Our platform is designed to streamline the hiring process while ensuring that 
          talented individuals find roles where they can thrive and make an impact.
        </p>
      </div>

      {/* Statistics */}
      <div className="max-w-7xl mx-auto bg-indigo-600 rounded-lg shadow-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard number="10,000+" label="Active Jobs" />
          <StatCard number="50,000+" label="Registered Users" />
          <StatCard number="1,000+" label="Companies" />
        </div>
      </div>
    </div>
    </>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
      <div className="text-indigo-600 flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const StatCard = ({ number, label }) => {
  return (
    <div className="text-center">
      <p className="text-4xl font-bold text-white mb-2">{number}</p>
      <p className="text-xl text-white opacity-90">{label}</p>
    </div>
  );
};

export default About; 
