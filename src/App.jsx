import React, { useState, useEffect } from "react";

const App = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [animatePopup, setAnimatePopup] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(5);

  const projectList = [
    {
      title: "Automatic Street Lights",
      description: "Uses LDR and motion sensors to turn street lights on/off automatically, improving energy efficiency and safety.",
      image: "/assets/streatlight.png",
    },
    {
      title: "Automated Solar Adjustment",
      description: "Adjusts solar panel angles using sensors and motors to maximize energy absorption throughout the day.",
      image: "/assets/solar.png",
    },
    {
      title: "Gas Leak Detector",
      description: "Detects harmful gas leaks and sends alerts via alarms or notifications, preventing fire hazards.",
      image: "/assets/gasleak.png",
    },
    {
      title: "Smart Home",
      description: "Automates home appliances, lighting, and security via IoT, enhancing convenience and energy efficiency.",
      image: "/assets/smarthome.png",
    },
    {
      title: "Smart Irrigation System",
      description: "Uses soil moisture sensors to automate watering, conserving water and improving agricultural efficiency.",
      image: "/assets/irrigation.png",
    },
    {
      title: "Smart Parking Indicator",
      description: "Detects and indicates empty parking spots using sensors, reducing search time and improving traffic flow.",
      image: "/assets/carparking.png",
    },
    {
      title: "Custom Choice",
      image: "/assets/custom.png",
      isCustom: true,
    },
  ];
  
  

  const projectTypes = ["Software", "Electronics", "IoT", "Web Development", "Analytics", "Hardware" , "DBMS" , "Mini Projects"];

  // Display popup with animation on page load
  useEffect(() => {
    setShowPopup(true);
    setTimeout(() => {
      setAnimatePopup(true);
    }, 100);  // Delay for animation effect
  }, []);

  //comment
  //feature added

  // Close popup when clicked outside
  const handleOutsideClick = (e) => {
    if (e.target.id === "popup-wrapper") {
      setAnimatePopup(false);
      setTimeout(() => {
        setShowPopup(false);
      }, 300);  // Delay to complete the closing animation
    }

    if (e.target.id === "contact-popup-wrapper") {
      setShowContactPopup(false);
    }
  };
  const handleWhatsAppRedirect = () => {
    const phoneNumber = "+919322705181";
    const message = encodeURIComponent("Hello, I want to discuss my custom project requirements.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const nonCustomProjects = projectList.filter((project) => !project.isCustom);
  const customProjects = projectList.filter((project) => project.isCustom);
  const displayedProjects = [...nonCustomProjects.slice(0, visibleProjects), ...customProjects];

 

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Header Section */}
      <header className="bg-slate-700 text-white py-6 md:py-6 relative">

        {/* Logo and Buttons Container */}
        <div className="flex justify-between items-center px-6 md:px-12">

          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/assets/logo3.webp"
              alt="Logo"
              className="w-16 md:w-24 h-16 md:h-24 rounded-2xl"
            />
          </div>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={() => {
                setShowPopup(true);
                setTimeout(() => setAnimatePopup(true), 10);
              }}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 md:px-6 py-2 rounded-lg transition"
            >
              About Us
            </button>

            <button
              onClick={() => setShowContactPopup(true)}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 md:px-6 py-2 rounded-lg transition"
            >
              Call Us
            </button>
          </div>
        </div>

        {/* Main Heading and Description */}
        <div className="text-center mt-8 md:mt-5 px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-cyan-300">Get Your Project Done with Us</h1>
          <p className="text-lg mt-4 max-w-3xl mx-auto">
            We assist students in building their college projects by providing technical guidance, mentorship,
            and hands-on support. Whether you need help with Software, Electronics, IoT, web development, analytical, or hardware projects,
            we've got you covered.
          </p>
        </div>
      </header>


      {/* Project Types Section */}
      <section className="bg-blue-100 py-8 md:py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">Types of Projects We Create..</h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 px-4">
          {projectTypes.map((type, index) => (
            <div
              key={index}
              className="bg-slate-700 text-white px-4 md:px-6 py-2 rounded-lg shadow-md hover:scale-105 transition cursor-pointer"
            >
              <p className="text-md md:text-lg font-semibold">{type}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      
      <section className="py-16 px-8 bg-blue-100">
        <h2 className="text-3xl font-semibold text-center mb-12">Explore Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayedProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition hover:scale-105">
              <img src={project.image} alt={project.title} className="w-full h-52 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold">{project.title}</h3>
                {project.isCustom ? (
                  <>
                    <p className="text-gray-700 mt-2">If you have your own idea please text us on WhatsApp (e.g. project idea, YouTube video link [if available])</p>
                    <button onClick={handleWhatsAppRedirect} className="bg-green-600 text-white px-4 py-2 mt-4 rounded-lg hover:bg-green-700 transition">Chat With us</button>
                  </>
                ) : (
                  <p className="text-gray-700 mt-2">{project.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        {visibleProjects < nonCustomProjects.length && (
          <div className="text-center mt-6">
            <button onClick={() => setVisibleProjects(visibleProjects + 5)} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">Show More</button>
          </div>
        )}
      </section>
      {/* Contact Section */}
      <section className="bg-blue-50 py-12 text-center">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p className="text-lg">
          📱 <a href="tel:+919322705181" className="text-black hover:underline">+91 9322705181</a>
        </p>
        <p className="text-lg">
          📱 <a href="tel:+918446710321" className="text-black hover:underline">+91 8446710321</a>
        </p>
        <p className="text-lg">📍 Location: Vadgaon/Ambegaon(BK) Pune, Maharashtra, India</p>
      </section>


      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>© {new Date().getFullYear()} SVA PROJECTS</p>
      </footer>

      {/* About Us Popup */}
      {showPopup && (
        <div
          id="popup-wrapper"
          className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleOutsideClick}
        >
          <div
            className={`bg-gradient-to-r from-pink-200 to-slate-300 text-white rounded-lg shadow-2xl max-w-lg w-full p-8 transition-transform duration-300 ${animatePopup ? "translate-x-0" : "translate-x-full"
              }`}
          >
            <h2 className="text-3xl font-bold mb-4 text-black">Who we are?</h2>
            <p className="text-lg text-black">
              We are Final year Grads team from Sinhgad Institute with a passion for technology and innovation. We provide guidance and support to students.
            </p>
            <p className="text-lg mt-4 text-black">
              Get your project done <strong className="text-gray-800">Faster</strong> with <strong className="text-gray-800">Affordable Price.</strong>
            </p>
            <button
              onClick={() => {
                setAnimatePopup(false);
                setTimeout(() => setShowPopup(false), 300);
              }}
              className="bg-red-500 text-white px-4 py-2 rounded-lg mt-6 hover:bg-red-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Contact Popup */}
      {showContactPopup && (
        <div
          id="contact-popup-wrapper"
          className="fixed inset-0 flex justify-center items-center z-50"
          onClick={handleOutsideClick}
        >
          <div className=" text-black bg-gradient-to-r from-pink-200 to-slate-300 rounded-lg shadow-2xl max-w-md w-full p-6 transition-transform duration-300">
            <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
            📱 Phone:<a href="tel:+919322705181" className="text-black hover:underline">+91 9322705181</a>
            <br />
            📱 Phone:<a href="tel:+918446710321" className="text-black hover:underline">+91 8446710321</a>

            <p className="text-sm">📍 Location: Vadgaon/Ambegaon(BK) Pune, Maharashtra, India</p>
            <button
              onClick={() => setShowContactPopup(false)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-red-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
