import React, { useState } from "react";
import HeroPng from "../assets/reebok_shoe.png";
import { FaArrowLeft, FaArrowRight, FaPlay } from "react-icons/fa6";
import { motion } from "framer-motion";
import Logo from "../assets/reebok_logo.png";
import ReactPlayer from "react-player";

const slideUp = (delay) => ({
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  },
});

const Hero = () => {
 
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  

  return (
    <section className="bg-primary text-white relative">
      <div className="container grid grid-cols-1 md:grid-cols-3 min-h-[700px] md:gap-32">
        {/* Brand Info */}
        <div className="flex flex-col justify-end py-14 md:py-20">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1
              variants={slideUp(0.2)}
              initial="hidden"
              animate="show"
              className="text-3xl uppercase font-semibold"
            >
              Reebok Classic
            </motion.h1>
            <motion.p variants={slideUp(0.4)} initial="hidden" animate="show">
              Release Date: 10/08/2024 <br />
              Color: White
            </motion.p>
            <motion.div
              variants={slideUp(0.6)}
              initial="hidden"
              animate="show"
              className="max-w-[250px] space-y-3 mx-auto md:mx-0"
            >
              <p>Select Size (IN)</p>
              <div className="flex gap-3 flex-wrap justify-center md:justify-start relative z-10">
                {["SM", "MD", "LG", "XL", "8", "9", "10", "11", "12", "13"].map(
                  (size) => (
                    <p key={size} className="size-box">
                      {size}
                    </p>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="flex flex-col justify-center items-center relative gap-16">
          <motion.img
            initial={{ opacity: 0, x: 100, rotate: 20 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            src={HeroPng}
            alt="Jordan Shoe"
            className="max-w-[500px] xl:max-w-[600px] relative z-10 brightness-110"
          />

          {/* Background text and white light section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0 }}
            className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-[55%] z-[2] w-full flex justify-center"
          >
            <img 
              src={Logo} 
              alt="Reebok Logo" 
              className="w-[500px] md:w-[700px] xl:w-[1000px] max-w-none"
            />
          </motion.div>


          <div className="h-[500px] w-[500px] bg-white/45 blur-3xl rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

          {/* Play Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex gap-4 items-center"
          >
            <div className="flex flex-col items-center z-10">
              {/* Play Button */}
              <button
                className="h-12 w-12 bg-red-500 flex justify-center items-center p-3 rounded-full hover:scale-105 duration-200 text-white"
                onClick={openModal}
              >
                <FaPlay />
              </button>
              <p className="mt-2">PLAY VIDEO</p>

              {/* Modal */}
              {isOpen && (
                <div
                  className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                  onClick={closeModal} // Close modal when clicking outside
                >
                  <div
                    className="bg-white p-4 rounded-lg shadow-lg max-w-lg w-full relative"
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
                  >
                    {/* Close Button */}
                    <button
                      className="absolute top-2 right-2 text-gray-500 hover:text-black"
                      onClick={closeModal}
                    >
                      ✖
                    </button>

                    {/* Video Player */}
                    <ReactPlayer
                      url="https://www.youtube.com/watch?v=FQyYXhplQog"
                      controls
                      width="100%"
                    />
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
        {/* Right Side Section */}
        <div className="flex flex-col justify-end items-center lg:px-8 py-16">
            <motion.p
              variants={slideUp(0.6)}
              initial="hidden"
              animate="show"
              className="text-sm"
            >
              Step into timeless style with the Reebok Classic—where heritage meets unstoppable comfort. Own the streets with a sneaker that never goes out of fashion.
            </motion.p>

            {/* Left Right Icons */}
            <motion.div
              variants={slideUp(0.8)}
              initial="hidden"
              animate="show"
              className="flex gap-8 pt-6 relative z-20"
            >
              <div className="text-2xl rounded-full border border-white p-2 hover:bg-white hover:text-primary duration-300">
                <FaArrowLeft />
              </div>
              <div className="text-2xl rounded-full border border-white p-2 hover:bg-white hover:text-primary duration-300">
                <FaArrowRight />
              </div>
            </motion.div>
          </div>
      </div>

      
    </section>
  );
};

export default Hero;
