import React from "react";
import neha from "../../assets/neha.png";
import priya from "../../assets/priya.png";
import sara from "../../assets/sara.png";

const Mentors = () => {
  return (
    <section className="py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h4 className="text-pink-600 font-semibold tracking-widest text-lg mb-3">
          OUR MENTORS
        </h4>

        <h2 className="text-3xl md:text-4xl font-bold mb-14">
          Meet Our Experts
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">

            <img
              src={neha}
              alt="Dr. Neha Kapoor"
              className="w-full h-60 object-cover object-center"
            />

            <div className="p-6">
              <h4 className="text-2xl font-semibold mb-2">
                Dr. Neha Kapoor
              </h4>
              <p className="text-gray-500 text-lg">
                Business Coach
              </p>
            </div>

          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">

            <img
              src={priya}
              alt="Priya Singh"
              className="w-full h-60 object-cover object-center"
            />

            <div className="p-6">
              <h4 className="text-2xl font-semibold mb-2">
                Priya Singh
              </h4>
              <p className="text-gray-500 text-lg">
                Finance Expert
              </p>
            </div>

          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">

            <img
              src={sara}
              alt="Sara Ahmed"
              className="w-full h-60 object-cover object-center"
            />

            <div className="p-6">
              <h4 className="text-2xl font-semibold mb-2">
                Sara Ahmed
              </h4>
              <p className="text-gray-500 text-lg">
                Mental Wellness Coach
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Mentors;

