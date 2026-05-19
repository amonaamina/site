import React, { useState , useRef  } from "react";
import "./CarportPage.css";
import img from "../img/WhatsApp Image 2026-05-15 at 11.35.39 (1).jpeg";
import img1 from "../img/WhatsApp Image 2026-05-15 at 11.35.39.jpeg";
import img2 from "../img/WhatsApp Image 2026-05-15 at 11.35.39 (2).jpeg";
import img3 from "../img/WhatsApp Image 2026-05-15 at 11.35.39 (3).jpeg";
import img4 from "../img/WhatsApp Image 2026-05-15 at 11.35.38 (1).jpeg";


import zaun from "../img/WhatsApp Image 2026-05-15 at 11.51.31.jpeg";
import carport from "../img/WhatsApp Image 2026-05-15 at 11.42.30.jpeg";
import gelander from "../img/WhatsApp Image 2026-05-15 at 11.44.35.jpeg";
import lamellendach from "../img/WhatsApp Image 2026-05-15 at 11.45.29.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";
import ReviewSection from "./ReviewSection";
import GoogleReviewsSection from "./GoogleReviewsSection";
import { Link } from "react-router-dom";

export default function Terrassenueberdachung() {
   const [activeImageIndex, setActiveImageIndex] = useState(0);
  const swiperRef = useRef(null);
  const [activeTab, setActiveTab] = useState("beschreibung");
const technischeDaten  = [
  { eigenschaft: "Plattenstärken", wert: "16 mm Stegplatten" },
  { eigenschaft: "Varianten", wert: "Klar, Opal (Milchglasoptik), Bronze" },
  { eigenschaft: "Lichtdurchlässigkeit", wert: "45–82 % je nach Farbe" },
  { eigenschaft: "Standardbreite pro Platte", wert: "ca. 980 mm" },
  { eigenschaft: "Brandverhalten", wert: "B1 (schwer entflammbar nach DIN 4102)" },
  { eigenschaft: "UV-Schutz", wert: "Beidseitige UV-Beschichtung für Langlebigkeit" }
];
  const images = [
    img,
    img1,
    img2,
    img3,
    img4,
  ];
  const productsEmpfehlung = [
  {
    title: "Zaun",
    description: "modernes Design und minimalen Pflegeaufwand..",
    image: zaun,
    link: "/zaun",
  },
  {
    title: "Carport",
    description: "Schutz für Ihr Auto und mehr Raum für Ihr Zuhause.",
    image: carport,
    link: "/carport",
  },
  {
    title: "Geländer",
    description: "Erweitern Sie Ihren Wohnraum mit einem lichtdurchfluteten Wintergarten.",
    image: gelander,
    link: "/galänder",
  },
  {
    title: "Lamellendach",
    description: "Modernes Design mit verstellbaren Lamellen für perfekten Sonnenschutz.",
    image: lamellendach,
    link: "/lamellendach",
  }
];
  return (
    <div className="mdiv">
    <div className="carport-page">
      <section className="carport-hero">
        <div className="slider-section sec">
                    {/* MAIN SLIDER */}
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
              swiperRef.current.slideTo(index);
            }}
          />
        ))}
      </div>
                   </div>
        <div className="carport-info">
          <h2>Terrassenüberdachung aus Polycarbonat</h2>
          <p>
           Eine Terrassenüberdachung aus Polycarbonat bietet eine moderne, langlebige und kostengünstige Lösung für den Schutz
          </p>
        </div>
      </section>

      <section className="carport-tabs">
        <div className="tabs">
          <button
            className={activeTab === "beschreibung" ? "active" : ""}
            onClick={() => setActiveTab("beschreibung")}
          >
            Beschreibung
          </button>
          <button
            className={activeTab === "downloads" ? "active" : ""}
            onClick={() => setActiveTab("downloads")}
          >
            Downloads
          </button>
          <button
            className={activeTab === "daten" ? "active" : ""}
            onClick={() => setActiveTab("daten")}
          >
            Technische Daten
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "beschreibung" && (
         <div className="beschreibung">

  {/* Einleitung */}
  <div className="beschreibung-card">
    <h2>Terrassenüberdachung aus Polycarbonat</h2>

    <p>
      Eine Terrassenüberdachung aus Polycarbonat bietet eine moderne, langlebige und kostengünstige Lösung für den Schutz Ihrer Terrasse vor Witterungseinflüssen. Die Polycarbonatplatten sind besonders schlagfest, leicht und UV-beständig – ideal für jede Jahreszeit. Wenn Sie sich für ALUSYSTEM-NRW entscheiden, profitieren Sie von höchster Qualität, fachgerechter Montage und persönlicher Beratung.
    </p>

  </div>

<div className="beschreibung">

  {/* Vorteile */}
  <div className="beschreibung-card">
    <h3>Vorteile im Überblick</h3>

    <div className="feature-grid">

      <div className="feature-item">
        <span>✔</span>
        <p>Leichtes und äußerst bruchfestes Material</p>
      </div>

      <div className="feature-item">
        <span>✔</span>
        <p>UV-beständig mit hoher Lichtdurchlässigkeit</p>
      </div>

      <div className="feature-item">
        <span>✔</span>
        <p>Witterungs- und temperaturbeständig (-40°C bis +120°C)</p>
      </div>

      <div className="feature-item">
        <span>✔</span>
        <p>Günstiger als Glas bei gleichzeitig hoher Stabilität</p>
      </div>

      <div className="feature-item">
        <span>✔</span>
        <p>Ideal für moderne, lichtdurchflutete Überdachungen</p>
      </div>

    </div>
  </div>

  {/* Optionen */}
  <div className="beschreibung-card">
    <h3>Optionen</h3>

    <div className="info-list">

      <div className="info-item">
        <h4>Dacheindeckung</h4>
        <ul>
          <li>Polycarbonat klar / opal / bronze</li>
          <li>VSG-Glas 8 oder 10 mm</li>
        </ul>
      </div>

      <div className="info-item">
        <h4>Konstruktion</h4>
        <ul>
          <li>Anbau an Haus oder freistehend</li>
          <li>Flach- oder Pultdachform</li>
        </ul>
      </div>

      <div className="info-item">
        <h4>Erweiterungen</h4>
        <ul>
          <li>Seiten- und Rückwand mit Aluminium, Glas oder Polycarbonat</li>
          <li>Geräteraum oder Abstellbox</li>
        </ul>
      </div>

      <div className="info-item">
        <h4>Beleuchtung</h4>
        <ul>
          <li>LED-Leisten im Dachrahmen</li>
          <li>Bewegungsmelder optional</li>
        </ul>
      </div>

    </div>
  </div>

  {/* Zubehör */}
  <div className="beschreibung-card">
    <h3>Zubehör</h3>

    <div className="feature-grid">

      <div className="feature-item">
        <span>🔧</span>
        <p>Seitenwände mit Sichtschutzfunktion</p>
      </div>

      <div className="feature-item">
        <span>🔧</span>
        <p>Gerätekammer mit Tür und Schloss</p>
      </div>

      <div className="feature-item">
        <span>🔧</span>
        <p>Fundamentanker & Befestigungssets</p>
      </div>

      <div className="feature-item">
        <span>🔧</span>
        <p>Schneelastverstärkungen</p>
      </div>

      <div className="feature-item">
        <span>🔧</span>
        <p>Integriertes LED-Lichtsystem mit Fernbedienung</p>
      </div>

    </div>
  </div>

  {/* Leistungen */}
  <div className="beschreibung-card">
    <h3>Unsere Leistungen</h3>

    <div className="feature-grid">

      <div className="feature-item">
        <span>✓</span>
        <p>Vor-Ort-Beratung & individuelles Aufmaß</p>
      </div>

      <div className="feature-item">
        <span>✓</span>
        <p>Planung inkl. Schneelastberechnung</p>
      </div>

      <div className="feature-item">
        <span>✓</span>
        <p>Maßanfertigung & Lieferung</p>
      </div>

      <div className="feature-item">
        <span>✓</span>
        <p>Fachgerechte Montage durch unser Montageteam</p>
      </div>

      <div className="feature-item">
        <span>✓</span>
        <p>Unterstützung bei Baugenehmigung</p>
      </div>

    </div>
  </div>

</div>

</div>
          )}
         {activeTab === "downloads" && (
  <div className="downloads-section">
    <h3>Downloads</h3>
    
  </div>
)}
          {activeTab === "daten" && (
            <div className="technical-data">
              <h3>Technische Daten</h3>
              <table>
                <thead>
                  <tr>
                    <th>Merkmal</th>
                    <th>Spezifikation</th>
                  </tr>
                </thead>
                <tbody>
                  {technischeDaten.map((row, index) => (
                    <tr key={index}>
                      <td>{row.eigenschaft}</td>
                      <td>{row.wert}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
      <section className="product-section empfelung">
              <h3>Produktempfehlungen</h3>
              <div className="product-grid">
                {productsEmpfehlung.map((p, index) => (
                  <Link key={index} to={p.link} className="product-card">
                    <img src={p.image} alt={p.title} />
                    <div className="product-info">
                      <h4>{p.title}</h4>
                      <p className="description">{p.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
            <div className="goo">
            <ReviewSection />
      <GoogleReviewsSection />
      </div>
    </div>
    </div>
  );
}
