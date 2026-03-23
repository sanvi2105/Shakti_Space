// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/Hero/Hero";
// import NumberCounter from "./components/NumberCounter/NumberCounter";
// import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
// import { Routes, Route } from "react-router-dom";
// import LoginPage from "./components/Login/LoginPage";
// import Dashboard from "./components/Dashboard/Dashboard";
// import RegisterPage from "./components/Login/RegisterPage";
// import LearningPage from "./components/Resources/LearningPage";




// const App=()=>{
//   return <main className="overflow-x-hidden">
//     <Navbar />
//     <Routes>
//       <Route path="/" element={
//         <>
//           <Hero />
//           <NumberCounter />
//           <WhyChooseUs />
//         </>
//       }/>
//       <Route path="/login" element={
//         <LoginPage/>
//       }/>
//       <Route path="/register" element={
//         <RegisterPage/>
//       }/>
//       <Route path="/dashboard" element={<Dashboard />} />
//       <Route path="/resource" element={<LearningPage/>}/>
//     </Routes>
//   </main>
// };
// export default App;
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import NumberCounter from "./components/NumberCounter/NumberCounter";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Testimonials from "./components/Testimonials/Testimonials";
import Mentors from "./components/Mentors/Mentors";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/Login/LoginPage";
import Dashboard from "./components/Dashboard/Dashboard";
import RegisterPage from "./components/Login/RegisterPage";
import LearningPage from "./components/Resources/LearningPage";
import ResourcePage from "./components/Resources/ResourcePage"; // 👈 ADD
import JobPortal from "./components/jobportal/jobportal";
import SuccessStories from "./components/Successstories/Successstories";
import "./i18n";


const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <NumberCounter />
              <WhyChooseUs />
              <Testimonials />
              <Mentors />
              <FAQ />
              <Footer />
            </>
          }
        />
         <Route path="/successstories" element={<SuccessStories />} />
        <Route path="/jobs" element={<JobPortal />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resource"  element={<LearningPage />} />
        <Route path="/resource/:moduleId" element={<ResourcePage />} />
        <Route path="/user-dashboard" element={<Dashboard />} />
      </Routes>
    </main>
  );
};

export default App;
