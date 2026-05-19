import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./GoogleReviewsSection.css";

import google from "../img/google.png"

const reviews = [
  {
    name: "Heiliger Boudalh",
    rating: 5,
    text: "Schnelle Produktion. Coole Installation. Ausgezeichneter Preis. Sehr zufrieden. Ich werde ohne Zögern erneut bestellen.",
    date: "April, 2026",
    initial: "A"
  },
  {
    name: "Bamak Sakari",
    rating: 5,
    text: "Die Kommunikation war ausgezeichnet und sehr freundlich; Wir würden es auf jeden Fall empfehlen.",
    date: "April, 2026",
    initial: "B"
  },
  {
    name: "Metin Basar",
    rating: 5,
    text: "Professionelle Beratung und ausgezeichnete Erfüllung meiner Wünsche zu einem sehr niedrigen Preis. Das Personal ist sehr kompetent. Ich würde diese Firma auf jeden Fall empfehlen. Vielen Dank.",
    date: "April, 2026",
    initial: "M"
  }
  ,
  {
    name: "Kalin Ziyar",
    rating: 5,
    text: "Einer der geschicktesten Handwerker, die ich je getroffen habe. Genau, pünktlich und zuverlässig im Projektmanagement. Danke für die großartige Arbeit. Ich wünsche Ihnen weiterhin Erfolg und viele weitere Kunden.",
    date: "April, 2026",
    initial: "K"
  }
  ,
  {
    name: "a G",
    rating: 5,
    text: "Ausgezeichneter Service, schnelle und tadellose Arbeit. Diese Art von Service ist heutzutage selten. Sehr zu empfehlen!",
    date: "April, 2026",
    initial: "A"
  }
  ,
  {
    name: "Janisczek 4888",
    rating: 5,
    text: "Er hat einen wunderbaren Job gemacht. Er brachte auch eigene Ideen ein, die uns sehr gefielen. Er hat eine lange Erfahrung.",
    date: "April, 2026",
    initial: "J"
  }
];

const Stars = ({ rating }) => (
  <div className="stars">
    {"★".repeat(rating)}{"☆".repeat(5 - rating)}
  </div>
);

const GoogleReviewsSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [init, setInit] = useState(false);

  return (
    <section className="reviews-section">

      {/* NAVIGATION BUTTONS */}
      <button ref={prevRef} className="swiper-button-prev" />
      <button ref={nextRef} className="swiper-button-next" />

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={
          init
            ? {
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }
            : false
        }
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        onSwiper={() => setInit(true)}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {reviews.map((r, i) => (
          <SwiperSlide key={i}>
            <div className="review-card">
              <div className="review-header">
                <div className="user-initial">{r.initial}</div>

                <div className="user-info">
                  <div className="review-name">{r.name}</div>
                  <span className="review-date">{r.date}</span>
                  
                </div>
<div className="google-logo">
                    <img width={20}  height={20} alt="Beschreibung"
                    src={google} />
                </div>
                
              </div>

                <Stars rating={r.rating} />
              <div className="review-text">{r.text}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default GoogleReviewsSection;