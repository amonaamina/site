import React from "react";
import "./Uberdachungen.css";
import img from "../img/WhatsApp Image 2026-05-15 at 11.51.31.jpeg";
import umbrella from '../img/star.png';
import ReviewSection from "./ReviewSection";
import GoogleReviewsSection from "./GoogleReviewsSection";
import { Link } from "react-router-dom";
import lamellendach from "../img/WhatsApp Image 2026-05-15 at 11.45.29.jpeg";
import Terrassenüberdachung from "../img/WhatsApp Image 2026-05-15 at 11.35.39 (1).jpeg";
import gelander from "../img/WhatsApp Image 2026-05-15 at 11.44.35.jpeg";
import carport from "../img/WhatsApp Image 2026-05-15 at 11.42.30.jpeg";

const products = [
  {
    title: "Aluminium Zaun",
    description: "modernes Design und minimalen Pflegeaufwand.",
    image: img,
   link: "/zaun",
  }
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

export default function Zauns() {
  return (
    <div className="ueberdachungen-page">
      <header className="header1">
        <h1>Zaun</h1>
        <div className="header-info1">
          <span>📞 +491747086562</span>
          <span>✓ Professionelle Beratung</span>
          <span>✓ 0% Finanzierung</span>
          <span>✓ Großes Sortiment</span>
        </div>
      </header>

      <section className="product-section">
         <div className="product-toolbar">
    <span className="product-count">{products.length} Artikel</span>
    <div className="sort-container">
      <label htmlFor="sort" className="sort-label">Sortieren nach</label>
      <select id="sort" className="sort-select">
        <option>Artikelname</option>
        <option>Neueste zuerst</option>
        <option>Beliebteste</option>
      </select>
    </div>
  </div>
        <div className="product-grid">
          {products.map((p, index) => (
            <Link key={index} to={p.link} className="product-card">
              <img src={p.image} alt={p.title} />
              <div className="product-info">
                <h3>{p.title}</h3>
                <p className="description">{p.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <div className="ueberdachungen-intro">
    <section className="intro-section">
  <h2>
    <img src={umbrella} alt="Beschreibung" /> Zäune
  </h2>

  <p>
    Zäune von Wintergartenmeister bieten zuverlässigen Sichtschutz, Sicherheit und ein modernes Design für Ihr Grundstück.
    Sie verbinden Funktionalität mit einer hochwertigen und zeitlosen Optik.
  </p>

  <ul>
    <li>Lange Lebensdauer</li>
    <li>Stabil & wetterfest</li>
    <li>Pflegeleicht</li>
    <li>Nachhaltig & umweltfreundlich</li>
  </ul>

  <p>
    Entdecken Sie unsere Zaunlösungen für Garten, Grundstück und Einfahrt –
    für mehr Sicherheit, Privatsphäre und ein harmonisches Gesamtbild.
  </p>
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
      <ReviewSection />
      <GoogleReviewsSection/>
    </div>
    </div>
  );
}
