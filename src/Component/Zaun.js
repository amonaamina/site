import React, { useState , useRef  } from "react";

import "./CarportPage.css";
import img from "../img/WhatsApp Image 2026-05-15 at 11.51.31.jpeg";
import img1 from "../img/WhatsApp Image 2026-05-15 at 11.51.30.jpeg";
import img2 from "../img/WhatsApp Image 2026-05-15 at 11.51.31 (1).jpeg";
import img3 from "../img/WhatsApp Image 2026-05-15 at 11.51.32.jpeg";
import img4 from "../img/WhatsApp Image 2026-05-15 at 11.51.32 (1).jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewSection from "./ReviewSection";
import GoogleReviewsSection from "./GoogleReviewsSection";
import { Link } from "react-router-dom";
import lamellendach from "../img/WhatsApp Image 2026-05-15 at 11.45.29.jpeg";
import Terrassenüberdachung from "../img/WhatsApp Image 2026-05-15 at 11.35.39 (1).jpeg";
import gelander from "../img/WhatsApp Image 2026-05-15 at 11.44.35.jpeg";
import carport from "../img/WhatsApp Image 2026-05-15 at 11.42.30.jpeg";

export default function Zaun() {
   const [activeImageIndex, setActiveImageIndex] = useState(0);
      const swiperRef = useRef(null);
  const [activeTab, setActiveTab] = useState("beschreibung");
const technischeDaten = [
  {
    eigenschaft: "Material",
    wert: "Pulverbeschichtetes Aluminium",
  },
  {
    eigenschaft: "Zaunhöhe",
    wert: "600 mm bis 2000 mm",
  },
  {
    eigenschaft: "Lattenbreite",
    wert: "40–160 mm (je nach Modell)",
  },
  {
    eigenschaft: "Pfostenabstand",
    wert: "Standard: 2000 mm",
  },
  {
    eigenschaft: "Oberfläche",
    wert: "Glatt, strukturiert oder in Holzoptik",
  },
  {
    eigenschaft: "Farben",
    wert: "RAL-Farben & Sonderfarben",
  },
  {
    eigenschaft: "Montage",
    wert: "Pfosten zum Einbetonieren oder mit Bodenplatte",
  },
  {
    eigenschaft: "Extras",
    wert: "Türen, Tore, Sichtschutz, LED-Integration",
  },
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
    title: "Lamellendach",
    description: "modernes Design und minimalen Pflegeaufwand..",
    image: lamellendach,
    link: "/lamellendach",
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
          <h2>Aluminium Zaun</h2>
          <p>
           Ein Aluminiumzaun ist eine moderne, langlebige und pflegeleichte Lösung für die Einfriedung von Grundstücken. Er ist witterungsbeständig, rostfrei und bietet gleichzeitig ein elegantes Design sowie zuverlässigen Sicht- und Schutz für Ihr Zuhause.</p>
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
    <h2>Aluminium Zaun</h2>

    <p>
     Ein Aluminiumzaun vereint Langlebigkeit, modernes Design und minimalen Pflegeaufwand. Ideal für die stilvolle Gestaltung Ihres Grundstücks – ob als Sichtschutz, Abgrenzung oder dekoratives Element. Unsere Aluminiumzäune sind witterungsbeständig, rostfrei und in zahlreichen Farben und Designs erhältlich.</p>

  </div>

<div className="beschreibung">

  {/* Vorteile */}
  <div className="beschreibung-card">
    <h3>Vorteile</h3>

    <div className="feature-grid">

      <div className="feature-item">
        <span>✔</span>
        <p>Wartungsfrei – kein Streichen notwendig</p>
      </div>

      <div className="feature-item">
        <span>✔</span>
        <p>Korrosionsfrei & UV-beständig</p>
      </div>

      <div className="feature-item">
        <span>✔</span>
        <p>Individuell konfigurierbar in Höhe, Farbe & Design</p>
      </div>

      <div className="feature-item">
        <span>✔</span>
        <p>Sichtschutz und Design in einem</p>
      </div>

      <div className="feature-item">
        <span>✔</span>
        <p>Kombination mit Türen und Toren möglich</p>
      </div>

      <div className="feature-item">
        <span>✔</span>
        <p>Nachhaltiges Material – 100 % recycelbar</p>
      </div>

    </div>
  </div>

  {/* Optionen */}
  <div className="beschreibung-card">
    <h3>Optionen</h3>

    <div className="info-list">

      <div className="info-item">
        <h4>Farbwahl</h4>
        <ul>
          <li>Standardfarben: Weiß, Anthrazit, Silber</li>
          <li>Sonderfarben & Holzdekor möglich</li>
        </ul>
      </div>

      <div className="info-item">
        <h4>Designvarianten</h4>
        <ul>
          <li>Horizontal- oder Vertikallamellen</li>
          <li>Geschlossene oder halb-offene Bauweise</li>
        </ul>
      </div>

      <div className="info-item">
        <h4>Kombinationen</h4>
        <ul>
          <li>Pforten, Doppeltore, Schiebetore</li>
        </ul>
      </div>

      <div className="info-item">
        <h4>Höhen & Breiten</h4>
        <ul>
          <li>Maßanfertigung – auch für Gefälle geeignet</li>
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
        <p>LED-Beleuchtung integriert in Pfosten</p>
      </div>

      <div className="feature-item">
        <span>🔧</span>
        <p>Sichtschutzplatten (Milchglas, Alu, HPL)</p>
      </div>

      <div className="feature-item">
        <span>🔧</span>
        <p>Klingel- und Briefkastensysteme</p>
      </div>

      <div className="feature-item">
        <span>🔧</span>
        <p>Türschlösser & Scharniere in Edelstahl</p>
      </div>

      <div className="feature-item">
        <span>🔧</span>
        <p>Fundamentmaterial & Bodenanker</p>
      </div>

    </div>
  </div>

  {/* Leistungen */}
  <div className="beschreibung-card">
    <h3>Unsere Leistungen</h3>

    <div className="feature-grid">

      <div className="feature-item">
        <span>✓</span>
        <p>Vor-Ort-Beratung & Geländeaufnahme</p>
      </div>

      <div className="feature-item">
        <span>✓</span>
        <p>3D-Planung & Visualisierung</p>
      </div>

      <div className="feature-item">
        <span>✓</span>
        <p>Individuelle Fertigung nach Maß</p>
      </div>

      <div className="feature-item">
        <span>✓</span>
        <p>Fachgerechte Montage durch eigenes Team</p>
      </div>

      <div className="feature-item">
        <span>✓</span>
        <p>Wartungsfreie Komplettlösungen inkl. Torantrieb</p>
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
