import React from "react";
import ananya from "../../assets/ananya.png";
import ritika from "../../assets/ritika.png";
import fatima from "../../assets/fatima.png";

const Testimonials = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h4 className="text-pink-600 font-semibold mb-3 tracking-widest text-xl">
          TESTIMONIALS
        </h4>

        <h2 className="text-3xl md:text-4xl font-bold mb-14 leading-tight">
          What Women Say <br className="hidden md:block" /> About Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white/90 backdrop-blur p-8 rounded-3xl 
shadow-[0_10px_30px_rgba(236,72,153,0.15)] 
hover:shadow-[0_20px_45px_rgba(236,72,153,0.30)] 
hover:-translate-y-2 transition-all duration-500 ease-in-out animate-fadeIn"
>
            
            <img
              src={ananya}
              alt="Ananya Sharma"
              className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-pink-200 shadow-sm"
            />

            <p className="text-gray-600 italic mb-6 leading-relaxed text-lg">
              "ShaktiSpace helped me build confidence and start my own small business."
            </p>

            <h4 className="font-semibold text-xl">Ananya Sharma</h4>
            <p className="text-sm text-gray-400">Entrepreneur</p>

          </div>

          <div className="bg-white/90 backdrop-blur p-8 rounded-3xl 
          shadow-[0_10px_30px_rgba(236,72,153,0.15)] 
          hover:shadow-[0_20px_45px_rgba(236,72,153,0.30)] 
          hover:-translate-y-2 transition-all duration-500 ease-in-out animate-fadeIn">
            
            <img
              src={ritika}
              alt="Ritika Verma"
              className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-pink-200 shadow-sm"
            />

            <p className="text-gray-600 italic mb-6 leading-relaxed text-lg">
              "The mentorship programs gave me clarity and direction."
            </p>

            <h4 className="font-semibold text-xl">Ritika Verma</h4>
            <p className="text-sm text-gray-400">Finance Learner</p>

          </div>

          <div className="bg-white/90 backdrop-blur p-8 rounded-3xl 
          shadow-[0_10px_30px_rgba(236,72,153,0.15)] 
          hover:shadow-[0_20px_45px_rgba(236,72,153,0.30)] 
          hover:-translate-y-2 transition-all duration-500 ease-in-out animate-fadeIn"
>
            
            <img
              src={fatima}
              alt="Fatima Khan"
              className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-pink-200 shadow-sm"
            />

            <p className="text-gray-600 italic mb-6 leading-relaxed text-lg">
              "A safe community where I truly felt heard and supported."
            </p>

            <h4 className="font-semibold text-xl">Fatima Khan</h4>
            <p className="text-sm text-gray-400">Community Member</p>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
