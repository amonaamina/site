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

export default function TerrassenüberdachungAusPVSGGlas() {
   const [activeImageIndex, setActiveImageIndex] = useState(0);
  const swiperRef = useRef(null);
  const [activeTab, setActiveTab] = useState("beschreibung");
const technischeDaten = [
  { eigenschaft: "Glasarten", wert: "VSG 8 mm oder 10 mm (Klar-, Milch- oder Sonnenschutzglas)" },
  { eigenschaft: "Aluminiumprofile", wert: "Korrosionsbeständig, pulverbeschichtet nach RAL" },
  { eigenschaft: "Standard-Tiefe", wert: "Bis 4 Meter (individuelle Maße möglich)" },
  { eigenschaft: "Neigungswinkel", wert: "6°–15° einstellbar" },
  { eigenschaft: "Schneelast", wert: "Bis 125 kg/m² (je nach Region)" },
  { eigenschaft: "Regenrinne", wert: "Integrierte Regenrinne mit Wasserablauf" }
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
          <h2>Terrassenüberdachung aus VSG Glas</h2>
          <p>
  Eine Terrassenüberdachung aus VSG Glas vereint elegantes Design mit hoher Stabilität und zuverlässigem Wetterschutz.
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
    <h2>Terrassenüberdachung aus VSG Glas</h2>

    <p>
     Mit einer Terrassenüberdachung aus VSG Glas von ALUSYSTEM-NRW investieren Sie in stilvolle Transparenz, höchste Sicherheit und langlebige Qualität. Unsere Überdachungen sind nicht nur funktional, sondern auch ein ästhetisches Highlight für Ihr Zuhause. Wenn Sie sich für ALUSYSTEM-NRW entscheiden, profitieren Sie von individueller Beratung, fachgerechter Montage und maßgeschneiderten Lösungen.  </p>

  </div>

<div className="beschreibung">

  {/* Vorteile */}
  <div className="beschreibung-card">
    <h3>Vorteile auf einen Blick</h3>

    <div className="feature-grid">

      <div className="feature-item">
        <span>✔</span>
        <p>Hochwertiges Verbundsicherheitsglas (VSG) mit exzellenter Lichtdurchlässigkeit</p>
      </div>

      <div className="feature-item">
        <span>✔</span>
        <p>Robuste Aluminiumkonstruktion mit Pulverbeschichtung in Wunschfarbe</p>
      </div>

      <div className="feature-item">
        <span>✔</span>
        <p>Schutz vor Regen, Schnee und UV-Strahlung</p>
      </div>

      <div className="feature-item">
        <span>✔</span>
        <p>Zeitloses, elegantes Design für jede Architektur</p>
      </div>

      <div className="feature-item">
        <span>✔</span>
        <p>Erhöht den Immobilienwert und schafft zusätzlichen Wohnraum</p>
      </div>

    </div>
  </div>

  {/* Auswahlmöglichkeiten */}
  <div className="beschreibung-card">
    <h3>Individuelle Auswahlmöglichkeiten</h3>

    <div className="info-list">

      <div className="info-item">
        <h4>Glasvarianten</h4>
        <ul>
          <li>Klarglas</li>
          <li>Milchglas</li>
          <li>Getöntes Glas</li>
          <li>Sonnenschutzglas</li>
        </ul>
      </div>

      <div className="info-item">
        <h4>Farben</h4>
        <ul>
          <li>Weiß</li>
          <li>Anthrazit</li>
          <li>DB703</li>
          <li>Jede RAL-Farbe auf Wunsch</li>
        </ul>
      </div>

      <div className="info-item">
        <h4>Maße & Form</h4>
        <ul>
          <li>Individuelle Maßanfertigung</li>
          <li>Form frei nach Wunsch wählbar</li>
        </ul>
      </div>

    </div>
  </div>

  {/* Zubehör */}
  <div className="beschreibung-card">
    <h3>Optionales Zubehör</h3>

    <div className="feature-grid">

      <div className="feature-item">
        <span>🔧</span>
        <p>LED-Beleuchtungssysteme (dimmbar)</p>
      </div>

      <div className="feature-item">
        <span>🔧</span>
        <p>Heizstrahler für ganzjährigen Komfort</p>
      </div>

      <div className="feature-item">
        <span>🔧</span>
        <p>Seitenteile aus Glas oder Aluminium</p>
      </div>

      <div className="feature-item">
        <span>🔧</span>
        <p>Elektrische Markisen zur Beschattung</p>
      </div>

      <div className="feature-item">
        <span>🔧</span>
        <p>Glasschiebewände als Windschutz</p>
      </div>

    </div>
  </div>

  {/* Leistungen */}
  <div className="beschreibung-card">
    <h3>Unsere Leistungen für Sie</h3>

    <div className="feature-grid">

      <div className="feature-item">
        <span>✓</span>
        <p>Persönliche Beratung vor Ort</p>
      </div>

      <div className="feature-item">
        <span>✓</span>
        <p>3D-Planung für perfekte Visualisierung</p>
      </div>

      <div className="feature-item">
        <span>✓</span>
        <p>Lieferung & fachgerechte Montage durch unser Team</p>
      </div>

      <div className="feature-item">
        <span>✓</span>
        <p>Gewährleistung & Kundenservice nach dem Kauf</p>
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
