import React, { useState , useRef  } from "react";

import "./CarportPage.css";
import img from "../img/WhatsApp Image 2026-05-15 at 11.48.52.jpeg";
import img1 from "../img/WhatsApp Image 2026-05-15 at 11.48.52 (1).jpeg";
import img2 from "../img/WhatsApp Image 2026-05-15 at 11.48.54.jpeg";
import img3 from "../img/WhatsApp Image 2026-05-15 at 11.48.54 (1).jpeg";
import img4 from "../img/WhatsApp Image 2026-05-15 at 11.48.54 (2).jpeg";
import img5 from "../img/WhatsApp Image 2026-05-15 at 11.48.54 (3).jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewSection from "./ReviewSection";
import GoogleReviewsSection from "./GoogleReviewsSection";
import zaun from "../img/WhatsApp Image 2026-05-15 at 11.51.31.jpeg";
import Terrassenüberdachung from "../img/WhatsApp Image 2026-05-15 at 11.35.39 (1).jpeg";
import gelander from "../img/WhatsApp Image 2026-05-15 at 11.44.35.jpeg";
import carport from "../img/WhatsApp Image 2026-05-15 at 11.42.30.jpeg";
import { Link } from "react-router-dom";

export default function SolarTerrassenüberdachung() {
   const [activeImageIndex, setActiveImageIndex] = useState(0);
      const swiperRef = useRef(null);
  const [activeTab, setActiveTab] = useState("beschreibung");
const technischeDaten = [
  {
    eigenschaft: "Material",
    wert: "Aluminium pulverbeschichtet",
  },
  {
    eigenschaft: "Dacheindeckung",
    wert: "Solarglas mit monokristallinen PV-Zellen",
  },
  {
    eigenschaft: "Leistung",
    wert: "Bis 300 Wp pro Modul – je nach Fläche",
  },
  {
    eigenschaft: "Modulgröße",
    wert: "ca. 1700 x 1000 mm pro Feld",
  },
  {
    eigenschaft: "Lichtdurchlässigkeit",
    wert: "Je nach Glasaufbau 10–40 %",
  },
  {
    eigenschaft: "Schneelast",
    wert: "Standard 125 kg/m² – auf Wunsch höher",
  },
  {
    eigenschaft: "Farbe Konstruktion",
    wert: "RAL nach Wahl – Standard: Anthrazit",
  },
  {
    eigenschaft: "Montage",
    wert: "Anbau oder freistehend",
  },
];
  const images = [
    img,
    img1,
    img2,
    img3,
    img4,
    img5
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
    title: "Terrassenüberdachung",
    description: "Schützt Ihren Balkon zuverlässig vor Regen und Sonne.",
    image: Terrassenüberdachung,
    link: "/übertachung",
  },
  {
    title: "Geländer",
    description: "Erweitern Sie Ihren Wohnraum mit einem lichtdurchfluteten Wintergarten.",
    image: gelander,
    link: "/galänder",
  }
];
  return (
    <div className="mdiv">
    <div className="carport-page">
      <section className="carport-hero">
        <div className="slider-section sec">
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
          <h2>Solar Terrassenüberdachung aus Aluminium</h2>
          <p>
           Eine Solar-Terrassenüberdachung aus Aluminium kombiniert modernen Wetterschutz mit nachhaltiger Energiegewinnung. In die Überdachung integrierte Solarmodule erzeugen umweltfreundlichen Strom, während die stabile Aluminiumkonstruktion für Langlebigkeit, Witterungsbeständigkeit und eine hochwertige Optik sorgt. </p>
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
    <h2>Solar Terrassenüberdachung aus Aluminium</h2>

    <p>
       Eine Solar Terrassenüberdachung vereint elegantes Design mit nachhaltiger Energiegewinnung. Dank integrierter Solarmodule im Dach erzeugen Sie Ihren eigenen Strom – ideal für Terrasse, Carport oder Freisitz. Die Überdachung schützt zuverlässig vor Witterungseinflüssen und senkt gleichzeitig Ihre Energiekosten.</p>

   
  </div>

<div className="beschreibung">

  {/* Vorteile */}
  <div className="beschreibung-card">
    <h3>Vorteile</h3>

    <div className="feature-grid">

      <div className="feature-item">
        <span>✔</span>
        <p>Stromproduktion direkt auf Ihrer Terrasse</p>
      </div>

      <div className="feature-item">
        <span>✔</span>
        <p>Hochwertige Solargläser mit Lichtdurchlass</p>
      </div>

      <div className="feature-item">
        <span>✔</span>
        <p>Nachhaltig, wartungsarm & wetterfest</p>
      </div>

      <div className="feature-item">
        <span>✔</span>
        <p>Aluminiumkonstruktion in Wunschfarbe</p>
      </div>

      <div className="feature-item">
        <span>✔</span>
        <p>Kombinierbar mit Speicher, Wallbox & Smart Home</p>
      </div>

      <div className="feature-item">
        <span>✔</span>
        <p>Staatliche Fördermöglichkeiten (z. B. KfW)</p>
      </div>

    </div>
  </div>

  {/* Optionen */}
  <div className="beschreibung-card">
    <h3>Optionen</h3>

    <div className="info-list">

      <div className="info-item">
        <h4>Solarglas</h4>
        <ul>
          <li>Getönt oder klar</li>
          <li>Optional mit höherem Lichtdurchlass</li>
        </ul>
      </div>

      <div className="info-item">
        <h4>Konstruktion</h4>
        <ul>
          <li>Pult- oder Flachdachform</li>
          <li>Freistehend oder als Anbauvariante</li>
        </ul>
      </div>

      <div className="info-item">
        <h4>Elektroausstattung</h4>
        <ul>
          <li>Wechselrichter & Batteriespeicher</li>
          <li>Wallbox & Smart-Home-Integration</li>
        </ul>
      </div>

      <div className="info-item">
        <h4>Seitenelemente</h4>
        <ul>
          <li>Glasschiebeelemente möglich</li>
          <li>Zusätzliche Seitenwände optional</li>
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
        <p>Stromspeicher (z. B. 5–10 kWh)</p>
      </div>

      <div className="feature-item">
        <span>🔧</span>
        <p>Wallbox für E-Auto</p>
      </div>

      <div className="feature-item">
        <span>🔧</span>
        <p>LED-Lichtsystem</p>
      </div>

      <div className="feature-item">
        <span>🔧</span>
        <p>Glasschiebeelemente</p>
      </div>

      <div className="feature-item">
        <span>🔧</span>
        <p>Heizstrahler & Wettersensoren</p>
      </div>

    </div>
  </div>

  {/* Leistungen */}
  <div className="beschreibung-card">
    <h3>Unsere Leistungen</h3>

    <div className="feature-grid">

      <div className="feature-item">
        <span>✓</span>
        <p>PV-Berechnung & Beratung</p>
      </div>

      <div className="feature-item">
        <span>✓</span>
        <p>Planung inkl. Dachauslegung & Lastannahmen</p>
      </div>

      <div className="feature-item">
        <span>✓</span>
        <p>Lieferung & fachgerechte Montage inkl. Elektroarbeiten</p>
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
