import React, { useState , useRef  } from "react";

import "./CarportPage.css";
import img from "../img/WhatsApp Image 2026-05-15 at 11.47.40.jpeg";
import img1 from "../img/WhatsApp Image 2026-05-15 at 11.47.40 (1).jpeg";
import img2 from "../img/WhatsApp Image 2026-05-15 at 11.47.39.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewSection from "./ReviewSection";
import GoogleReviewsSection from "./GoogleReviewsSection";
import zaun from "../img/WhatsApp Image 2026-05-15 at 11.51.31.jpeg";
import Terrassenüberdachung from "../img/WhatsApp Image 2026-05-15 at 11.35.39 (1).jpeg";
import gelander from "../img/WhatsApp Image 2026-05-15 at 11.44.35.jpeg";
import carport from "../img/WhatsApp Image 2026-05-15 at 11.42.30.jpeg";
import { Link } from "react-router-dom";

export default function Markise() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
      const swiperRef = useRef(null);
  const [activeTab, setActiveTab] = useState("beschreibung");
const technischeDaten = [
  {
    eigenschaft: "Typen",
    wert: "Gelenkarm-, Kassetten-, Halbkassetten- und Seitenmarkise",
  },
  {
    eigenschaft: "Breite",
    wert: "2000 mm bis über 7000 mm",
  },
  {
    eigenschaft: "Ausfalltiefe",
    wert: "Bis 4000 mm (je nach Modell)",
  },
  {
    eigenschaft: "Gestell",
    wert: "Pulverbeschichtetes Aluminium",
  },
  {
    eigenschaft: "Tuchmaterial",
    wert: "Acrylgewebe oder Polyestergewebe (UV-beständig)",
  },
  {
    eigenschaft: "Antrieb",
    wert: "Handkurbel oder Elektromotor",
  },
  {
    eigenschaft: "Steuerung",
    wert: "Schalter, Funkfernbedienung oder App-Steuerung",
  },
  {
    eigenschaft: "Neigungswinkel",
    wert: "5° bis 45° einstellbar",
  },
];
  const images = [
    img,
    img1,
    img2,
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
          <h2>Markise</h2>
          <p>
          Eine Markise bietet einen effektiven Schutz vor Sonne und leichtem Regen und sorgt gleichzeitig für eine angenehme Atmosphäre auf der Terrasse oder dem Balkon. </p>
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
    <h2>Markise</h2>

    <p>
      Unsere hochwertigen Markisen bieten Ihnen optimalen Sonnen- und Hitzeschutz auf Ihrer Terrasse oder dem Balkon. Ob als klassische Gelenkarmmarkise, Kassettenmarkise oder Seitenmarkise – jede Variante überzeugt durch langlebige Materialien, modernes Design und einfache Bedienbarkeit. Genießen Sie Schatten nach Maß – elegant und funktional zugleich.   </p>

    <p>
      Unsere Vordächer sind langlebig, stabil und in vielen Varianten
      erhältlich – ganz nach Ihrem Geschmack und den baulichen
      Gegebenheiten.
    </p>
  </div>

<div className="beschreibung">

  {/* Vorteile */}
  <div className="beschreibung-card">
    <h3>Vorteile</h3>

    <div className="feature-grid">

      <div className="feature-item">
        <span>✔</span>
        <p>Schutz vor UV-Strahlung, Hitze und leichtem Regen</p>
      </div>

      <div className="feature-item">
        <span>✔</span>
        <p>Große Tuchauswahl – über 200 Farben & Muster</p>
      </div>

      <div className="feature-item">
        <span>✔</span>
        <p>Manuell oder elektrisch bedienbar</p>
      </div>

      <div className="feature-item">
        <span>✔</span>
        <p>Witterungsbeständige Materialien für lange Lebensdauer</p>
      </div>

      <div className="feature-item">
        <span>✔</span>
        <p>Geräuscharmer Antrieb – ideal für Wohnbereiche</p>
      </div>

      <div className="feature-item">
        <span>✔</span>
        <p>Optional mit Sensorsteuerung für Wind & Sonne</p>
      </div>

    </div>
  </div>

  {/* Optionen */}
  <div className="beschreibung-card">
    <h3>Optionen</h3>

    <div className="info-list">

      <div className="info-item">
        <h4>Tuchfarben</h4>
        <ul>
          <li>Uni, Streifen oder Struktur</li>
          <li>Über 200 Designs verfügbar</li>
        </ul>
      </div>

      <div className="info-item">
        <h4>Gestellfarben</h4>
        <ul>
          <li>Weiß, Anthrazit oder Bronze</li>
          <li>Individuelle RAL-Farbe möglich</li>
        </ul>
      </div>

      <div className="info-item">
        <h4>Komfortfunktionen</h4>
        <ul>
          <li>LED-Beleuchtung integriert</li>
          <li>Heizstrahler optional</li>
          <li>Wind- & Sonnensensoren</li>
        </ul>
      </div>

      <div className="info-item">
        <h4>Volant-Option</h4>
        <ul>
          <li>Gerade oder gewellte Form</li>
          <li>Optional abnehmbar</li>
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
        <p>Bewegungsmelder für Windschutz</p>
      </div>

      <div className="feature-item">
        <span>🔧</span>
        <p>Regensensor für automatisches Einfahren</p>
      </div>

      <div className="feature-item">
        <span>🔧</span>
        <p>Fernbedienung oder App-Steuerung</p>
      </div>

      <div className="feature-item">
        <span>🔧</span>
        <p>Seitenmarkise zum zusätzlichen Sichtschutz</p>
      </div>

      <div className="feature-item">
        <span>🔧</span>
        <p>Wand- oder Deckenbefestigung</p>
      </div>

    </div>
  </div>

  {/* Leistungen */}
  <div className="beschreibung-card">
    <h3>Unsere Leistungen</h3>

    <div className="feature-grid">

      <div className="feature-item">
        <span>✓</span>
        <p>Fachberatung und Tuchauswahl vor Ort</p>
      </div>

      <div className="feature-item">
        <span>✓</span>
        <p>Professionelles Aufmaß & 3D-Planung</p>
      </div>

      <div className="feature-item">
        <span>✓</span>
        <p>Lieferung & Montage durch geschultes Personal</p>
      </div>

      <div className="feature-item">
        <span>✓</span>
        <p>Demontage bestehender Markise optional</p>
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
