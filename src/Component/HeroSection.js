import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "./HeroSection.css";

import phone from "../img/phone.png";
import sun from "../img/sun.png";
import design from "../img/design.png";
import tools from "../img/design-tools.png";

export default function HeroSection() {
  const content = [
    {
      text: "+491747086562",
      image: phone,
      alt: "Sonne",
    }
  ];

  return (
    <section className="hero">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
      >
        {content.map((item, i) => (
          <SwiperSlide key={i}>
            <h1 className="hero-text">
              <a href="#" className="hero-link">
                <img src={item.image} alt={item.alt} className="hero-icon" />
                <span>{item.text}</span>
                <img src={item.image} alt={item.alt} className="hero-icon" />
              </a>
            </h1>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}