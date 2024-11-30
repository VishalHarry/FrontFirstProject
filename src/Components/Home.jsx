import React from 'react';
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube ,AiFillInstagram} from "react-icons/ai"
 
function Home() {
  return (
    <>
    <div className="Home1 w-full h-screen bg-[#090c31] text-white" id="home">
      <main className="relative w-full h-full flex justify-center flex-col uppercase items-end p-8 before:content-[''] before:absolute before:inset-0 before:bg-cover before:bg-no-repeat before:bg-[url('./assets/1.jpg')] before:opacity-50 before:blur-sm">
        <h1 className="relative z-10 text-5xl sm:text-6xl md:text-8xl">Knowledge<span className='text-[#5853ff]'>Hub</span></h1>
        <p className="relative z-10 text-xs sm:text-sm md:text-base font-semibold">
           Empowering Education through Technology
           <p className="relative z-10 text-xs sm:text-sm md:text-base font-semibold">Your Gateway to Smarter Learning</p>
        </p>
      </main>
    </div>
  
    <div className="Home2 w-full h-screen bg-[#090c31] text-white flex flex-col sm:flex-row items-center justify-center p-5">
      <img
        className="w-[60%] sm:w-[40%] md:w-[30%] animate-moveY"
        src={vg}
        alt="Animated"
      />
      <div className="w-[90%] sm:w-[50%] flex flex-col justify-center items-center mt-5 sm:mt-0 p-5 md:p-10">
        <p className="text-sm md:text-base text-center">
        Welcome to KnowledgeHub, where education meets innovation!

           At KnowledgeHub, we believe that learning should be accessible,
           engaging, and transformative for everyone. Our platform is designed to bridge
           the gap between traditional education methods and modern technological advancements,
           offering a one-stop solution for students, educators, and institutions alike.
        </p>
      </div>
    </div>
  
    <div
      className="Home3 w-full h-screen bg-[#090c31] text-white flex items-center justify-center p-5"
      id="about"
    >
      <div className="w-[90%] md:w-[70%] bg-white text-black rounded-tl-none rounded-tr-[150px] md:rounded-tr-[200px] rounded-br-[150px] md:rounded-br-[200px] rounded-bl-none flex flex-col justify-center items-center p-8 md:p-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold border-b-4 border-black uppercase mb-5">
          Who we are?
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-justify">
        We are KnowledgeHub, a passionate team of educators, technologists, and innovators dedicated to transforming the way the world learns. Our journey began with 
        a simple idea: to create a space where knowledge is not just shared but celebrated.🧑‍💻👩‍💻
        </p>
      </div>
    </div>
  
    <div
      className="Home4 w-full h-auto bg-[#090c31] flex justify-center md:justify-end p-5"
      id="brand"
    >
      <div className="bg-[#5853ff] rounded-tl-[100px] md:rounded-tl-[150px] rounded-br-none rounded-bl-[100px] md:rounded-bl-[150px] w-[90%] md:w-[70%] h-auto p-8 md:p-10 flex flex-col items-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold border-b-4 text-white uppercase mb-5">
          Brands
        </h1>
        <article className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          <div className="animate-moveY w-[6rem] md:w-[8rem] lg:w-[9rem] h-[6rem] md:h-[8rem] lg:h-[9rem] bg-white rounded-full flex flex-col justify-center items-center cursor-pointer transition-all duration-300 ease-in-out hover:invert hover:scale-105">
            <AiFillGoogleCircle size="1.5em" className="text-xl md:text-2xl lg:text-3xl" />
            <h2 className="font-semibold text-sm md:text-base">Google</h2>
          </div>
          <div className="animate-moveY w-[6rem] md:w-[8rem] lg:w-[9rem] h-[6rem] md:h-[8rem] lg:h-[9rem] bg-white rounded-full flex flex-col justify-center items-center cursor-pointer transition-all duration-300 ease-in-out hover:invert hover:scale-105">
            <AiFillAmazonCircle size="1.5em" className="text-xl md:text-2xl lg:text-3xl" />
            <h2 className="font-semibold text-sm md:text-base">Amazon</h2>
          </div>
          <div className="animate-moveY w-[6rem] md:w-[8rem] lg:w-[9rem] h-[6rem] md:h-[8rem] lg:h-[9rem] bg-white rounded-full flex flex-col justify-center items-center cursor-pointer transition-all duration-300 ease-in-out hover:invert hover:scale-105">
            <AiFillYoutube size="1.5em" className="text-xl md:text-2xl lg:text-3xl" />
            <h2 className="font-semibold text-sm md:text-base">Youtube</h2>
          </div>
          <div className="animate-moveY w-[6rem] md:w-[8rem] lg:w-[9rem] h-[6rem] md:h-[8rem] lg:h-[9rem] bg-white rounded-full flex flex-col justify-center items-center cursor-pointer transition-all duration-300 ease-in-out hover:invert hover:scale-105">
            <AiFillInstagram size="1.5em" className="text-xl md:text-2xl lg:text-3xl" />
            <h2 className="font-semibold text-sm md:text-base">Instagram</h2>
          </div>
        </article>
      </div>
    </div>
  </>
  
  
  );  
}

export default Home;
