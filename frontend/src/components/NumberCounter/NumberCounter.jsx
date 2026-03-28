import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const NumberCounter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,   // run only once
    threshold: 0.3,      // trigger when 30% visible
  });

  return (
    <div ref={ref} className="!bg-secondary text-white py-12">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Expert */}
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-semibold">
            {inView && <CountUp start={0} end={898} duration={3} />}
          </p>
          <p>Expert</p>
        </div>

        {/* Hours Content */}
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-semibold">
            {inView && (
              <CountUp
                end={20000}
                separator=","
                suffix="+"
                duration={3}
              />
            )}
          </p>
          <p>Hours Content</p>
        </div>

        {/* Opportunities */}
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-semibold">
            {inView && <CountUp end={298} duration={3} />}
          </p>
          <p>Opportunities</p>
        </div>

        {/* Users */}
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-semibold">
            {inView && (
              <CountUp
                end={72878}
                separator=","
                suffix="+"
                duration={3}
              />
            )}
          </p>
          <p>Users</p>
        </div>

      </div>
    </div>
  );
};

export default NumberCounter;

// import React from 'react'
// import CountUp from 'react-countup';

// const NumberCounter = () => {
//   return (
//     <div className="!bg-secondary text-white py-12">
//         <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
//             <div className="flex flex-col items-center justify-center">
//                 <p className="text-3xl font-semibold">
//                     <CountUp start={0} end={898} duration={3} 
//                     enableScrollSpy={true} 
//                     scrollSpyDelay={true} />  
//                 </p>
//                 <p>Expert </p>

//             </div>
//             <div className="flex flex-col items-center justify-center">
//                 <p className="text-3xl font-semibold">
//                     <CountUp
//                     end={20000}
//                     seaparators=","
//                     suffix="+"
//                     duration={3}
//                     enableScrollSpy={true} 
//                     scrollSpyDelay={true}
//                     />
//                 </p>
//                 <p>Hours Content</p>

//             </div>
//             <div className="flex flex-col items-center justify-center">
//                 <p className="text-3xl font-semibold">
//                     <CountUp 
//                     end={298}
//                     duration={3}
//                     enableScrollSpy={true}
//                     scrollSpyDelay={true}
//                     /> 
//                 </p>
//                 <p>Opportunities</p>

//             </div>
//             <div className="flex flex-col items-center justify-center">
//                 <p className="text-3xl font-semibold">
//                     <CountUp
//                      end={72878}
//                      separator=","
//                      suffix="+"
//                      duration={3}
//                      enableScrollSpy={true}
//                      scrollSpyDelay={true}
//                      /> 
//                 </p>
//                 <p>Users</p>

//             </div>
//         </div>
//     </div>
//   )
// }

// export default NumberCounter