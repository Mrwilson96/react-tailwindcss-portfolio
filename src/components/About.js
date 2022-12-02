import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I am Refilwe Wilson Mahlehla.
            
            <br className="hidden lg:inline-block" />I love to Build And Design Applications.
          </h1>
          <p className="mb-8 leading-relaxed">
            I am a web designer and developer. I like to build website and creative design from scratch
            and I experiment alot. I am quietly confident, naturally currious and perpetually working on 
            improving my skills one design problem at a time. I would like to join the Sovtech Dev team as 
            I believe that I will learn a lot from the Company and also the service that Sovtech Company bring to 
            to the tech world are aligned with my dreams that I want to achieve. I also believe that the will
            also bring out the best out of me as I like to be challenged while being taught new skills. 
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Leave me a Message
            </a>
          
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}
