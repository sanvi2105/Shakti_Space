import React, { useState, useEffect } from "react";
import { NavbarMenu } from "../../data.js";
import { MdComputer, MdMenu } from "react-icons/md";
import { motion } from "framer-motion";
import ResponsiveMenu from "./ResponsiveMenu";
import {Link} from "react-router-dom";
import { useTranslation } from "react-i18next";







const Navbar = () => {
    const { i18n } = useTranslation();
    const [isOpen,setIsOpen]=React.useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser && storedUser !== "undefined") {
        try {
            setUser(JSON.parse(storedUser));
        } catch (error) {
            console.error("Invalid JSON in localStorage:", error);
            setUser(null);
        }
    } else {
        setUser(null);
    }
  }, []);
  return <>
  <nav>
  <motion.div
     initial={{opacity:0}}
     animate={{opacity:1}}
     transition={{duration:0.5,delay:0.5}}
  >
    <div className="container flex justify-between items-center py-6">
        {/*logo section */}
        <div className="text-2xl flex items-center gap-2 font-bold">
            <MdComputer className="text-3xl text-secondary" />
            <p>ShaktiSpace</p>

        </div>
    
        {/*Menu section */}
        <div className="hidden lg:block">
            <ul className="flex items-center gap-6">
                {
                    NavbarMenu.map((item) => {
                        return (
                            <li key={item.id}>
                                <a
                                 href={item.link}
                                className="inline-block text-black text-gray-600 text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-secondary transition-all duration-300
                                font-semibold"
                                >
                                    {item.title}</a>
                            </li>
                        );
                    })
                }
            </ul>

        </div>
        {/*CTA  Button section */}
        <div className="hidden lg:flex items-center gap-4">

           {/*  Language Switch */}
            <div className="flex gap-2">
              <button 
                onClick={() => i18n.changeLanguage("en")}
                    className="px-2 py-1 border rounded hover:bg-gray-100"
               >
                  EN
                </button>
                <button 
                    onClick={() => i18n.changeLanguage("hi")}
                   className="px-2 py-1 border rounded hover:bg-gray-100"
                >
                  हिंदी
                 </button>
               </div>

  {/* Auth Buttons */}
  {/* <Link to="/login" className="font-semibold">Login</Link>
  <Link to="/register" className="text-white !bg-secondary font-semibold rounded-full px-6 py-2">Register</Link> */}
  {user ? (
        <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center cursor-pointer">
            <Link to={user?.role === "organisation" ? "/org-dashboard" : "/dashboard"}>
                <img 
                    src="/image.png" 
                    alt="profile"
                    className="w-10 h-10 rounded-full object-cover"
                />
            </Link>
        </div>
    ) : (
        <>
            <Link to="/login" className="font-semibold">Login</Link>
            <Link to="/register" className="text-white !bg-secondary font-semibold rounded-full px-6 py-2">Register</Link>
        </>
    )}

</div>

    
        {/*Mobile Hamburger Menu section */}
        <div className="lg:hidden" onClick={() =>{setIsOpen(!isOpen)}}> 
            <MdMenu className="text-4xl" />
        </div>

    </div>
    </motion.div>
  </nav>
  {/**Mobile sidebar section */}
  <ResponsiveMenu isOpen={isOpen} />

   
  </>;
  
}

export default Navbar