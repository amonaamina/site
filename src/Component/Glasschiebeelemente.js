import "./CarportPage.css";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import img from "../img/WhatsApp Image 2026-05-15 at 11.37.12.jpeg";
import img1 from "../img/WhatsApp Image 2026-05-15 at 11.37.12 (1).jpeg";
import img2 from "../img/WhatsApp Image 2026-05-15 at 11.37.12 (2).jpeg";
import img3 from "../img/WhatsApp Image 2026-05-15 at 11.37.12 (3).jpeg";
import img4 from "../img/WhatsApp Image 2026-05-15 at 11.37.12 (4).jpeg";
import img5 from "../img/WhatsApp Image 2026-05-15 at 11.37.12 (5).jpeg";
import img6 from "../img/WhatsApp Image 2026-05-15 at 11.37.13.jpeg";

import ReviewSection from "./ReviewSection";
import GoogleReviewsSection from "./GoogleReviewsSection";

import zaun from "../img/WhatsApp Image 2026-05-15 at 11.51.31.jpeg";
import carport from "../img/WhatsApp Image 2026-05-15 at 11.42.30.jpeg";
import gelander from "../img/WhatsApp Image 2026-05-15 at 11.44.35.jpeg";
import Terrassenüberdachung from "../img/WhatsApp Image 2026-05-15 at 11.35.39 (1).jpeg";
import { Link } from "react-router-dom";

export default function Glasschiebeelemente() {
  const swiperRef = useRef(null);
  const [activeTab, setActiveTab] = useState("beschreibung");

  const images = [img, img1, img2, img3, img4, img5, img6];

  const technischeDaten = [
    { eigenschaft: "Glasart", wert: "Einscheibensicherheitsglas (ESG)" },
    { eigenschaft: "Glasstärken", wert: "8 mm (Standard), optional 10 mm" },
    { eigenschaft: "Rahmen", wert: "Rahmenlos – Aluminiumlaufprofile oben und unten" },
    { eigenschaft: "Max. Elementhöhe", wert: "Bis 2500 mm" },
    { eigenschaft: "Max. Elementbreite", wert: "Bis 1000 mm pro Flügel" },
    { eigenschaft: "Laufsystem", wert: "Bodengeführt, oben gelagert" },
    { eigenschaft: "Öffnungsarten", wert: "Einseitig, beidseitig, Mittelöffnung" },
    { eigenschaft: "Verriegelung", wert: "Boden- oder Griffverriegelung" },
  ];

  const productsEmpfehlung = [
    {
      title: "Zaun",
      description: "Modernes Design und minimaler Pflegeaufwand.",
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
      description: "Schützt zuverlässig vor Regen und Sonne.",
      image: Terrassenüberdachung,
      link: "/ueberdachung",
    },
    {
      title: "Geländer",
      description: "Moderne Glas- und Aluminiumlösungen für Ihr Zuhause.",
      image: gelander,
      link: "/gelaender",
    },
  ];

  return (
    <div className="mdiv">
      <div className="carport-page">

        {/* HERO */}
        <section className="carport-hero">
          <div className="slider-section sec">

            <Swiper spaceBetween={10} onSwiper={(s) => (swiperRef.current = s)}>
              {images.map((img, i) => (
                <SwiperSlide key={i}>
                  <img src={img} className="main" alt="slide" />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="thumbnails">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="thumb"
                  onClick={() => swiperRef.current?.slideTo(i)}
                  alt="thumb"
                />
              ))}
            </div>

          </div>

          <div className="carport-info">
            <h2>Glasschiebeelemente</h2>
            <p>
              Flexible Glaslösung für Wind- und Wetterschutz mit maximaler Offenheit und modernem Design.
            </p>
          </div>
        </section>

        {/* TABS */}
        <section className="carport-tabs">

          <div className="tabs">
            <button className={activeTab === "beschreibung" ? "active" : ""} onClick={() => setActiveTab("beschreibung")}>Beschreibung</button>
            <button className={activeTab === "downloads" ? "active" : ""} onClick={() => setActiveTab("downloads")}>Downloads</button>
            <button className={activeTab === "daten" ? "active" : ""} onClick={() => setActiveTab("daten")}>Technische Daten</button>
          </div>

          <div className="tab-content">

            {/* BESCHREIBUNG */}
            {activeTab === "beschreibung" && (
              <div className="beschreibung">

                <div className="beschreibung-card">
                  <h2>Glasschiebeelemente</h2>
                  <p>
                   Unsere Glasschiebeelemente verwandeln Ihre Terrasse in einen wind- und wettergeschützten Wohlfühlraum. Durch das rahmenlose Design genießen Sie maximale Transparenz und einen nahezu uneingeschränkten Panoramablick. Ideal als Ergänzung zu Terrassenüberdachungen oder Wintergärten – flexibel, stilvoll und funktional.  </p>
                </div>


  {/* Vorteile */}
  <div className="beschreibung-card">
    <h3>Vorteile</h3>

    <div className="feature-grid">

      <div className="feature-item">
        <span>✔</span>
        <p>100 % transparenter Rundumblick</p>
      </div>

      <div className="feature-item">
        <span>✔</span>
        <p>Wind- und Wetterschutz bei maximaler Offenheit</p>
      </div>

      <div className="feature-item">
        <span>✔</span>
        <p>Leichtgängige, langlebige Laufschienen</p>
      </div>

      <div className="feature-item">
        <span>✔</span>
        <p>Platzsparendes Öffnen durch Schiebesystem</p>
      </div>

      <div className="feature-item">
        <span>✔</span>
        <p>Schall- & Wärmeschutz durch ESG‑Glas</p>
      </div>

      <div className="feature-item">
        <span>✔</span>
        <p>Erweiterbar zum Kaltwintergarten</p>
      </div>

    </div>
  </div>

  {/* Optionen */}
  <div className="beschreibung-card">
    <h3>Optionen</h3>

    <div className="info-list">

      <div className="info-item">
        <h4>Glas</h4>
        <ul>
          <li>Klarglas</li>
          <li>Mattglas</li>
          <li>Strukturglas</li>
        </ul>
      </div>

      <div className="info-item">
        <h4>Farben</h4>
        <ul>
          <li>RAL 7016 Anthrazit</li>
          <li>RAL 9016 Weiß</li>
          <li>Sonderfarben möglich</li>
        </ul>
      </div>

      <div className="info-item">
        <h4>Griffe</h4>
        <ul>
          <li>Standardgriff</li>
          <li>Schlossgriff</li>
          <li>Kindersicherung</li>
        </ul>
      </div>

      <div className="info-item">
        <h4>Systemvarianten</h4>
        <ul>
          <li>2–6 Schiebefelder</li>
          <li>Einseitige oder beidseitige Öffnung</li>
          <li>Mittelöffnung möglich</li>
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
        <p>Soft‑Close‑System</p>
      </div>

      <div className="feature-item">
        <span>🔧</span>
        <p>Barrierefreie Bodenschiene</p>
      </div>

      <div className="feature-item">
        <span>🔧</span>
        <p>Sicherheitsverriegelung</p>
      </div>

      <div className="feature-item">
        <span>🔧</span>
        <p>Dichtungen gegen Wind & Regen</p>
      </div>

      <div className="feature-item">
        <span>🔧</span>
        <p>Integrierte Bürstendichtungen</p>
      </div>

    </div>
  </div>

  {/* Leistungen */}
  <div className="beschreibung-card">
    <h3>Unsere Leistungen</h3>

    <div className="feature-grid">

      <div className="feature-item">
        <span>✓</span>
        <p>Maßanfertigung nach Ihren Vorgaben</p>
      </div>

      <div className="feature-item">
        <span>✓</span>
        <p>Professionelles Aufmaß vor Ort</p>
      </div>

      <div className="feature-item">
        <span>✓</span>
        <p>Lieferung & fachgerechte Montage</p>
      </div>

      <div className="feature-item">
        <span>✓</span>
        <p>Demontage alter Systeme</p>
      </div>

      <div className="feature-item">
        <span>✓</span>
        <p>5 Jahre Garantie</p>
      </div>

    </div>
  </div>


              </div>
            )}

            {/* DOWNLOADS */}
            {activeTab === "downloads" && (
              <div className="downloads-section">
                <h3>Downloads</h3>
                <p>Aktuell sind keine Downloads verfügbar.</p>
              </div>
            )}

            {/* TECHNISCHE DATEN */}
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
                    {technischeDaten.map((row, i) => (
                      <tr key={i}>
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

        {/* EMPFEHLUNGEN */}
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

        <ReviewSection />
        <GoogleReviewsSection />

      </div>
    </div>
  );
}
