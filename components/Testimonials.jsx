import React from 'react';
import { useRouter } from 'next/router';
import en from '../public/locales/en/testimonials.json';
import hi from '../public/locales/hi/testimonials.json';

const CommunityTestimonials = () => {
  const { locale } = useRouter();
  const t = locale === 'hi' ? hi : en;

  return (
    <section className="py-12 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-2">
            {t.title}
          </h2>
          <p className="text-green-600 font-normal">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-green-800">
                      {testimonial.name}
                    </h3>
                    <p className="text-amber-500 font-normal">
                      {testimonial.age} years
                    </p>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {testimonial.category}
                  </span>
                </div>

                <blockquote className="text-gray-600 font-normal italic mb-4 border-l-4 border-amber-500 pl-4">
                  "{testimonial.quote}"
                </blockquote>

                <p className="text-sm text-gray-500 font-normal">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityTestimonials;