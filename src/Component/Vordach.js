
import "./CarportPage.css";
import img from "../img/WhatsApp Image 2026-05-15 at 11.40.16.jpeg";
import img1 from "../img/WhatsApp Image 2026-05-15 at 11.41.44.jpeg";
import img2 from "../img/WhatsApp Image 2026-05-15 at 11.41.45.jpeg";
import img3 from "../img/WhatsApp Image 2026-05-15 at 11.41.44 (1).jpeg";
import img4 from "../img/WhatsApp Image 2026-05-15 at 11.40.16 (1).jpeg";
import img5 from "../img/WhatsApp Image 2026-05-15 at 11.41.44 (2).jpeg";


import zaun from "../img/WhatsApp Image 2026-05-15 at 11.51.31.jpeg";
import carport from "../img/WhatsApp Image 2026-05-15 at 11.42.30.jpeg";
import gelander from "../img/WhatsApp Image 2026-05-15 at 11.44.35.jpeg";
import lamellendach from "../img/WhatsApp Image 2026-05-15 at 11.45.29.jpeg";


import { Swiper, SwiperSlide } from "swiper/react";
import ReviewSection from "./ReviewSection";
import GoogleReviewsSection from "./GoogleReviewsSection";
import React, { useState , useRef  } from "react";
import { Link } from "react-router-dom";

export default function Vordach() {
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const swiperRef = useRef(null);
  const [activeTab, setActiveTab] = useState("beschreibung");
const technischeDaten = [
  { eigenschaft: "Material", wert: "Aluminium pulverbeschichtet" },
  { eigenschaft: "Dachfüllung", wert: "VSG-Glas oder Polycarbonat 10/16 mm" },
  { eigenschaft: "Tiefe", wert: "600–1200 mm" },
  { eigenschaft: "Breite", wert: "1000–3000 mm oder mehr" },
  { eigenschaft: "Befestigung", wert: "Wandmontage mit Trägerprofilen" },
  { eigenschaft: "Entwässerung", wert: "Verdeckt im Trägerprofil mit Fallrohr" },
  { eigenschaft: "Farbe", wert: "Weiß, Anthrazit oder RAL nach Wahl" },
  { eigenschaft: "Glasarten", wert: "Klarglas, Milchglas, Grau, Bronze" }
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
  ]
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
          <h2>Vordach aus Aluminium & Glas</h2>
          <p>
            Maßgefertigte Aluminium- und Glasvordächer von Wintergartenmeister– langlebig,
  wartungsfrei und modern im Design. Wahlweise mit VSG-Glas oder
  Stegplatten für zuverlässigen Schutz bei jeder Witterung
  konfigurierbar.
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
    <h2>Vordach aus Aluminium & Glas</h2>

    <p>
      Ein Vordach aus Aluminium und Glas ist nicht nur funktional,
      sondern auch ein gestalterisches Element für Ihren
      Eingangsbereich. Es schützt zuverlässig vor Regen, Schnee und
      direkter Sonneneinstrahlung und verleiht Ihrem Hauseingang ein
      modernes, hochwertiges Erscheinungsbild.
    </p>

    <p>
      Unsere Vordächer sind langlebig, stabil und in vielen Varianten
      erhältlich – ganz nach Ihrem Geschmack und den baulichen
      Gegebenheiten.
    </p>
  </div>

  {/* Vorteile */}
  <div className="beschreibung-card">
    <h3>Vorteile</h3>

    <div className="feature-grid">

      <div className="feature-item">
        <span>✔</span>
        <p>Witterungsschutz für Eingangsbereich & Gäste</p>
      </div>

      <div className="feature-item">
        <span>✔</span>
        <p>Korrosionsfrei & pflegeleicht durch Aluminium</p>
      </div>

      <div className="feature-item">
        <span>✔</span>
        <p>Zeitloses Design in Glas oder Polycarbonat</p>
      </div>

      <div className="feature-item">
        <span>✔</span>
        <p>Individuelle Maßanfertigung möglich</p>
      </div>

      <div className="feature-item">
        <span>✔</span>
        <p>Schneelastberechnung gemäß DIN EN 1991</p>
      </div>

      <div className="feature-item">
        <span>✔</span>
        <p>Mit LED-Beleuchtung & Seitenteilen erweiterbar</p>
      </div>

    </div>
  </div>

  {/* Optionen */}
  <div className="beschreibung-card">
    <h3>Optionen & Designvarianten</h3>

    <div className="info-list">

      <div className="info-item">
        <h4>Dachfüllung</h4>
        <ul>
          <li>VSG-Glas 8–10 mm (klar, satiniert, getönt)</li>
          <li>Polycarbonat klar, opal oder bronze</li>
        </ul>
      </div>

      <div className="info-item">
        <h4>Beleuchtung</h4>
        <ul>
          <li>LED-Spots integriert im Trägerprofil</li>
        </ul>
      </div>

      <div className="info-item">
        <h4>Seitenteile</h4>
        <ul>
          <li>Glas oder Aluminium zur Erweiterung des Windschutzes</li>
        </ul>
      </div>

      <div className="info-item">
        <h4>Designvarianten</h4>
        <ul>
          <li>Modern (gerade)</li>
          <li>Klassisch (gebogen)</li>
          <li>Flachdachoptik</li>
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
        <p>LED-Beleuchtung mit Dämmerungssensor</p>
      </div>

      <div className="feature-item">
        <span>🔧</span>
        <p>Seitenelemente mit Sicherheitsglas</p>
      </div>

      <div className="feature-item">
        <span>🔧</span>
        <p>Edelstahl-Hausnummer integriert</p>
      </div>

      <div className="feature-item">
        <span>🔧</span>
        <p>Wasserablaufset mit Fallrohr</p>
      </div>

      <div className="feature-item">
        <span>🔧</span>
        <p>Schneelastverstärkung für Bergregionen</p>
      </div>

    </div>
  </div>

  {/* Leistungen */}
  <div className="beschreibung-card">
    <h3>Unsere Leistungen</h3>

    <div className="feature-grid">

      <div className="feature-item">
        <span>✓</span>
        <p>Individuelle Beratung & Aufmaß</p>
      </div>

      <div className="feature-item">
        <span>✓</span>
        <p>CAD-Planung & Visualisierung</p>
      </div>

      <div className="feature-item">
        <span>✓</span>
        <p>Maßfertigung & Lackierung nach Wunsch</p>
      </div>

      <div className="feature-item">
        <span>✓</span>
        <p>Lieferung & professionelle Montage</p>
      </div>

      <div className="feature-item">
        <span>✓</span>
        <p>Unterstützung bei statischen Nachweisen</p>
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
