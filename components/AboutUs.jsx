import React from 'react';

const AboutUCIL = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="p-6 bg-black text-white rounded-md space-y-5">
        <h1 className="text-xl font-bold">About Uranium Corporation of India Limited (UCIL)</h1>
        
        <div>
          <h3 className="text-lg font-medium mb-1">Company Overview</h3>
          <p className="text-sm">
            Uranium Corporation of India Limited (UCIL) is a Public Sector Enterprise under the Department of Atomic Energy, Government of India. Established in 1967, we are responsible for uranium mining and processing to support India's nuclear power program.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-1">Our Mission</h3>
          <p className="text-sm">
            To achieve self-sufficiency in uranium production through sustainable mining practices, technological innovation, and commitment to safety and environmental protection.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-1">Key Operations</h3>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Uranium mining operations in Jharkhand and Andhra Pradesh</li>
            <li>Ore processing and uranium concentrate production</li>
            <li>Exploration of new uranium reserves</li>
          </ul>
        </div>

        <div className="pt-2">
          <button className="px-5 py-1.5 bg-white text-black font-medium rounded hover:bg-gray-200 transition-colors text-sm">
            Contact UCIL
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUCIL;