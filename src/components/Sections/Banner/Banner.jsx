import { useEffect, useRef, useState } from "react";
import {
  Autoplay,
  Controller,
  EffectCoverflow,
  Navigation,
  Pagination,
  Parallax,
  Thumbs,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";





const Banner = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [slides, setSlides] = useState([]);
  const mainRef = useRef(null);

  useEffect(() => {
    fetch("/banner.json")
      .then((res) => res.json())
      .then((data) => setSlides(data))
      .catch((err) => console.error("Failed to load slides:", err));
  }, []);
  
  return (
    <div className="overflow-hidden relative">
      <Swiper
        ref={mainRef}
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow, Thumbs, Parallax, Controller]}
        spaceBetween={40}
        slidesPerView={1.5}
        loop={true}
        centeredSlides={true}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        effect={"coverflow"}
        grabCursor={true}
        coverflowEffect={{
          rotate: 25,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        }}
        parallax={true}
        thumbs={{ swiper: thumbsSwiper }}
        className="w-full h-[65vh]"
      >
        {slides.map((s) => (
          <SwiperSlide key={s.id} className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={s.img}
              alt={s.title}
              className="w-full h-full object-cover brightness-90"
            />


            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-10 md:p-16 text-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-3">{s.title}</h2>
              <p className="text-lg md:text-2xl opacity-90 mb-5">{s.subtitle}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
