import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import indialogo from "../assets/indialogo.png";
import homeback from "../assets/homebackground.png";
import first from "../assets/first.png";
import second from "../assets/second.png";
import third from "../assets/third.png";
import fourth from "../assets/fourth.png";
import fifth from "../assets/fifth.png";
import meal from "../assets/meal.png";
import stay from "../assets/stay.png";
import transfer from "../assets/transefer.png";
import sight from "../assets/sight.png";
import fish from "../assets/fish.png";
import waterfall from "../assets/waterfall.png";
import mountain from "../assets/mountain.png";
import tower from "../assets/tower.png";
import animal from "../assets/animal.png";
import statue from "../assets/statue.png";
import street from "../assets/street.png";
import tajmahal from "../assets/tajmahal.png";
import atv from "../assets/atv.png";
import scuba from "../assets/scuba.png";
import river from "../assets/river.png";
import baloon from "../assets/baloon.png";
import snork from "../assets/snork.png";
import glob from "../assets/glob.png";
import man from "../assets/man.png";
import arrow from "../assets/arrow.png";
import hotel from "../assets/hotel.png";
import hotel2 from "../assets/hotel2.png";
import hotel3 from "../assets/hotel3.png";
import hotel4 from "../assets/hotel4.png";
import hotel5 from "../assets/hotel5.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ulaman from "../assets/ulaman.png";
import bubble from "../assets/bubble.png";
import apoorva from "../assets/apporva.png";
import sixth from "../assets/sixth.png";
import seventh from "../assets/seventh.png";
import eighth from "../assets/eigth.png";
import ninth from "../assets/ninth.png";
import footer from "../assets/footer.png";
import video1 from "../assets/vide01.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
import textHome from "../assets/textHome.png";
import homeVideo from "../assets/homeVideo.mp4";
import candle from "../assets/candleImage.png";
import video4 from "../assets/video4.mp4";
import videoImage4 from "../assets/videoImage4.png";
import videoImage3 from "../assets/videoImage3.png";
import videoImage2 from "../assets/videoImage2.png";
import videoImage1 from "../assets/videoImage1.png";
import day1 from "../assets/day1.png";
import day2 from "../assets/day2.png";
import day3 from "../assets/day3.png";
import day4 from "../assets/day4.png";
import callicon from "../assets/callicon.png";
import staf1 from "../assets/staf1.png";
import staf2 from "../assets/staf2.png";
import staf3 from "../assets/staf3.png";
import staf4 from "../assets/staf4.png";
import staf5 from "../assets/staf5.png";
import staf6 from "../assets/staf6.png";
import prem1 from "../assets/prem1.png";
import prem2 from "../assets/prem2.png";
import prem3 from "../assets/prem3.png";
import videoHome from "../assets/homeVideo.mp4";

const HomeImage = () => {
  const [activeButton, setActiveButton] = useState(null);
  const images = [second, third, fourth, fifth];
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [chooseRoute, setChooseRoute] = useState("Kuta");
  const [selectedRoom, setSelectedRoom] = useState("Luxury");
  const [selectedCategory, setSelectedCategory] = useState("AllImages");
  const [isModalOpen, setModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [formValues, setFormValues] = useState({
    productType: "tour",
    tripDuration: "upto-1-day",
    priceRange: 500,
  });
  const imagesHotel = [hotel, hotel3, hotel4, hotel5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFormOpen, setIsFormOpen] = useState(true);
  const [closeCount, setCloseCount] = useState(0);
  const [isApplyClicked, setIsApplyClicked] = useState(false);
  const [formValuesForm, setFormValuesForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    travelDate: "",
    travelCount: "",
    message: "",
  });

  const imagesStaff = [staf2, staf3, staf5];
  const imagesHotels = [prem1, prem2, prem3];

    const [isModalOpenNew, setIsModalOpenNew] = useState(false);
  
    const handleOpenModalNew = () => {
      setIsModalOpenNew(true);
    };
  
    const handleCloseModalNew = () => {
      setIsModalOpenNew(false);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add form submission logic here
      console.log("Form submitted");
      handleCloseModal(); // Close modal after submission
    };
  // useEffect(() => {
  //   let timer;
  //   if (!isFormOpen && closeCount < 2 && !isApplyClicked) {
  //     timer = setTimeout(() => {
  //       setIsFormOpen(true);
  //     }, 10000); // 10 seconds
  //   }
  //   return () => clearTimeout(timer);
  // }, [isFormOpen, closeCount, isApplyClicked]);

  const handleFormChangeModal = (e) => {
    const { name, value } = e.target;
    setFormValuesForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleApply = () => {
    // console.log("Form Data:", formValues);
    setIsFormOpen(false);
    setIsApplyClicked(true); // Prevent modal from reopening
  };

  const handleCloseModalForm = () => {
    setIsFormOpen(false);
    setCloseCount((prev) => prev + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesHotel.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [imagesHotel.length]);

  // Handle manual navigation
  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesHotel.length);
  };

  const goToPrevSlide = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + imagesHotel.length) % imagesHotel.length
    );
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && searchValue.trim() !== "") {
      setModalOpen(true); // Open the modal
    }
  };

  const handleCloseModal = () => {
    console.log("clllllllllllll");
    setModalOpen(false); // Close the modal
    setSearchValue("");
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const videos = [
    {
      id: 1,
      thumbnail: videoImage4,
      src: video1,
      name: "Ankit & Kaajal",
      // profession: "Travel Blogger",
    },
    {
      id: 3,
      thumbnail: videoImage3,
      src: video3,
      name: "Pranabh Gupta",
      // profession: "Behavioral Science",
    },

    {
      id: 4,
      thumbnail: videoImage1,
      src: video4,
      name: "Poonam Kori",
      // profession: "Behavioral Science",
    },
    {
      id: 2,
      thumbnail: videoImage2,
      src: video2,
      name: "Sanya & Uday",
      // profession: "Adventure Enthusiast",
    },
  ];

  // Function to play video
  const playVideo = (id) => {
    setCurrentVideo(id);
    setIsPlaying(true);
  };
  const categories = [
    { id: "AllImages", label: "All Images", width: "w-28" },
    { id: "Destinations", label: "Destinations", width: "w-28" },
    { id: "Stays", label: "Stays", width: "w-20" },
    {
      id: "ActivitiesSightseeing",
      label: "Activities / Sightseeing",
      width: "w-44",
    },
  ];

  const destinations = [
    {
      image: day1, // Replace with your image URL
      days: "4 Days",
      price: "₹ 25,000/-",
    },
    {
      image: day2, // Replace with your image URL
      days: "5 Days",
      price: "₹ 30,000/-",
    },
    {
      image: day3, // Replace with your image URL
      days: "6 Days",
      price: "₹ 35,000/-",
    },
    {
      image: day4, // Replace with your image URL
      days: "7 Days",
      price: "₹ 38,000/-",
    },
  ];

  const toggleDropdown = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const routes = [
    { id: "Kuta", label: "Kuta" },
    { id: "Kuta-Seminyak", label: "Kuta - Seminyak" },
    { id: "Kuta-Ubud", label: "Kuta - Ubud" },
    { id: "Ubud-Kuta", label: "Ubud - Kuta" },
  ];

  const rooms = [
    { id: "Deluxe", label: "Deluxe" },
    { id: "Luxury", label: "Luxury" },
    { id: "PremiumLuxury", label: "Premium Luxury" },
  ];

  // const videos = [
  //   { id: 1, src: video1, thumbnail: eighth, name: 'Millon Zohine', profession: 'Behavioral Science' },
  //   { id: 2, src:video2, thumbnail: hotel, name: 'Millon Zohine', profession: 'Behavioral Science' },
  //   { id: 3, src: video2, thumbnail: ninth, name: 'Millon Zohine', profession: 'Behavioral Science' },
  // ];
  // const playVideo = (id)=> {
  //   setCurrentVideo(id);
  //   setIsPlaying(true);
  // };
  return (
    <div>
      <div>
        <div
          id="popular-destinations"
          className="bg-white max-w-7xl mx-auto p-6 font-sans"
        >
          <div className="grid gap-6">
            {/* Text Section */}
            <div className="flex   justify-between  mt-6">
              <div>
                <h2 className="text-3xl font-bold">
                  Unlock Retail Growth with StorePulse{" "}
                  <p className="text-gray-500 text-lg font-semibold">
                    (Boost customer engagement, optimize store layouts, and
                    maximize sales with real-time data)
                  </p>
                </h2>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-orange-400 text-lg">4.2 ★★★★</span>
                  {/* <span className="text-gray-600">Bali</span>
                  <span className="bg-orange-600 text-white px-4 font-medium py-1 rounded-full text-sm">
                    5 Days/4 Nights
                  </span> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl  mx-auto ">
          <p className="text-2xl font-semibold ml-6  m-4">Growth</p>
          <div className="ml-6 mr-6 md:mr-0 md:flex">
            <div className="bg-[#f0f6fa] border border-blue-200 rounded-3xl lg:flex  justify-center items-center">
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center">
                  <div className="bg-white shadow-sm rounded-2xl h-36 md:h-32 m-5 w-32 md:w-44 flex flex-col items-center justify-center">
                    <span className="text-xl font-bold mt-3 md:mt-0">95%</span>
                    <p className="text-center  py-4 text-gray-800">
                      Saw improved in-store conversions and sales
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="flex items-center justify-center">
                    <div className="bg-white shadow-sm rounded-2xl h-36 md:h-32 m-5 w-32 md:w-44 flex flex-col items-center justify-center">
                      <span className="text-xl font-bold mt-3 md:mt-0">
                        85%
                      </span>
                      <p className="text-center  py-4 text-gray-800">
                        Optimized their store layout for flow
                      </p>
                    </div>
                  </div>
               
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center">
                  <div className="bg-white shadow-sm rounded-2xl h-36 md:h-32 m-5 w-32 md:w-44 flex flex-col items-center justify-center">
                    <span className="text-xl font-bold mt-3 md:mt-0">90%</span>
                    <p className="text-center  py-4 text-gray-800">
                      Enhanced the website's user interface .
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="bg-white shadow-sm rounded-2xl  h-36 md:h-32 m-5 w-32 md:w-44 flex flex-col items-center justify-center">
                      <span className="text-xl font-bold mt-3 md:mt-0">
                        92%
                      </span>
                      <p className="text-center py-4 text-gray-800">
                        Saw improved in-store conversions and sales
                      </p>
                    </div>
                  </div>
              </div>
            </div>
            <div className="bg-gray-50 border mt-6 md:mt-0 border-blue-300 rounded-xl shadow-md text-gray-600 mx-0  md:mx-2 p-4 flex flex-col items-center space-y-4">
              <p className="text-center text-sm">Dynamic Heatmap Analysis</p>
              <p className="font-semibold text-blue-600 text-center">
                Customer Analytics
              </p>
              <p className="text-center text-sm">
                Visualize customer movement and interaction zones within your
                store to enhance layout and improve customer engagement.
              </p>
              <button onClick={handleOpenModalNew} className="bg-blue-600 font-semibold text-sm text-white px-4 py-2 rounded-3xl">
                Send Enquiry
              </button>
              {isModalOpenNew && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
            {/* Close Icon */}
            <button
              onClick={handleCloseModalNew}
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
            </div>
          </div>
        </div>

        <div
          className="mt-8 max-w-7xl  mx-4 md:mx-auto  "
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          {/* Main Container */}
          <div className="lg:flex ">
            {/* Left Content Area */}
            <div className="bg-gray-50 md:mx-3 px-0  md:px-4 flex-1 rounded-lg">
              <h1 className="text-3xl px-3 mt-4 md:px-0 font-bold text-gray-800 mb-2">
                Trusted by Leading Brands
              </h1>
              <p className="text-gray-700">
                {" "}
                Over 5000+ stores rely on StorePulse to optimize footfall,
                understand customers, and improve conversions
              </p>
              <ul className="list-disc px-3 md:px-0 list-inside space-y-4 text-gray-700 mt-5">
                <li>
                  "Analyze real-time footfall data to make informed business
                  decisions and enhance store performance."
                </li>
                <li>
                  "Gain deeper customer insights to tailor your offerings and
                  maximize satisfaction."
                </li>
                <li>
                  "Leverage AI-powered analytics to predict trends and improve
                  product placement."
                </li>
                <li>
                  "Track and optimize conversion rates effortlessly with
                  intuitive dashboards."
                </li>
                <li>
                  "Empower your team with actionable insights to create
                  personalized shopping experiences."
                </li>
                <li>
                  "Boost sales by identifying high-performing zones and
                  optimizing store layout."
                </li>
                <li>
                  "Stay ahead with predictive analytics that help forecast
                  customer behaviors."
                </li>
              </ul>

              {/* Image Cards */}

              <div className="mt-8 px-2 py-4 space-y-6">
                {[
                  {
                    title: "Real-Time Footfall Tracking",
                    desc: "Gain immediate insights into the number of customers entering and exiting your store daily to optimize staffing and operations.",
                    video: videoHome, // Replace this with the actual path or import of the video
                  },
                  {
                    title: "Dynamic Heatmap Analysis",
                    desc: "Visualize customer movement and interaction zones within your store to enhance layout and improve customer engagement.",
                    video: videoHome, // Replace this with the actual path or import of the video
                  },
                  {
                    title: "Comprehensive Daily Reports",
                    desc: "Receive daily reports with insights on footfall, customer behavior, and performance metrics directly to your inbox.",
                    video: videoHome, // Replace this with the actual path or import of the video
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                    className="bg-white border border-gray-100 rounded-xl shadow-md overflow-hidden"
                  >
                    <video
                      controls
                      className="w-full h-64 object-cover"
                      src={item.video}
                      alt={item.title}
                    >
                      Your browser does not support the video tag.
                    </video>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Form Area */}
            <div className="bg-gray-50 mx-2 md:mx-0 mt-4 md:mt-0 p-8 px-6 md:px-10 rounded-lg h-[70%] shadow-lg border border-blue-300 lg:w-[30%] sticky top-4 z-10">
              <h2 className="text-lg text-center font-semibold text-gray-900 mb-6">
                Join Our Thriving Community
              </h2>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your full name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email address"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Enter your phone number"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="travel-date"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Date of Travel
                  </label>
                  <input
                    type="date"
                    id="travel-date"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Enter your message"
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  ></textarea>
                </div>
                <button
                onClick={handleOpenModalNew}
                  type="submit"
                  className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
                >
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto my-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-gray-50 p-6 rounded-lg shadow-md">
            {/* Left Section */}
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
                <video
                  className="w-full h-full object-cover"
                  src={videoHome}
                  autoPlay
                  muted
                  loop
                ></video>
              </div>
              <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-md shadow-md">
                <p className="text-xs font-semibold text-gray-600">
                  STOREPULSE TRAFFIC
                </p>
                <p className="text-xs text-gray-500">
                  Measure traffic and map out shoppers in the store journey
                </p>
              </div>
            </div>

            {/* Right Section */}
            <div>
              <h2 className="text-orange-500 text-lg font-bold mb-2">
                Footfall Tracking
              </h2>
              <h1 className="text-3xl font-extrabold text-gray-800 leading-tight">
                Track Foot Traffic with Precision
              </h1>
              <ul className="mt-4 text-gray-600 space-y-2 text-sm">
                <li>✅ Accurate footfall data, excluding staff</li>
                <li>✅ Identify engaged vs casual visitors</li>
                <li>✅ Tailor layout for individuals vs groups</li>
              </ul>

              <button 
              onClick={handleOpenModalNew}

               className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition">
                Book Demo
              </button>
      
            </div>
          </div>
        </div>

        {/* <div
          className="mt-7 max-w-7xl  mx-4 md:mx-auto p-3 rounded-lg"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          <p className="text-3xl font-semibold mb-2">
            Travel <span className="text-red-500">Duration</span>
          </p>
          <p className="text-sm text-gray-600 mb-6">
            Your Bali Adventure Awaits
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className="relative w-full h-60 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:cursor-pointer"
              >
                <img
                  src={destination.image}
                  alt={destination.days}
                  className="w-full h-full object-cover transition-all duration-300 ease-in-out"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-white text-center mb-3 font-semibold text-lg">
                    {destination.days}
                  </h3>
                  <div className="h-[1px] bg-white mx-auto mb-4"></div>
                  <p className="text-yellow-400 text-center font-medium text-sm">
                    Starting at |{" "}
                    <span className="text-white">{destination.price}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        <div
          className=" mt-5 max-w-7xl mx-4 md:mx-auto "
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          <div className="py-8 px-4 max-w-7xl mx-auto">
            {/* Heading Section */}
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-black">
                Join Our Thriving{" "}
                <span className="text-blue-500">Community</span>
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                At Storepulse, we place customer satisfaction at the heart of
                everything we do. Explore how our cutting-edge solutions have
                empowered businesses and hear firsthand from our valued clients.
              </p>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Single Card */}
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="relative bg-white rounded-lg shadow-lg overflow-hidden group transform transition-transform duration-300 ease-in-out hover:scale-105"
                >
                  {/* Background Image */}
                  <img
                    src={imagesStaff[index]}
                    alt="Escape to Bali"
                    className="w-full h-[480px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-80"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>

                  <div className="absolute bottom-4 left-4 text-white space-y-6">
                    <h3 className="text-lg font-semibold leading-tight">
                      “StorePulse has been a game changer for us. By optimizing
                      foot traffic and store layout, we saw a 20% increase in
                      conversions within just a few weeks. The ability to track
                      peak shopping times has helped us improve both staffing
                      and customer flow.”
                    </h3>

                    <p className="text-sm font-semibold">$48.25</p>
                    <div className="right-4 flex space-x-4 md:space-x-6">
                      <button>
                        <img
                          src={callicon}
                          className="h-8 w-8 md:h-10 md:w-10 hover:bg-gray-800"
                          alt="#"
                        />
                      </button>
                      <button className="bg-white text-black text-sm font-semibold py-2 px-16 md:px-24 rounded-lg shadow-md hover:bg-gray-200">
                        Avail This Offer
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-5 md:mt-10  max-w-7xl mx-4 md:mx-auto">
          {/* Left Section: Image */}
          <div className="relative flex-shrink-0 flex justify-center items-center ">
            <img
              src={logo}
              alt="Candle Light Dinner"
              className="rounded-[30px] text-center md:w-[450px] w-full object-cover"
            />
          </div>

          {/* Right Section: Content */}
          <div className="flex  flex-col items-start md:items-start text-left">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-600 mb-6">
              Your satisfaction is our top priority, and we work tirelessly to
              exceed your expectations.
            </p>

            <div className="space-y-4 w-full">
              {/* Feature 1 */}
              <div className="flex items-center p-4 border rounded-xl shadow-sm w-full bg-red-50 border-red-100">
                <span className="text-xl mr-4">✨</span>
                <p className="text-gray-800 font-semibold ">
                  we consistently deliver measurable results and unparalleled
                  value.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center p-4 border rounded-xl shadow-sm w-full bg-white border-gray-100">
                <span className="text-xl mr-4">💖</span>
                <p className="text-gray-800 font-semibold ">
                  We leverage the latest tools and technologies to stay.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center p-4 border rounded-xl shadow-sm w-full bg-red-50 border-gray-100">
                <span className="text-xl mr-4">📸</span>
                <p className="text-gray-800 font-semibold ">
                  we provide end-to-end services to ensure seamless delivery.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="flex items-center p-4 border rounded-xl shadow-sm w-full bg-white border-gray-100">
                <span className="text-xl mr-4 font-semibold ">🏞️</span>
                <p className="text-gray-800 font-semibold ">
                  Our dedicated support team is available around the clock .
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10  max-w-7xl mx-4 md:mx-auto">
          <div className="bg-gray-50 mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold ">
                Frequently Asked Questions
              </h2>
              <p className="text-sm mb-4">
                Quality as judged by customers. Book at the ideal price!
              </p>
              <div className="border-t">
                {[
                  {
                    question: "How can StorePulse boost sales and engagement?",
                    answer:
                      "StorePulse leverages real-time analytics to optimize customer engagement and identify sales opportunities, driving better results for your business.",
                  },
                  {
                    question: "Do I need special equipment to use StorePulse?",
                    answer:
                      "No special equipment is required. StorePulse is a cloud-based platform that works seamlessly with your existing systems.",
                  },
                  {
                    question: "Can StorePulse handle multiple store locations?",
                    answer:
                      "Yes, StorePulse is designed to manage and analyze data from multiple store locations in one unified dashboard.",
                  },
                  {
                    question: "How quickly can I see results from StorePulse?",
                    answer:
                      "Most businesses begin to see measurable improvements in engagement and sales within a few weeks of implementation.",
                  },
                  {
                    question: "What kind of support does StorePulse offer?",
                    answer:
                      "StorePulse provides 24/7 customer support, onboarding assistance, and dedicated account managers to ensure your success.",
                  },
                  {
                    question: "Is there a free trial available?",
                    answer:
                      "Yes, StorePulse offers a 14-day free trial so you can explore its features before making a commitment.",
                  },
                  {
                    question:
                      "How does StorePulse ensure data security and privacy?",
                    answer:
                      "StorePulse employs industry-standard encryption and secure data storage to protect your business and customer information.",
                  },
                  {
                    question: "How do I schedule a demo of StorePulse?",
                    answer:
                      "You can schedule a demo by clicking the 'Book Demo' button at the top of the page and filling out the form.",
                  },
                ].map((faq, index) => (
                  <div key={index} className="border-b last:border-none">
                    <button
                      className="flex justify-between items-center w-full py-3 text-left text-lg font-medium text-gray-800 hover:text-blue-600"
                      onClick={() => toggleDropdown(index)}
                    >
                      {faq.question}
                      <span className="text-xl">
                        {activeIndex === index ? "-" : "+"}
                      </span>
                    </button>
                    {activeIndex === index && (
                      <div className="pl-4 pb-3 text-gray-600">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold ">Payment Refund Policy</h2>
              <p className="text-sm mb-4">
                Quality as judged by customers. Book at the ideal price!
              </p>

              <div className="border-t">
                {[
                  {
                    question: "What is the refund policy for cancellations?",
                    answer:
                      "Full refunds are available for cancellations made at least 7 days before the trip.",
                  },
                  {
                    question: "How long does it take to process refunds?",
                    answer:
                      "Refunds are processed within 5-7 business days after approval.",
                  },
                  {
                    question: "Are there any non-refundable charges?",
                    answer: "Processing fees and taxes may not be refundable.",
                  },
                  {
                    question: "Can I modify my booking instead of canceling?",
                    answer:
                      "Yes, modifications can be made subject to availability.",
                  },
                ].map((faq, index) => (
                  <div key={index} className="border-b last:border-none">
                    <button
                      className="flex justify-between items-center w-full py-3 text-left text-lg font-medium text-gray-800 hover:text-blue-600"
                      onClick={() => toggleDropdown(index + 4)}
                    >
                      {faq.question}
                      <span className="text-xl">
                        {activeIndex === index + 4 ? "-" : "+"}
                      </span>
                    </button>
                    {activeIndex === index + 4 && (
                      <div className="pl-4 pb-3 text-gray-600">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-500 rounded-sm mt-10 py-12 px-4">
              <div className="max-w-4xl mx-auto text-center text-white">
                <h2
                  style={{ fontFamily: "'Aref Ruqaa', serif" }}
                  className="text-3xl font-bold mb-4"
                >
                  Experience StorePulse in action! Schedule a personalized demo today and see how our solutions can help grow your business.
                </h2>
                <p className="mb-6 text-sm font-medium">
                  Create your account now and start your journey with us to
                  unforgettable travel adventures worldwide!
                </p>
                <div className="relative max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter Your email address"
                    className="w-full py-3 px-4 rounded-full shadow-md text-gray-700"
                  />
                  <button className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gray-50 shadow-sm py-6">
              <div className="max-w-6xl mx-auto md:flex flex-wrap justify-between items-start">
                <div className="mb-4">
                  <img src={logo} className="h-20 w-52 " alt="Main Logo" />
                </div>

              

                <div className="flex flex-col mb-4">
                  <h3 className="font-bold text-gray-600 mb-2">Support</h3>
                  <ul className="text-gray-500 space-y-1">
                    <li>
                      <a href="/">+91-9898989898</a>
                    </li>
                    <li>
                      <a href="/">+91-8914789190</a>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col mb-4">
                  <h3 className="font-bold text-gray-600 mb-2">Address</h3>
                  <p className="text-gray-500">
                  23A, Shivaji Marg,<br/> Moti Nagar, Karampura Industrial Area,<br/>  New Delhi, 110015
                  </p>
                </div>

                <div className="flex flex-col ">
                  <h3 className="font-bold text-gray-600 mb-2">Contacts</h3>
                  <p classname="text-gray-500">info@storepulse.ai</p>
                  <p classname="text-gray-500">sales@storepulse.ai</p>

                  <div className="flex space-x-4 mt-2">
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-800 transition"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-800 transition"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-800 transition"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-800 transition"
                    >
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img src={footer} alt="footer" />
      </div>
    </div>
  );
};

export default HomeImage;
