import React, { useState, useRef } from "react";

import "./CarportPage.css";
import img from "../img/WhatsApp Image 2026-05-15 at 11.44.35.jpeg";
import img1 from "../img/WhatsApp Image 2026-05-15 at 11.44.35 (1).jpeg";
import img2 from "../img/WhatsApp Image 2026-05-15 at 11.44.35 (2).jpeg";
import img3 from "../img/WhatsApp Image 2026-05-15 at 11.44.35 (3).jpeg";
import img4 from "../img/WhatsApp Image 2026-05-15 at 11.44.36.jpeg";
import img5 from "../img/WhatsApp Image 2026-05-15 at 11.44.36 (1).jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewSection from "./ReviewSection";
import GoogleReviewsSection from "./GoogleReviewsSection";
import zaun from "../img/WhatsApp Image 2026-05-15 at 11.51.31.jpeg";
import Terrassenüberdachung from "../img/WhatsApp Image 2026-05-15 at 11.35.39.jpeg";
import lamellendach from "../img/WhatsApp Image 2026-05-15 at 11.45.29.jpeg";
import carport from "../img/WhatsApp Image 2026-05-15 at 11.42.30.jpeg";
import { Link } from "react-router-dom";



export default function Glande() {
   const swiperRef = useRef(null);
    const [activeTab, setActiveTab] = useState("beschreibung");
 const technischeDaten = [
  { eigenschaft: "Material", wert: "Aluminium, optional mit ESG/VSG-Glas" },
  { eigenschaft: "Höhe", wert: "900–1200 mm (nach Verwendungsort)" },
  { eigenschaft: "Pfosten", wert: "40x40 mm oder 60x60 mm Aluminiumprofil" },
  { eigenschaft: "Füllung", wert: "Glas, Blech, Stäbe, Lochblech oder HPL" },
  { eigenschaft: "Glasarten", wert: "Klarglas, Milchglas, Strukturglas, getönt" },
  { eigenschaft: "Montageart", wert: "Aufgesetzt oder stirnseitig" },
  { eigenschaft: "Farben", wert: "RAL-Farben, auch Feinstruktur möglich" },
  { eigenschaft: "Befestigung", wert: "Verdeckt verschraubt oder mit Glas-Klemmsystem" }
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
                     <Swiper
                                  spaceBetween={10}
                                  onSwiper={(swiper) => (swiperRef.current = swiper)}
                                >
                                  {images.map((img, index) => (
                                    <SwiperSlide key={index}>
                                      <img src={img} alt="slide" className="main" />
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
                                      className="thumb"
                                      onClick={() => swiperRef.current?.slideTo(index)}
                                    />
                                  ))}
                                </div>
                   </div>
        <div className="carport-info">
          <h2>Geländer aus Aluminium & Glas</h2>
          <p>
           Hochwertige Geländer aus Aluminium und Glas: modern, stabil und
  wartungsfrei. Individuell maßgefertigt für Balkon, Terrasse oder Treppe.
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
              <div>
            <h2>Geländer aus Aluminium & Glas</h2>
          <p> Unsere Geländersysteme aus Aluminium und Glas kombinieren höchste Sicherheit mit zeitlosem Design. Ob für Balkon, Terrasse, Treppe oder Galerie – wir bieten individuell angepasste Lösungen, die sowohl funktional als auch ästhetisch überzeugen. Dank langlebiger Materialien und moderner Fertigung garantieren wir Ihnen ein wartungsfreies und stilvolles Geländer für jeden Einsatzbereich.</p>
          </div>
          {/* Vorteile */}
 <div className="beschreibung">

  {/* Vorteile */}
  <div className="beschreibung-card">
    <h3>Vorteile</h3>

    <div className="feature-grid">

      <div className="feature-item">
        <span>✔</span>
        <p>Hohe Stabilität & Sicherheitsstandard (DIN 18065)</p>
      </div>

      <div className="feature-item">
        <span>✔</span>
        <p>Rostfrei & pflegeleicht durch Aluminium</p>
      </div>

      <div className="feature-item">
        <span>✔</span>
        <p>Modernes Design – Glas, Stab oder Blechfüllung</p>
      </div>

      <div className="feature-item">
        <span>✔</span>
        <p>Witterungsbeständig & UV-resistent</p>
      </div>

      <div className="feature-item">
        <span>✔</span>
        <p>Individuell in Farbe & Form gestaltbar</p>
      </div>

      <div className="feature-item">
        <span>✔</span>
        <p>Auch als Sichtschutz einsetzbar</p>
      </div>

    </div>
  </div>

  {/* Optionen */}
  <div className="beschreibung-card">
    <h3>Optionen & Designvarianten</h3>

    <div className="info-list">

      <div className="info-item">
        <h4>Glasfüllungen</h4>
        <ul>
          <li>VSG Glas 8–12 mm</li>
          <li>Satiniert, grau, bronze oder klar</li>
        </ul>
      </div>

      <div className="info-item">
        <h4>Farben</h4>
        <ul>
          <li>Standard: Weiß, Anthrazit, Silber</li>
          <li>Optional: Jede RAL-Farbe</li>
        </ul>
      </div>

      <div className="info-item">
        <h4>Handlauf</h4>
        <ul>
          <li>Rund, eckig oder flach – auch Edelstahl</li>
        </ul>
      </div>

      <div className="info-item">
        <h4>Füllungen</h4>
        <ul>
          <li>Blech, Lochblech, Glas, Stäbe, Sichtschutzplatten</li>
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
        <p>LED-Beleuchtung im Handlauf</p>
      </div>

      <div className="feature-item">
        <span>🔧</span>
        <p>Sichtschutzgläser mit Dekorfolie</p>
      </div>

      <div className="feature-item">
        <span>🔧</span>
        <p>Kinder- und Tierschutzleisten</p>
      </div>

      <div className="feature-item">
        <span>🔧</span>
        <p>Befestigungssets für Balkon oder Treppe</p>
      </div>

      <div className="feature-item">
        <span>🔧</span>
        <p>Trittschutzkante und Entwässerungslösungen</p>
      </div>

    </div>
  </div>

  {/* Leistungen */}
  <div className="beschreibung-card">
    <h3>Unsere Leistungen</h3>

    <div className="feature-grid">

      <div className="feature-item">
        <span>✓</span>
        <p>Beratung & Aufmaß vor Ort</p>
      </div>

      <div className="feature-item">
        <span>✓</span>
        <p>3D-Planung & CAD-Zeichnung</p>
      </div>

      <div className="feature-item">
        <span>✓</span>
        <p>Statikberechnung bei Bedarf</p>
      </div>

      <div className="feature-item">
        <span>✓</span>
        <p>Maßfertigung im Werk</p>
      </div>

      <div className="feature-item">
        <span>✓</span>
        <p>Fachgerechte Montage durch zertifizierte Monteure</p>
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
