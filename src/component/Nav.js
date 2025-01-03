import React, { useState, useEffect } from "react";
import fifth from "../assets/fifth.png";
import hotel2 from "../assets/hotel2.png";
import hotel3 from "../assets/hotel3.png";
import hotel4 from "../assets/hotel4.png";
import hotel5 from "../assets/hotel5.png";
import navbg from "../assets/navbg.png";
import navlogo from "../assets/logo.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import new1 from "../assets/new1.png"
import new2 from "../assets/new2.png"
import new3 from "../assets/new3.png"


import indialogo from "../assets/indialogo.png";
import {
  FaChevronLeft,
  FaChevronRight,
  FaSun,
  FaMountain,
  FaLeaf,
  FaPlane,
} from "react-icons/fa";

const NavImage = () => {
  const slides = [
    {
      image: new1,
  
    },
    {
      image: new2,
    
    },
    {
      image: hotel3,
 
    },
    {
      image: hotel4,

    },
    {
      image: new3,
      // // title: "Welcome to Slide 5",
      // subtitle: "Your Future Starts Here",
      // buttonText: "Get Started",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form submitted");
    handleCloseModal(); // Close modal after submission
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-screen h-screen">
      {/* Navigation Header */}
      <div
        className="fixed top-0 left-0 w-full h-14 flex items-center px-5 z-50"
        style={{
          backgroundImage: `url(${navbg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex justify-between items-center w-full">
          <img src={navlogo} alt="Logo" className="h-12 w-[100px]" />
          <img src={indialogo} alt="India Logo" className="h-6" />
        </div>
      </div>

      {/* Slide Section */}
      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
              index === currentIndex
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-full"
            }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center space-y-4">
              <h1 className="text-white text-4xl md:text-6xl font-bold">
                {slide.title}
              </h1>
              <p className="text-white text-lg md:text-2xl">{slide.subtitle}</p>
            </div>
          </div>
        ))}

        {/* Slide Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-5 md:top-1/2 transform -translate-y-1/2 bg-white bg-opacity-60 text-gray-800 rounded-full p-3 hover:bg-opacity-80 shadow-lg"
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-5  md:top-1/2 transform -translate-y-1/2 bg-white bg-opacity-60 text-gray-800 rounded-full p-3 hover:bg-opacity-80 shadow-lg"
        >
          <FaChevronRight size={20} />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-gray-500"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Text Section Below Slides */}
      <div
          
       className="absolute  bottom-48 md:bottom-24 left-1/2 transform -translate-x-1/2 text-center space-y-6">
        <h2
          className="text-xl md:text-4xl  font-bold text-white"
          style={{ fontFamily: "'Aref Ruqaa', serif" }}
        >
          "Transform Your Retail Store with
          AI-Powered Insights"
        </h2>
        {/* <p className="text-lg px-2 font-semibold text-white">
        6 Nights / 7 Days | 4N Seminyak / Kuta & 2N Ubud
        </p> */}
        
        <button
          className="bg-blue-600 text-white font-semibold px-10 py-2.5 rounded-full hover:bg-blue-500 transition"
          onClick={handleOpenModal}
        >
         Book Demo
        </button>
        {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
            {/* Close Icon */}
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✖
            </button>

            {/* Modal Content */}
            <h2 className="text-2xl font-bold mb-4">Submit Your Details</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-left text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                placeholder="enter name"
                  type="text"
                  className="w-full border  border-gray-300 rounded p-2 focus:ring focus:ring-blue-300"
                  required
                />
              </div>
              <div>
                <label className="block text-left text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                placeholder="enter email"
                  type="email"
                  className="w-full border border-gray-300 rounded p-2 focus:ring focus:ring-blue-300"
                  required
                />
              </div>
              <div>
                <label 

                className="block text-sm text-left font-medium text-gray-700">
                  Contact
                </label>
                <input
                placeholder="enter phone number"

                  type="tel"
                  className="w-full border border-gray-300 rounded p-2 focus:ring focus:ring-blue-300"
                  required
                />
              </div>
              <div>
                <label className="block text-left text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                placeholder="your message"

                  className="w-full border border-gray-300 rounded p-2 focus:ring focus:ring-blue-300"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 w-full"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
  <img src={icon1} alt="Icon 1" className="h-8 w-24 md:w-24" />
  <img src={icon2} alt="Icon 2" className="h-8 w-24 md:w-24" />
  <img src={icon3} alt="Icon 3" className="h-8 w-20 md:w-20" />
  <img src={icon4} alt="Icon 4" className="h-8 w-20 md:w-20" />
</div> */}


      </div>
    </div>
  );
};

export default NavImage;
