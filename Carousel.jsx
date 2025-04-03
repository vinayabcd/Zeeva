// Import Swiper styles and components
// import './C.css';

// Import Swiper styles and components
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'tailwindcss';

const Carousel = () => {
  return (
    <div className='mt-18.5 pt-0 h-fit w-full text-center z-[-1]'>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="fire-carousel"
      >
        {/* Slide 1 - Fire Safety Banner */}
        <SwiperSlide>
          <div className="slide-content">
            <img src="https://www.ssents.com/hubfs/fire%20safety-1.jpeg#keepProtocol "className=" w-full h-[500px] object-cover" alt="Fire Safety Solutions" />
           <div className='fixed bottom-5 flex flex-col items-center text-center max-w-[70%]'>
           <h2 className="text-white bg-black/60 p-2 inline-block rounded-md relative">🔥 Protect Your Property with Advanced Fire Solutions</h2>
           <p className="text-white bg-black/60  p-2 inline-block rounded-md relative">Smart Fire Alarms, Extinguishers & Emergency Response</p>
            </div> 
          </div>
        </SwiperSlide>

        {/* Slide 2 - Product Showcase */}
        <SwiperSlide>
          <div className="slide-content">
            <img src="https://eurofyre.co.uk/wp-content/uploads/2020/09/Wi-Fyre-SmartConnect-Page-Featured-Image.jpg"className=" w-full h-[500px] object-cover" alt="Smart Fire Alarm" />
           <div className='fixed bottom-5 flex flex-col items-center text-center max-w-[70%]'>
           <h2 className="text-white bg-black/60 p-2 inline-block rounded-md relative text-center">🚨 Smart Fire Alarm System</h2>
           <p className="text-white bg-black/60 p-2 inline-block rounded-md relative">Real-time fire detection with instant mobile alerts.</p>
            </div> 
          </div>
        </SwiperSlide>

        {/* Slide 3 - Emergency Support */}
        <SwiperSlide>
          <div className="slide-content">
            <img src="https://summitcompanies.com/wp-content/uploads/2020/04/fire-protection-engineer_small.jpg"className=" w-full h-[500px] object-cover" alt="Emergency Fire Support" />
           <div className='fixed bottom-5 flex flex-col items-center text-center max-w-[70%]'>
           <h2 className="text-white bg-black/60 p-2 inline-block rounded-md relative">📞 24/7 Equipment Maintanence</h2>
           <p className="text-white bg-black/60  p-2 inline-block rounded-md relative">Call us anytime for quick fire hazard assistance.</p>
            </div> 
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
