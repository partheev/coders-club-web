import React from "react";
import "./about.css";
export const About = () => {
  return (
    <div>
      <h1 className="title text-5xl text-slate-600 font-bold ml-32 mt-14">
        ABOUT US
      </h1>

      <div className="mt-20">
        <h2 className="text-3xl text-center text-gray-600 mb-10">Vision</h2>
        <div className="titlesx flex flex-row justify-center space-x-9">
          <div>
            <img
              className=" rounded-md about-images w-60 h-52"
              src="./letscode.jpg"
              alt="letscode"
            />
          </div>
          <div className="box-border w-6/12">
            <p className="para-about mt-4">
              Coding is a basic literacy in the digital age, and kids need to
              understand and work with and understand the technology around
              them. Having children learn coding at a young age prepares them
              for the future. Coding helps children with communication,
              creativity, math, writing, and confidence.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-3xl text-center text-gray-600 mb-10">Mission</h2>
        <div className="titlesxy flex flex-row justify-center space-x-9">
          <div className="box-border w-6/12">
            <p className="para-about mt-4">
              A unique series that provides a framework for teaching coding
              skills. In Black Flag A Coding Club Mission, your problem solving
              skills are tested as you join Cal on a dangerous adventure into
              the underground world of the anarchists who are fighting to
              restore freedom to the citizens of New Edgehill.{" "}
            </p>
          </div>
          <div>
            <img
              className="rounded-md about-images w-60 h-52 ml-3"
              src="./download_about.jpg"
              alt="letscode"
            />
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-3xl text-center text-gray-600 mb-10">Volunteers</h2>
        <div className="titlesx flex flex-row justify-center space-x-9">
          <div>
            <img
              className="rounded-md about-images w-60 h-52"
              src="./volunteers.jpg"
              alt="letscode"
            />
          </div>
          <div className="box-border w-6/12 space-x-9">
            <p className="para-about mt-4">
              Coding is a basic literacy in the digital age, and kids need to
              understand and work with and understand the technology around
              them. Having children learn coding at a young age prepares them
              for the future. Coding helps children with communication,
              creativity, math, writing, and confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
