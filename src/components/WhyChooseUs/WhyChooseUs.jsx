import React from 'react'
import {GrYoga} from "react-icons/gr";
import {FaDumbbell} from "react-icons/fa6"
import {GiGymBag} from "react-icons/gi";
import {motion} from "framer-motion";
import { SlideLeft } from "../../utility/animation";
import { FaUsers, FaChalkboardTeacher, FaHeartbeat, FaBriefcase } from "react-icons/fa";



const WhyChooseData=[
    {
        id:1,
        title:"Safe & Supportive Community",
        desc:"A trusted space where women can connect, share experiences, and grow without fear or judgment.",
        link:"/",
        icon: <FaUsers />,
        bgColor:"#0063ff",
        delay:0.3,
    },
    {
        id:2,
        title:"Skill Development Opportunities",
        desc:"Access curated workshops, mentorship, and training programs to build confidence and financial independence.",
        link:"/",
        icon:<FaChalkboardTeacher />,
        bgColor:"#73bc00",
        delay:0.6,
    },
    {
        id:3,
        title:"Mental Health & Wellness",
        desc:"Resources, counseling support, and guided sessions focused on emotional strength and self-care.",
        link:"/",
        icon:<FaHeartbeat />,
        bgColor:"#fa6400",
        delay:0.9,
    },
    {
        id:4,
        title:"Flexible Work Options",
        desc:"Discover part-time, remote, and home-based opportunities tailored for women.",
        link:"/",
        icon:<FaBriefcase />,
        bgColor:"#fe6baa",
        delay:0.3,
    },
]

const WhyChooseUs = () => {
  return (
    <div className="bg-[#f9fafc]">
        <div className="container py-24">
            {/**header section */}
           
                <div className="space-y-4 p-6 text-center max-w-[500px] mx-auto mb-5">
                    <h1 className="uppercase font-semibold text-pink-600">Why Choose Us</h1>
                    <p className="font-semibold text-3xl" >Benifits of Women Enterpreneurship Opportunities</p>
                </div>

            {/**cards section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {
                    WhyChooseData.map((item) => {
                        return (
                            <motion.div 
                             key={item.id}
                             variants={SlideLeft(item.delay)}
                             initial="hidden"
                             whileInView={"visible"}
                            
                             className="space-y-4 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.1)]"
                            >
                                {/**icon section */}
                                <div style={{backgroundColor:item.bgColor}} className="w-10 h-10 rounded-lg flex justify-center items-center text-white">
                                    <div className="text-2xl">{item.icon} </div>
                                </div>
                                <p className="text-2xl font-semibold">{item.title}</p>
                                <p className="text-sm text-gray-500">{item.desc}</p>
                            </motion.div>
                        )
                    })
                }
            </div>
            

        </div>
    </div>
  )
}

export default WhyChooseUs