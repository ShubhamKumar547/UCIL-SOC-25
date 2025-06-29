"use client";
import React, { useEffect, useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRouter } from "next/router";

const TestimonialCarousel = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [sectionTitle, setSectionTitle] = useState("Stories of Impact");
  const [currentIndex, setCurrentIndex] = useState(0);
  const { locale } = useRouter();
  const intervalRef = useRef(null);

  // Fetch data on locale change
  useEffect(() => {
    fetch(`/locales/${locale}/testimonials.json`)
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data.testimonials || []);
        setSectionTitle(data.sectionTitle || "Stories of Impact");
        setCurrentIndex(0);
      })
      .catch(() => console.warn("Failed to load testimonials."));
  }, [locale]);

  // Autoplay
  useEffect(() => {
    if (testimonials.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) =>
          prev === testimonials.length - 1 ? 0 : prev + 1
        );
      }, 4000); // Change every 5 seconds
    }

    return () => clearInterval(intervalRef.current);
  }, [testimonials]);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-12 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 relative">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-amber-600 dark:text-amber-400 mb-6">
          {sectionTitle}
        </h2>

        <div className="relative overflow-hidden">
          {testimonials.length > 0 && (
            <div className="transition-transform duration-500 ease-in-out">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center mx-auto max-w-xl">
                <p className="text-gray-800 dark:text-gray-100 italic mb-4">
                  “{testimonials[currentIndex].quote}”
                </p>
                <h4 className="font-bold text-green-600 dark:text-green-400">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {testimonials[currentIndex].location}
                </p>
              </div>
            </div>
          )}

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 p-2 bg-white dark:bg-gray-900 rounded-full shadow-md"
            aria-label="Previous Slide"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 bg-white dark:bg-gray-900 rounded-full shadow-md"
            aria-label="Next Slide"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-2 w-2 rounded-full transition-all duration-300 focus:outline-none ${
                idx === currentIndex
                  ? "bg-amber-500"
                  : "bg-gray-400 dark:bg-gray-600"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
