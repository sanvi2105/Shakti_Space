import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { 
  FaChalkboardTeacher, 
  FaUtensils, 
  FaHandsHelping, 
  FaBirthdayCake, 
  FaBoxes, 
  FaMotorcycle, 
  FaPaintBrush, 
  FaLaptopCode 
} from "react-icons/fa";
import { motion } from "framer-motion";
import { SlideLeft } from "../../utility/animation";


const JobPortal = () => {
  const { t } = useTranslation();
  const [selectedJob, setSelectedJob] = useState(null);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    experience: "",
    skills: "",
    availability: "",
    whyHire: "",
  });

  const handleApplyClick = (jobTitle) => {
    setSelectedJob(jobTitle);
  };

  const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  const token = localStorage.getItem("token");
  if (!token) {
    alert("Please login first");
    return;
  }

  try {
    const res = await fetch("http://localhost:8001/api/applications/apply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        ...formData,
        jobTitle: selectedJob,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      setAppliedJobs((prev) => [...prev, selectedJob]);
      setSelectedJob(null);
      setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
        experience: "",
        skills: "",
        availability: "",
        whyHire: "",
      });
    } else {
      alert(data.message);
    }
  } catch(e) {
    console.log(e);
  }
};

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold text-center mb-6 ">{t("workHub")}</h1>
     <h1 className="text-3xl font-bold text-center mb-6 ">
           {t("exploreJobs")}</h1>


      {/* First row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Tutor */}

         
        <motion.div 
            variants={SlideLeft(0.3)}   // adjust 
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }} 
         className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 bg-white"
        >
          <div className="flex items-center gap-4 mb-4 !text-secondary">
            <FaChalkboardTeacher className=" w-10 h-10 text-orange-300" />
            <h2 className="font-bold text-xl">{t("tutor")}</h2>
          </div>
          <p className="text-gray-600 mb-3">
            {t("tutorDesc")}
          </p>
          <p className="text-sm text-gray-400 mb-4">Part-time | Local | ₹200/hr</p>
          {/* <button className="w-full !bg-secondary text-white font-semibold rounded-full py-2 hover:bg-pink-700 transition">
            Apply Now
          </button> */}
         <button
          onClick={() => handleApplyClick("Tutor")}
          disabled={appliedJobs.includes("Tutor")}
          className={`w-full py-2 rounded-full font-semibold transition duration-300 ${
            appliedJobs.includes("Tutor")
              ? "bg-green-500 text-white cursor-not-allowed"
              : "bg-pink-600 text-white hover:bg-pink-700 active:scale-95"
          }`}
        >
          {appliedJobs.includes("Tutor") ? t("applied") : t("apply")}
        </button>
        </motion.div>

        {/* Home Cook */}
        <motion.div 
         variants={SlideLeft(0.6)}   // adjust 
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }} 
         
         className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 bg-white">
          <div className="flex items-center gap-4 mb-4 !text-secondary">
            <FaUtensils className="w-10 h-10 text-blue-700" />
            <h2 className="font-bold text-xl">{t("homeCook")}</h2>
          </div>
          <p className="text-gray-600 mb-3">
            {t("homeCookdesc")}
          </p>
          <p className="text-sm text-gray-400 mb-4">Flexible Hours | Local | ₹250/day</p>
          {/* <button className="w-full !bg-secondary text-white font-semibold rounded-full py-2 hover:bg-pink-700 transition">
            Apply Now
          </button> */}
          <button
            onClick={() => handleApplyClick("Home Cook")}
            disabled={appliedJobs.includes("Home Cook")}
            className={`w-full py-2 rounded-full font-semibold transition duration-300 ${
              appliedJobs.includes("Home Cook")
                ? "bg-green-500 text-white cursor-not-allowed"
                : "bg-pink-600 text-white hover:bg-pink-700 active:scale-95"
            }`}
          >
           {appliedJobs.includes("Home Cook") ? t("applied") : t("apply")}
          </button>
        </motion.div>

        {/* House Helper */}
        <motion.div 
         variants={SlideLeft(0.9)}   // adjust 
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }} 

        
         className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 bg-white">
          <div className="flex items-center gap-4 mb-4 !text-secondary">
            <FaHandsHelping className="w-10 h-10 text-purple-600" />
            <h2 className="font-bold text-xl">{t("houseHelper")}</h2>
          </div>
          <p className="text-gray-600 mb-3">
            {t("houseHelperdesc")}
          </p>
          <p className="text-sm text-gray-400 mb-4">Part-time | Local | ₹150/day</p>
          {/* <button className="w-full !bg-secondary text-white font-semibold rounded-full py-2 hover:bg-pink-700 transition">
            Apply Now
          </button> */}
          <button
            onClick={() => handleApplyClick("House Helper")}
            disabled={appliedJobs.includes("House Helper")}
            className={`w-full py-2 rounded-full font-semibold transition duration-300 ${
              appliedJobs.includes("House Helper")
                ? "bg-green-500 text-white cursor-not-allowed"
                : "bg-pink-600 text-white hover:bg-pink-700 active:scale-95"
            }`}
          >
            {appliedJobs.includes("House Helper") ? t("applied") : t("apply")}
        </button>
        </motion.div>
      </div>

      {/* Second row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {/* Baking Helper */}
        <motion.div 
          variants={SlideLeft(0.4)}   // adjust 
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }} 
        className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 bg-white">
          <div className="flex items-center gap-4 mb-4 !text-secondary">
            <FaBirthdayCake className="w-10 h-10 text-green-500" />
            <h2 className="font-bold text-xl">{t("bakingHelper")}</h2>
          </div>
          <p className="text-gray-600 mb-3">
            {t("bakingHelperdesc")}
          </p>
          <p className="text-sm text-gray-400 mb-4">Part-time | Local | ₹200/day</p>
          {/* <button className="w-full !bg-secondary text-white font-semibold rounded-full py-2 hover:bg-pink-700 transition">
            Apply Now
          </button> */}
          <button
            onClick={() => handleApplyClick("Baking Helper")}
            disabled={appliedJobs.includes("Baking Helper")}
            className={`w-full py-2 rounded-full font-semibold transition duration-300 ${
              appliedJobs.includes("Baking Helper")
                ? "bg-green-500 text-white cursor-not-allowed"
                : "bg-pink-600 text-white hover:bg-pink-700 active:scale-95"
            }`}
          >
            {appliedJobs.includes("Baking Helper") ? t("applied") : t("apply")}
          </button>
        </motion.div>

        {/* Packing Assistant */}
        <motion.div 
         variants={SlideLeft(0.5)}   // adjust 
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }} 
        className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 bg-white">
          <div className="flex items-center gap-4 mb-4 !text-secondary">
            <FaBoxes className="w-10 h-10 text-red-600" />
            <h2 className="font-bold text-xl">{t("packingAssistant")}</h2>
          </div>
          <p className="text-gray-600 mb-3">
            {t("packingAssistantdesc")}
          </p>
          <p className="text-sm text-gray-400 mb-4">Part-time | Local | ₹150/day</p>
          {/* <button className="w-full !bg-secondary text-white font-semibold rounded-full py-2 hover:bg-pink-700 transition">
            Apply Now
          </button> */}
          <button
            onClick={() => handleApplyClick("Packing Assistant")}
            disabled={appliedJobs.includes("Packing Assistant")}
            className={`w-full py-2 rounded-full font-semibold transition duration-300 ${
              appliedJobs.includes("Packing Assistant")
                ? "bg-green-500 text-white cursor-not-allowed"
                : "bg-pink-600 text-white hover:bg-pink-700 active:scale-95"
            }`}
          >
            {appliedJobs.includes("Packing Assistant") ? t("applied") : t("apply")}
          </button>
        </motion.div>

        {/* Delivery Person */}
        <motion.div 
         variants={SlideLeft(0.6)}   // adjust 
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }} 
        className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 bg-white">
          <div className="flex items-center gap-4 mb-4 !text-secondary">
            <FaMotorcycle className="w-10 h-10 text-red-900" />
            <h2 className="font-bold text-xl">{t("deliveryPerson")}</h2>
          </div>
          <p className="text-gray-600 mb-3">
            {t("deliveryPersondesc")}
          </p>
          <p className="text-sm text-gray-400 mb-4">Part-time | Local | ₹250/day</p>
          {/* <button className="w-full !bg-secondary text-white font-semibold rounded-full py-2 hover:bg-pink-700 transition">
            Apply Now
          </button> */}
          <button
            onClick={() => handleApplyClick("Delivery Person")}
            disabled={appliedJobs.includes("Delivery Person")}
            className={`w-full py-2 rounded-full font-semibold transition duration-300 ${
              appliedJobs.includes("Delivery Person")
                ? "bg-green-500 text-white cursor-not-allowed"
                : "bg-pink-600 text-white hover:bg-pink-700 active:scale-95"
            }`}
          >
            {appliedJobs.includes("Delivery Person") ? t("applied") : t("apply")}
          </button>
        </motion.div>
      </div>
             {/* Second row - Unique micro jobs */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                   {/* Freelance Designer */}
                 <motion.div
                  variants={SlideLeft(0.1)}   // adjust 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}  className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 bg-white">
                  <div className="flex items-center gap-4 mb-4 !text-secondary">
                    <FaPaintBrush className="w-10 h-10 text-yellow-700" />
                     <h2 className="font-bold text-xl">{t("freelanceDesigner")}</h2>
                     </div>
                       <p className="text-gray-600 mb-3">
                        {t("freelanceDesignerdesc")}
                      </p>
                      <p className="text-sm text-gray-400 mb-4">Part-time | Remote | ₹250/day</p>
                  {/* <button className="w-full !bg-secondary text-white font-semibold rounded-full py-2 hover:bg-pink-700 transition">
                 Apply Now
                  </button> */}
                  <button
                    onClick={() => handleApplyClick("Freelance Designer")}
                    disabled={appliedJobs.includes("Freelance Designer")}
                    className={`w-full py-2 rounded-full font-semibold transition duration-300 ${
                      appliedJobs.includes("Freelance Designer")
                        ? "bg-green-500 text-white cursor-not-allowed"
                        : "bg-pink-600 text-white hover:bg-pink-700 active:scale-95"
                    }`}
                  >
                    {appliedJobs.includes("Freelance Designer") ? t("applied") : t("apply")}
                  </button>
               </motion.div>
 
             {/* Social Media Assistant */}
               <motion.div
                variants={SlideLeft(0.2)}   // adjust 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} 
               
               className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 bg-white">
               <div className="flex items-center gap-4 mb-4 !text-secondary">
                <FaLaptopCode className="w-10 h-10 text-orange-500" />
                <h2 className="font-bold text-xl">{t("socialmediaAssistant")}</h2>
              </div>
                <p className="text-gray-600 mb-3">
                  {t("socialmediaAssistantdesc")}
               </p>
               <p className="text-sm text-gray-400 mb-4">Part-time | Remote | ₹200/day</p>
              {/* <button className="w-full !bg-secondary text-white font-semibold rounded-full py-2 hover:bg-pink-700 transition">
              Apply Now
              </button> */}
              <button
                onClick={() => handleApplyClick("Social Media Assistant")}
                disabled={appliedJobs.includes("Social Media Assistant")}
                className={`w-full py-2 rounded-full font-semibold transition duration-300 ${
                  appliedJobs.includes("Social Media Assistant")
                    ? "bg-green-500 text-white cursor-not-allowed"
                    : "bg-pink-600 text-white hover:bg-pink-700 active:scale-95"
                }`}
              >
                {appliedJobs.includes("Social Media Assistant") ? t("applied") : t("apply")}
              </button>
            </motion.div>

             {/* Event Organizer */}
             <motion.div
               variants={SlideLeft(0.3)}   // adjust 
                initial="hidden"
                whileInView="visible"
             viewport={{ once: true }} 
                className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 bg-white">
               <div className="flex items-center gap-4 mb-4 !text-secondary">
                  <FaHandsHelping className="w-10 h-10 text-blue-300" />
                 <h2 className="font-bold text-xl">{t("eventOrganiser")}</h2>
               </div>
              <p className="text-gray-600 mb-3">
                {t("eventOrganiserdesc")} </p>
              <p className="text-sm text-gray-400 mb-4">Part-time | Local | ₹300/day</p>
             {/* <button className="w-full !bg-secondary text-white font-semibold rounded-full py-2 hover:bg-pink-700 transition">
              Apply Now
             </button> */}
             <button
                onClick={() => handleApplyClick("Event Organizer")}
                disabled={appliedJobs.includes("Event Organizer")}
                className={`w-full py-2 rounded-full font-semibold transition duration-300 ${
                  appliedJobs.includes("Event Organizer")
                    ? "bg-green-500 text-white cursor-not-allowed"
                    : "bg-pink-600 text-white hover:bg-pink-700 active:scale-95"
                }`}
              >
                {appliedJobs.includes("Event Organizer") ? t("applied") : t("apply")}
              </button>
           </motion.div>
        </div>
        {selectedJob && (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
    
    <div className="bg-white w-full max-w-2xl rounded-2xl p-8 shadow-2xl relative overflow-y-auto max-h-[90vh]">
      
      {/* Close Button */}
      <button
        onClick={() => setSelectedJob(null)}
        className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl"
      >
        ✕
      </button>

      <h2 className="text-2xl font-bold mb-6">
        {t("applyFor")} {selectedJob}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="name"
          placeholder={t("fullName")}
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border p-3 rounded-lg"
        />

        <textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
          rows="2"
          className="w-full border p-3 rounded-lg"
        />

        <textarea
          name="experience"
          placeholder="Previous Experience (if any)"
          value={formData.experience}
          onChange={handleChange}
          rows="2"
          className="w-full border p-3 rounded-lg"
        />

        <textarea
          name="skills"
          placeholder="Skills (e.g. Cooking, Teaching, Designing...)"
          value={formData.skills}
          onChange={handleChange}
          rows="2"
          className="w-full border p-3 rounded-lg"
        />

        <select
          name="availability"
          value={formData.availability}
          onChange={handleChange}
          required
          className="w-full border p-3 rounded-lg"
        >
          <option value="">Select Availability</option>
          <option value="Morning">Morning</option>
          <option value="Afternoon">Afternoon</option>
          <option value="Evening">Evening</option>
          <option value="Full Time">Full Time</option>
        </select>

        <textarea
          name="whyHire"
          placeholder="Why should we hire you?"
          value={formData.whyHire}
          onChange={handleChange}
          rows="3"
          className="w-full border p-3 rounded-lg"
        />

        <div className="flex justify-end gap-4 pt-4">
          <button
            type="button"
            onClick={() => setSelectedJob(null)}
            className="px-6 py-2 bg-gray-400 text-white rounded-full"
          >
            {t("cancel")}
          </button>

          <button
            type="submit"
            className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
          >
           {t("submit")}
          </button>
        </div>

      </form>
    </div>
  </div>
)}
    </div>
  );
};

export default JobPortal;
