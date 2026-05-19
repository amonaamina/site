import React, { useState , useRef  } from "react";

import "./CarportPage.css";
import img from "../img/WhatsApp Image 2026-05-15 at 11.45.29.jpeg";
import img2 from "../img/WhatsApp Image 2026-05-15 at 11.45.29 (1).jpeg";
import zaun from "../img/WhatsApp Image 2026-05-15 at 11.51.31.jpeg";
import Terrassenüberdachung from "../img/WhatsApp Image 2026-05-15 at 11.35.39 (1).jpeg";
import gelander from "../img/WhatsApp Image 2026-05-15 at 11.44.35.jpeg";
import carport from "../img/WhatsApp Image 2026-05-15 at 11.42.30.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";
import ReviewSection from "./ReviewSection";
import GoogleReviewsSection from "./GoogleReviewsSection";
import { Link } from "react-router-dom";

export default function Lamellendach() {
   const [activeImageIndex, setActiveImageIndex] = useState(0);
      const swiperRef = useRef(null);
  const [activeTab, setActiveTab] = useState("beschreibung");
const technischeDaten = [
  {
    eigenschaft: "Material",
    wert: "Pulverbeschichtetes Aluminium",
  },
  {
    eigenschaft: "Lamellenbreite",
    wert: "200–250 mm",
  },
  {
    eigenschaft: "Lamellensteuerung",
    wert: "Motorisiert (Somfy, IO, App oder Schalter)",
  },
  {
    eigenschaft: "Neigungswinkel",
    wert: "Bis 135° verstellbar",
  },
  {
    eigenschaft: "Wasserablauf",
    wert: "Integriert in Pfosten mit Fallrohr",
  },
  {
    eigenschaft: "Größe",
    wert: "Bis ca. 6x4 m pro Modul, erweiterbar",
  },
  {
    eigenschaft: "Montage",
    wert: "Anbau oder freistehend",
  },
  {
    eigenschaft: "Farben",
    wert: "Weiß, Anthrazit oder RAL-Wunschfarbe",
  },
];
  const images = [
    img,
    img2
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
          <h2>Lamellendach aus Aluminium – Die flexible Premium-Überdachung</h2>
          <p>
          Ein Lamellendach aus Aluminium ist eine moderne Premium-Überdachung, bei der sich die Lamellen flexibel verstellen lassen. So kann man Sonneneinstrahlung, Schatten und Belüftung individuell steuern und ist gleichzeitig vor Regen geschützt.</p>
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
    <h2>Lamellendach aus Aluminium – Die flexible Premium-Überdachung</h2>

    <p>
   Ein Lamellendach bietet höchsten Komfort für Ihre Terrasse: Die verstellbaren Aluminiumlamellen lassen sich per Knopfdruck öffnen, kippen oder komplett schließen. So steuern Sie individuell Sonneneinstrahlung, Schatten und Belüftung – wetterunabhängig und stilvoll. Das moderne Design vereint Funktionalität mit purer Eleganz. </p>

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
        <p>Sonnenschutz, Wetterschutz & Belüftung in einem</p>
      </div>

      <div className="feature-item">
        <span>✔</span>
        <p>Motorisierte Lamellen mit Fernbedienung oder App</p>
      </div>

      <div className="feature-item">
        <span>✔</span>
        <p>Regen- und schneefest durch integriertes Wasserablauf-System</p>
      </div>

      <div className="feature-item">
        <span>✔</span>
        <p>Erweiterbar mit LED, Glaswänden, Screens & Heizstrahlern</p>
      </div>

      <div className="feature-item">
        <span>✔</span>
        <p>Langlebig, korrosionsfrei & pflegeleicht</p>
      </div>

      <div className="feature-item">
        <span>✔</span>
        <p>Freistehend oder als Anbau erhältlich</p>
      </div>

    </div>
  </div>

  {/* Optionen */}
  <div className="beschreibung-card">
    <h3>Optionen</h3>

    <div className="info-list">

      <div className="info-item">
        <h4>Beleuchtung</h4>
        <ul>
          <li>LED-Streifen oder Spots in Lamellen oder Rahmen</li>
        </ul>
      </div>

      <div className="info-item">
        <h4>Steuerung</h4>
        <ul>
          <li>Fernbedienung, App (Smart Home), Wettersensoren</li>
        </ul>
      </div>

      <div className="info-item">
        <h4>Seitenelemente</h4>
        <ul>
          <li>Glasschiebeelemente</li>
          <li>Zip-Screens</li>
          <li>Feststehende Wände</li>
        </ul>
      </div>

      <div className="info-item">
        <h4>Farben</h4>
        <ul>
          <li>Standardfarben oder individuelle RAL-Farben</li>
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
        <p>Integrierte LED-Beleuchtung (dimmbar)</p>
      </div>

      <div className="feature-item">
        <span>🔧</span>
        <p>Heizstrahler & Infrarotstrahler</p>
      </div>

      <div className="feature-item">
        <span>🔧</span>
        <p>Regen- & Windsensor</p>
      </div>

      <div className="feature-item">
        <span>🔧</span>
        <p>Funksteuerung & App-Anbindung</p>
      </div>

      <div className="feature-item">
        <span>🔧</span>
        <p>Seitenverglasung & textile Beschattung</p>
      </div>

    </div>
  </div>

  {/* Leistungen */}
  <div className="beschreibung-card">
    <h3>Unsere Leistungen</h3>

    <div className="feature-grid">

      <div className="feature-item">
        <span>✓</span>
        <p>Beratung & Visualisierung mit CAD-Zeichnung</p>
      </div>

      <div className="feature-item">
        <span>✓</span>
        <p>Planung & Maßanfertigung</p>
      </div>

      <div className="feature-item">
        <span>✓</span>
        <p>Lieferung & professionelle Montage</p>
      </div>

      <div className="feature-item">
        <span>✓</span>
        <p>Einbindung in bestehende Haussteuerung optional</p>
      </div>

      <div className="feature-item">
        <span>✓</span>
        <p>Wartung & Service auf Wunsch</p>
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
