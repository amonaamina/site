// ProductSection.jsx
import React, { useState , useRef  } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./ProductSection.css";
import { Link } from "react-router-dom";
import img from "../img/WhatsApp Image 2026-05-15 at 11.35.39 (1).jpeg";
import img1 from "../img/WhatsApp Image 2026-05-15 at 11.35.39.jpeg";
import img2 from "../img/WhatsApp Image 2026-05-15 at 11.35.39 (2).jpeg";
import img3 from "../img/WhatsApp Image 2026-05-15 at 11.35.39 (3).jpeg";
import img4 from "../img/WhatsApp Image 2026-05-15 at 11.35.38 (1).jpeg";



const images = [
  img,
  img1,
  img2,
  img3,
  img4,
];

export default function ProductSection() {
 const [activeImageIndex, setActiveImageIndex] = useState(0);
     const swiperRef = useRef(null);
  return (
    <div className="divp">
        <div className='titelP'>
                <span className="eyebrow">ENTDECKE UNSEREN BESTSELLER</span>
                <h2>So geht Sonnenschutz: Terrassenüberdachung aus Polycarbonat</h2>
        </div>
    
    <div className="product-container">
      {/* LEFT: IMAGE SLIDER */}
      <div className="slider-section">
        <Swiper
                                    spaceBetween={10}
                                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                                    initialSlide={activeImageIndex}
                                  >
                                    {images.map((img, index) => (
                                      <SwiperSlide key={index}>
                                        <img src={img} alt="Terrasse" className="main" />
                                      </SwiperSlide>
                                    ))}
                                  </Swiper>
                                         
                                                 {/* THUMBNAILS */}
                                  <div className="thumbnails">
                                    {images.map((img, index) => (
                                      <img
                                        key={index}
                                        src={img}
                                        alt="thumb"
                                        className={index === activeImageIndex ? "thumb active" : "thumb"}
                                       onClick={() => {
  setActiveImageIndex(index);
  swiperRef.current?.slideTo(index);
}}
                                      />
                                    ))}
                                  </div>
      </div>

      {/* RIGHT: PRODUCT INFO */}
      <div className="info-section">
        <div className="stars">★★★★★</div>

        <h2>Wintergartenmeister Terrassenüberdachung aus Polycarbonat</h2>

        

        <p>
          Unsere <b>Terrassenüberdachung aus Polycarbonat</b> bietet eine moderne, langlebige und kostengünstige Lösung für den Schutz Ihrer Terrasse vor Witterungseinflüssen. Die Polycarbonatplatten sind besonders schlagfest, leicht und UV-beständig – ideal für jede Jahreszeit. Wenn Sie sich für ALUSYSTEM-NRW entscheiden, profitieren Sie von höchster Qualität, fachgerechter Montage und persönlicher Beratung.
    <b></b>.
        </p>

        <ul>
          <li>✔️ Hohe Stabilität & Sicherheitsstandard (DIN 18065)</li>
          <li>✔️ Leichtes und äußerst bruchfestes Material</li>
          <li>✔️ Modernes Design – Glas, Stab oder Blechfüllung</li>
          <li>✔️ Witterungs- und temperaturbeständig (-40°C bis +120°C)</li>
          <li>✔️ Ideal für moderne, lichtdurchflutete Überdachungen</li>
        </ul>

        <Link to="/beratung"><button >JETZT ENTDECKEN</button></Link>
       
      </div>
    </div>
    </div>
  );
}