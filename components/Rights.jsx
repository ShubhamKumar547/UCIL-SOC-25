import { useState } from 'react';

const EnvironmentalRights = ({ t }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Safely access data with fallbacks
  const metadata = t?.metadata || {};
  const rightsData = t?.rights || [];
  const legalAssistance = t?.legalAssistance || {};

  return (
    <div className="max-w-4xl mx-auto p-5 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2 text-black">
          {metadata.title || "Environmental & Forest Rights"}
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          {metadata.subtitle || "Comprehensive overview of legal rights"}
        </p>
      </div>
      
      <div className="space-y-3">
        {rightsData.length > 0 ? (
          rightsData.map((item, index) => (
            <div 
              key={item.id || index}
              className={`border border-black rounded-md overflow-hidden transition-all duration-200 ${activeIndex === index ? 'shadow-md' : 'shadow-sm hover:shadow-md'}`}
            >
              <button
                className={`w-full p-4 text-left flex justify-between items-center transition-colors duration-200 ${activeIndex === index ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-50'}`}
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`content-${item.id || index}`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-xl">{`${item.icon}` || "📄"}</span>
                  <span className="text-lg font-medium">{item.title || "Untitled Right"}</span>
                </div>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${activeIndex === index ? 'transform rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div
                id={`content-${item.id || index}`}
                className={`transition-all duration-300 overflow-hidden ${activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-4 bg-white">
                  <ul className="space-y-2">
                    {item?.content?.length > 0 ? (
                      item.content.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 bg-black rounded-full mt-2 mr-2"></span>
                          <span className="text-gray-800 text-sm">{point}</span>
                        </li>
                      ))
                    ) : (
                      <li className="text-gray-500 text-sm">No content available</li>
                    )}
                  </ul>
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <button className="text-xs font-medium text-black hover:underline">
                      {legalAssistance.buttonText 
                        ? legalAssistance.buttonText.replace("Expert", item?.title?.split(' ')[0] || "this") 
                        : "Learn more"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-10 text-gray-500">
            No rights data available
          </div>
        )}
      </div>

      {Object.keys(legalAssistance).length > 0 && (
        <div className="mt-10 p-5 bg-black text-white rounded-md">
          <h3 className="text-lg font-medium mb-2">{legalAssistance.title || "Need Legal Assistance?"}</h3>
          <p className="mb-3 text-sm">
            {legalAssistance.description || "Consult with a legal expert."}
          </p>
          <button className="px-5 py-1.5 bg-white text-black font-medium rounded hover:bg-gray-200 transition-colors text-sm">
            {legalAssistance.buttonText || "Contact an Expert"}
          </button>
        </div>
      )}
    </div>
  );
};

export default EnvironmentalRights;